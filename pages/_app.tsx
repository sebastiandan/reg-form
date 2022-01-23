import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<title>Test</title>
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
