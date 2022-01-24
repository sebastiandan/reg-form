interface PrimaryHeading {
	text: string
	customClass?: string
}

export const PrimaryHeading = ({ text, customClass }: PrimaryHeading) => {
	return (
		<h1
			className={`font-medium text-GrayDark text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
				customClass ? customClass : ''
			}`}
		>
			{text}
		</h1>
	)
}
