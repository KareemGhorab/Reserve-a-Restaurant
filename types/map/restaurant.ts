import { TRestaurant } from '../app/restaurant'
import { TRestaurantResponse } from '../response/restaurant'
import { mapImageToApp, mapImageToResponse } from './image'

export const mapRestaurantToApp = ({
	booked_count,
	category,
	country,
	image,
	name,
	price_range,
	reviews_count,
	slug,
	total_review,
}: TRestaurantResponse): TRestaurant => ({
	bookedCount: booked_count,
	category: category,
	country: country,
	image: mapImageToApp(image),
	name: name,
	priceRange: price_range,
	reviewsCount: reviews_count,
	slug: slug,
	totalReview: total_review,
})

export const mapRestaurantToResponse = ({
	bookedCount,
	category,
	country,
	image,
	name,
	priceRange,
	reviewsCount,
	slug,
	totalReview,
}: TRestaurant): TRestaurantResponse => ({
	booked_count: bookedCount,
	category: category,
	country: country,
	image: mapImageToResponse(image),
	name: name,
	price_range: priceRange,
	reviews_count: reviewsCount,
	slug: slug,
	total_review: totalReview,
})
