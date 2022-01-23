import React from 'react'

interface PrimaryLayout {
	children: React.ReactNode
}

export const PrimaryLayout = ({ children }: PrimaryLayout) => {
	return (
		<div
			className={`min-w-screen min-h-screen flex xl:py-32 xl:px-72 bg-gradient-to-br from-white to-[#E0EAF6]`}
		>
			{children}
		</div>
	)
}
