import React from 'react'
import { motion } from 'framer-motion'
import { PrimaryHeading } from '../headings/PrimaryHeading'

interface Layoutform {
	children: React.ReactNode
	heading?: string
}

export const Layoutform = ({ children, heading }: Layoutform) => {
	const RenderHeading = () => {
		if (heading) {
			return (
				<div className={`w-full md:text-center mb-7 md:mb-14`}>
					<PrimaryHeading text={heading} />
				</div>
			)
		}
		return null
	}

	return (
		<motion.div
			initial={{ scale: 0.8, opacity: 0, translateY: -300 }}
			animate={{ scale: 1, opacity: 1, translateY: 0 }}
			exit={{ scale: 0.8, opacity: 0, translateY: 300 }}
			transition={{ type: 'tween' }}
			className={`py-6 md:py-14 px-5 md:px-10 lg:px-28 lg:pt-24 lg:pb-36 mx-5 mt-5 mb-auto md:m-auto bg-white rounded-3xl drop-shadow-ShadowForm w-full md:w-auto `}
		>
			<div className={`md:w-166`}>
				<RenderHeading />
				<div>{children}</div>
			</div>
		</motion.div>
	)
}
