import Header from '@/app/components/ui/header'

type Props = {
	name: string
	country: string
}

const RestaurantDetailsHeader: React.FC<Props> = ({
	name,
	country,
}): JSX.Element => (
	<Header>
		<h2 className='text-white text-center font-medium text-7xl py-48'>
			{name} ({country})
		</h2>
	</Header>
)

export default RestaurantDetailsHeader
