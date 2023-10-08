'use client'

import Link from 'next/link'
import Button from '../ui/button'

const Navbar: React.FC = (): JSX.Element => (
	<nav className='bg-white flex justify-between items-center p-10'>
		<h1 className='text-xl font-bold'>
			<Link href='/'>Reserve a Restaurant</Link>
		</h1>
		<div className='flex gap-3'>
			<Button onClick={() => {}}>Sign up</Button>
			<Button variant='secondary' onClick={() => {}}>
				Sign in
			</Button>
		</div>
	</nav>
)

export default Navbar
