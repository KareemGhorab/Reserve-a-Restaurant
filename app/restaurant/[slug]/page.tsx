import { fetchRestaurantBySlug } from '@/service/restaurant'
import RestaurantDetailsHeader from './restaurant-details/header'
import RestaurantDetailsCard from './restaurant-details/restaurant-details-card/restaurant-details-card'

type Props = {
	params: { slug: string }
}

const RestaurantDetails: React.FC<Props> = async ({
	params: { slug },
}): Promise<JSX.Element> => {
	const { name, country } = await fetchRestaurantBySlug(slug)

	return (
		<>
			<RestaurantDetailsHeader name={name} country={country} />
			<RestaurantDetailsCard slug={slug} name={name} />
		</>
	)
}

export default RestaurantDetails
