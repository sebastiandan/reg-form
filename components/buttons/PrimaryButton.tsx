import React, { MouseEventHandler } from 'react'
import { motion } from 'framer-motion'
import { Gradient } from '../constants/styles'

interface PrimaryButton {
	text: string
	onClick: MouseEventHandler
}

export const PrimaryButton = ({ text, onClick }: PrimaryButton) => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9 }}
			transition={{ duration: 0.3, delay: 0 }}
			onClick={onClick}
			className={`overflow-hidden group relative transition duration-500 ease-in-out w-full whitespace-nowrap hover:drop-shadow-ButtonShadow rounded-16 text-white text-base py-5 md:py-6 px-20`}
			type="submit"
		>
			<span className={`z-10 relative`}>{text}</span>
			<div
				className={`${Gradient} absolute -inset-1 group-hover:rotate-180 filter blur-md scale-150 rounded-full -top-20 h-56`}
			/>
		</motion.button>
	)
}
