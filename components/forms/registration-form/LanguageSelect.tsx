import React, { useState } from 'react'
import Image from 'next/image'
import { Listbox, Transition } from '@headlessui/react'
import { Chevron } from '../../../assets/chevron'

import slovFlag from '../../../assets/flags/slovakia.svg'
import ukFlag from '../../../assets/flags/uk.svg'

const langages = [
	{ id: 1, name: 'Slovakia', flag: slovFlag, alt: 'Slovak flag' },
	{ id: 2, name: 'English', flag: ukFlag, alt: 'UK flag' },
]

export const LanguageSelect = () => {
	const placeholder = [{ name: 'Language' }]
	const [selectedLang, setSelectedLang] = useState(placeholder[0])
	const renderInput = 'h-16 w-full px-5 rounded-14 text-Gray bg-GrayLight border relative'
	const hover = 'border-transparent hover:border-Gray'

	return (
		<div className={`relative h-16`}>
			<Listbox value={selectedLang} onChange={setSelectedLang}>
				{({ open }) => (
					<div className={`absolute w-full rounded-14 ${open ? 'shadow-xl z-50' : ''}`}>
						<Listbox.Button
							className={`${renderInput} text-left flex items-center justify-between ${
								open
									? `rounded-b-none bg-white border-t-transparent border-x-transparent border-b-[#F2F5F8]`
									: hover
							}`}
						>
							<span>{selectedLang.name}</span>
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
									{langages?.map((item) => (
										<Listbox.Option
											key={item.id}
											value={item}
											className={`hover:bg-GrayLight rounded-7 px-3 py-2 cursor-pointer text-base text-Gray flex`}
										>
											<Image src={item.flag} alt={item.alt} />
											<span className={`ml-6`}>{item.name}</span>
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
