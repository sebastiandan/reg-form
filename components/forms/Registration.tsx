import { useState } from 'react'
import { RegistrationForm } from './registration-form/RegistrationForm'
import { RegistrationSuccess } from './registration-form/RegistrationSuccess'

export const Registration = () => {
	const [isSuccess, setIsSuccess] = useState(false)

	const togglSuccess = () => {
		setIsSuccess(true)
	}

	if (isSuccess) {
		return <RegistrationSuccess show={isSuccess} />
	}

	return <RegistrationForm success={togglSuccess} />
}
