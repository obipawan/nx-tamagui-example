import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { AppProps } from 'next/app';
import Head from 'next/head';

import React, { useMemo } from 'react';
import {config as Tamagui} from '@nx-tamagui-example/config';

export default function App({ Component, pageProps }: AppProps) {
	const [theme, setTheme] = useRootTheme();
	// memo to avoid re-render on dark/light change

	const contents = useMemo(() => {
		return <Component {...pageProps} />;
	}, [Component, pageProps]);
	// because we do our custom getCSS() above, we disableInjectCSS here

	return (
		<>
			<Head>
				<title>
					Tamagui in Nx Workspaces
				</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			<NextThemeProvider onChangeTheme={setTheme}>
				<Tamagui.Provider
					disableInjectCSS
					disableRootThemeClass
					defaultTheme={theme}
				>
					{contents}
				</Tamagui.Provider>
			</NextThemeProvider>
		</>
	);
}
