import Link from 'next/link'

type Props = {
	slug: string
}

type ListItem = {
	label: string
	href: string
}

const RestaurantDetailsCardNav: React.FC<Props> = ({ slug }) => {
	const navMenu: ListItem[] = [
		{ label: 'Overview', href: `/restaurant/${slug}` },
		{ label: 'Menu', href: `/restaurant/${slug}/menu` },
	]

	return (
		<nav>
			<ul className='flex gap-5'>
				{navMenu.map(({ href, label }) => (
					<li key={label}>
						<Link href={href}>{label}</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default RestaurantDetailsCardNav
