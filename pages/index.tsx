import type { NextPage } from 'next'
import { PrimaryLayout } from '../components/layouts/PrimaryLayout'
import { RegistrationForm } from '../components/forms/RegistrationForm'

const Home: NextPage = () => {
	return (
		<PrimaryLayout>
			<RegistrationForm />
		</PrimaryLayout>
	)
}

export default Home
