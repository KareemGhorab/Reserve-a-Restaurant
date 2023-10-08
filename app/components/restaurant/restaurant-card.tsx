import { TRestaurant } from '@/types/app/restaurant'
import Image from 'next/image'
import Link from 'next/link'

import Review from './review'

type Props = {
	restaurant: TRestaurant
}

const RestaurantCard: React.FC<Props> = ({
	restaurant: {
		bookedCount,
		category,
		country,
		image,
		name,
		priceRange,
		reviewsCount,
		totalReview,
		slug,
	},
}): JSX.Element => (
	<article className='border rounded overflow-hidden w-72 h-96'>
		<Link href={`/restaurant/${slug}`}>
			<header className='h-30 w-full'>
				<Image {...image} alt={image.alt} className='w-full h-full' />
			</header>
			<main className='p-2 flex flex-col gap-3'>
				<h3 className='font-semibold text-xl'>{name}</h3>
				<Review review={totalReview} reviewCount={reviewsCount} />
				<div className='flex gap-3'>
					<p>{category}</p>
					<p>{priceRange}$</p>
					<p>{country}</p>
				</div>
				<p className='font-semibold'>
					Booked {bookedCount} times today
				</p>
			</main>
		</Link>
	</article>
)

export default RestaurantCard
