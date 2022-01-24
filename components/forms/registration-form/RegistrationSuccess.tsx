import { Layoutform } from '../../layouts/FormsLayout'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import checkIcon from '../../../assets/check.svg'
import { PrimaryHeading } from '../../headings/PrimaryHeading'

interface RegistrationSuccess {
	show: boolean
}

export const RegistrationSuccess = ({ show }: RegistrationSuccess) => {
	const CheckCircle = () => {
		return (
			<div
				className={`w-16 md:w-28 h-16 md:h-28 rounded-full bg-Green flex items-center justify-center drop-shadow-GreenShadow`}
			>
				<Image width={26} height={26} src={checkIcon} alt="check" />
			</div>
		)
	}

	return (
		<Layoutform>
			<Transition
				show={show}
				enter="transition duration-300 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<div className={`flex flex-col items-center justify-center md:min-h-[500px]`}>
					<CheckCircle />
					<div
						className={`mt-8 md:mt-12 text-center max-w-[500px] flex flex-col items-center`}
					>
						<PrimaryHeading customClass={`max-w-[300px]`} text="Success registration" />
						<p className={`text-Gray mt-4 md:mt-8 font-normal leading-7`}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis
							gravida ex, at maximus lorem condimentum ut. Cras purus mauris, convallis
							vitae sollicitudin sed,
							<br className={`hidden lg:block`} /> fringilla lobortis lorem.
						</p>
					</div>
				</div>
			</Transition>
		</Layoutform>
	)
}
