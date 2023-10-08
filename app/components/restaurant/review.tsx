import { TReview } from '@/types/app/restaurant'

type Props = {
	review: TReview
	reviewCount: number
}

const REVIEW_STARS = '⭐⭐⭐⭐⭐★★★★'

const Review: React.FC<Props> = ({ review, reviewCount }): JSX.Element => (
	<div className='flex gap-2 items-center'>
		<div>{REVIEW_STARS.slice(5 - review, 10 - review)}</div>
		<p className='text-sm'>{reviewCount} reviews</p>
	</div>
)

export default Review
