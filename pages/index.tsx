import type { NextPage } from 'next'
import { PrimaryLayout } from '../components/layouts/PrimaryLayout'
import { Registration } from '../components/forms/Registration'

const Home: NextPage = () => {
	return (
		<PrimaryLayout>
			<Registration />
		</PrimaryLayout>
	)
}

export default Home
