import { TRestaurant } from '@/types/app/restaurant'
import { TRestaurantResponse } from '@/types/response/restaurant'

const dummyRestaurantsResponse: TRestaurantResponse[] = [
	{
		booked_count: 3,
		category: 'Mexican',
		country: 'Toronto',
		image: {
			src: '/restaurants/tacos.jpg',
			alt: 'Tacos',
			height: 960,
			width: 1280,
		},
		name: 'Milestones Grill',
		price_range: 50,
		reviews_count: 77,
		total_review: 4,
		slug: 'milestones_grill',
	},
]

export const fetchRestaurants = async (): Promise<TRestaurantResponse[]> => {
	return Promise.resolve(dummyRestaurantsResponse)
}

export const fetchRestaurantBySlug = async (
	slug: string
): Promise<TRestaurantResponse> => {
	return Promise.resolve(dummyRestaurantsResponse[0])
}
