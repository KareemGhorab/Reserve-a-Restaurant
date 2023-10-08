import { TImage } from './image'

export type TReview = 1 | 2 | 3 | 4 | 5

export type TRestaurant = {
	image: TImage
	name: string
	totalReview: TReview
	reviewsCount: number
	category: string
	country: string
	priceRange: number
	bookedCount: number
	slug: string
}
