import React from 'react'
import { Layoutform } from '../layouts/FormsLayout'
import { PrimaryInput } from '../inputs/PrimaryInput'
import { PrimaryButton } from '../buttons/PrimaryButton'
import { PrimaryToggle } from '../inputs/PrimaryToggle'

import { PasswordField } from './registration-form/PasswordField'

export const RegistrationForm = () => {
	return (
		<Layoutform heading="Registration Form">
			<form className={`grid gap-6 grid-cols-1`}>
				<div className={`grid md:grid-cols-2 gap-6`}>
					<PrimaryInput
						type="email"
						customClass={`md:col-span-2`}
						label="Email"
						id="email"
					/>
					<PrimaryInput type="text" label="First Name" id="fName" />
					<PrimaryInput type="text" label="Second Name" id="sName" />
					<PrimaryInput listbox />
					<PrimaryInput listbox />
					<PasswordField label="Password" id="password" />
					<PasswordField label="Confirm Password" id="cPassword" />
				</div>
				<div className={`w-full flex justify-between items-center h-10`}>
					<span className={`text-GrayDark`}>Private Profile </span>
					<PrimaryToggle />
				</div>
				<div className={`w-full border border-GrayLight`} />
				<div className={`w-full flex md:flex-row flex-col-reverse items-center`}>
					<div className={`md:min-w-[270px] mt-9 md:mt-0 w-full md:w-auto`}>
						<PrimaryButton text="Sign up" />
					</div>
					<div className={`flex md:ml-9 space-x-4 items-center`}>
						<PrimaryInput type="checkbox" />
						<span className={`text-[14px] text-[#31425A] w-full`}>
							Creating an account means you’re okay with our Privacy Policy.
						</span>
					</div>
				</div>
			</form>
		</Layoutform>
	)
}
