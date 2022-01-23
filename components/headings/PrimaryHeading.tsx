interface PrimaryHeading {
	text: string
}

export const PrimaryHeading = ({ text }: PrimaryHeading) => {
	return (
		<h1 className={`font-medium text-GrayDark text-3xl sm:text-4xl md:text-5xl lg:text-6xl`}>
			{text}
		</h1>
	)
}
