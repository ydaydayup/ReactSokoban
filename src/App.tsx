import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme, App as AntdApp } from 'antd';
import 'dayjs/locale/zh-cn';

import { FC, useMemo } from 'react';

import $styles from './app.module.css';
import { localeData } from './components/demo/constants';
import ContextDemo, { Locale } from './components/demo/context';
import CustomDemo, { useLocale, useTheme } from './components/demo/custom';
import ReducerDemo, { Theme } from './components/demo/reducer';
import StateDemo from './components/demo/state';
import EffectDemo from './components/demo/effect';
import RefDemo from './components/demo/ref';
import MemoDemo from './components/demo/memo';
import { CallbackDemo } from './components/demo/callback';

const Main: FC = () => {
    const locale = useLocale();
    const antdLocaleData = useMemo(() => {
        if (!Object.keys(localeData).find((v) => v === locale.name)) {
            return localeData[0];
        }
        return localeData[locale.name];
    }, [locale.name]);
    const themeState = useTheme();
    const algorithm = useMemo(() => {
        const result = [themeState.compact ? theme.compactAlgorithm : theme.defaultAlgorithm];
        if (themeState.mode === 'dark') result.push(theme.darkAlgorithm);
        return result;
    }, [themeState]);
    return (
        <ConfigProvider
            locale={antdLocaleData}
            theme={{
                algorithm,
                token: {},
                components: {
                    Layout: {
                        colorBgBody: '',
                    },
                },
            }}
        >
            <StyleProvider hashPriority="high">
                <AntdApp>
                    <div className={$styles.app}>
                        <StateDemo />
                        <EffectDemo />
                        <RefDemo />
                        <MemoDemo />
                        <CallbackDemo />
                        <ContextDemo />
                        <ReducerDemo />
                        <CustomDemo />
                    </div>
                </AntdApp>
            </StyleProvider>
        </ConfigProvider>
    );
};
const App: FC = () => (
    <Locale>
        <Theme>
            <Main />
        </Theme>
    </Locale>
);
export default App;
