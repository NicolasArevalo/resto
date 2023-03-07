import Head from 'next/head'
import Navbar from '@components/Navbar'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
	headerTitle: string
}

const Layout = ({
	children,
	headerTitle = 'RESTO | Restaurant Manager',
}: LayoutProps) => {
	return (
		<>
			<Head>
				<title>{headerTitle} | RESTO Restaurant Manager</title>
				<meta name='description' content='Application to manage a restaurant' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<main className='max-w-[80rem] bg-red-200 mx-auto'>{children}</main>
		</>
	)
}

export default Layout
