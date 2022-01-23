import Image from 'next/image'
import { PrimaryInput } from '../../inputs/PrimaryInput'
import React, { useState } from 'react'

import eyeIcon from '../../../assets/eye.svg'
import eyeIconOff from '../../../assets/eye-off.svg'

interface PasswordField {
	label: string
	id?: string
}

export const PasswordField = ({ label, id }: PasswordField) => {
	const [passwordShown, setPasswordShown] = useState(false)

	const togglePassword = () => setPasswordShown(!passwordShown)

	return (
		<PrimaryInput
			icon={<Image src={passwordShown ? eyeIconOff : eyeIcon} width={21} alt="eye icon" />}
			type={passwordShown ? 'text' : 'password'}
			label={label}
			id={id}
			iconClick={togglePassword}
		/>
	)
}
