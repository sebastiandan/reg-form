import React from 'react'
import { Gradient, GradientHover } from '../constants/styles'

interface PrimaryButton {
	text: string
}

export const PrimaryButton = ({ text }: PrimaryButton) => {
	return (
		<button
			className={`${Gradient} ${GradientHover} w-full whitespace-nowrap hover:drop-shadow-ButtonShadow rounded-16 text-white text-base py-5 md:py-6 px-20`}
			type="submit"
		>
			{text}
		</button>
	)
}
