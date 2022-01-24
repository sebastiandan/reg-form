import React from 'react'

interface Chevron {
	pos: boolean
}

export const Chevron = ({ pos }: Chevron) => {
	const pointsDown = '1 1 5.8 5.8 10.6 1'
	const pointsUp = '1 5.8 5.8 1 10.6 5.8'

	return (
		<svg
			className={`w-3 ${pos ? 'rotate-180' : ''}`}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 11.6 6.8"
		>
			<polyline
				strokeWidth="2"
				fill="none"
				stroke="#c0ccda"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<animate
					attributeName="points"
					dur="1s"
					values={pointsDown}
					repeatCount="indefinite"
				/>
			</polyline>
		</svg>
	)
}
