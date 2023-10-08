import { TImageResponse } from './image'

export type TReviewResponse = 1 | 2 | 3 | 4 | 5

export type TRestaurantResponse = {
	image: TImageResponse
	name: string
	total_review: TReviewResponse
	reviews_count: number
	category: string
	country: string
	price_range: number
	booked_count: number
	slug: string
}
