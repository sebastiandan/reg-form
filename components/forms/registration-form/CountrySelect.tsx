import React, { useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Chevron } from '../../../assets/chevron'

export const CountrySelect = () => {
	const placeholder = [{ name: 'Country' }]
	const [country, setContry] = useState<HTMLSelectElement[]>()
	const [selectedCountry, setSelectedCountry] = useState(placeholder[0])
	const renderInput = 'h-16 w-full px-5 rounded-14 text-Gray bg-GrayLight border relative'
	const hover = 'border-transparent hover:border-Gray'

	const fetchData = () => {
		fetch('https://restcountries.com/v2/all?fields=name')
			.then((response) => {
				return response.json()
			})

			.then((data) => {
				setContry(data)
			})
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className={`relative h-16`}>
			<Listbox value={selectedCountry} onChange={setSelectedCountry}>
				{({ open }) => (
					<div className={`absolute w-full rounded-14 ${open ? 'shadow-xl z-50' : ''}`}>
						<Listbox.Button
							className={`${renderInput} text-left flex items-center justify-between ${
								open
									? `rounded-b-none bg-white border-t-transparent border-x-transparent border-b-[#F2F5F8]`
									: hover
							}`}
						>
							<span>{selectedCountry.name}</span>
							<Chevron pos={open} />
						</Listbox.Button>
						{open && (
							<Transition
								show={open}
								enter="transition duration-300 ease-out"
								enterFrom="transform scale-95 opacity-0"
								enterTo="transform scale-100 opacity-100"
								leave="transition duration-75 ease-out"
								leaveFrom="transform scale-100 opacity-100"
								leaveTo="transform scale-95 opacity-0"
							>
								<Listbox.Options
									static
									className={`p-2 grid grid-cols-1 gap-1 drop-shadow-SelectShadow bg-white border-0 w-full overflow-auto text-base rounded-b-14 max-h-60 sm:text-sm`}
								>
									{country?.map((item) => (
										<Listbox.Option
											key={item.name}
											value={item}
											className={`hover:bg-GrayLight rounded-7 px-3 py-2 cursor-pointer text-base text-Gray`}
										>
											{item.name}
										</Listbox.Option>
									))}
								</Listbox.Options>
							</Transition>
						)}
					</div>
				)}
			</Listbox>
		</div>
	)
}
