import Card from '@/app/components/ui/card'
import Divider from '@/app/components/ui/divider'

import RestaurantDetailsCardNav from './restaurant-details-card-nav'

type Props = {
	slug: string
	name: string
}

const RestaurantDetailsCard: React.FC<Props> = ({
	slug,
	name,
}): JSX.Element => (
	<Card className='relative -top-20 right-28 w-[600px] mx-auto'>
		<RestaurantDetailsCardNav slug={slug} />
		<Divider />
		<h3 className='font-semibold text-5xl'>{name}</h3>
	</Card>
)

export default RestaurantDetailsCard
