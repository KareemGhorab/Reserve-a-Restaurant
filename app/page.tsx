'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from './components/ui/button'
import { fetchRestaurants } from '@/service/restaurant'
import useAsync from '@/hooks/use-async'
import { TRestaurant } from '@/types/app/restaurant'
import RestaurantCard from './components/restaurant/restaurant-card'
import Header from './components/ui/header'
import { TRestaurantResponse } from '@/types/response/restaurant'
import { mapRestaurantToApp } from '@/types/map/restaurant'

const Home = () => {
	const [location, setLocation] = useState<string>('')
	const {
		data: restaurantsResponse,
		error: restaurantsError,
		run: runFetchRestaurants,
	} = useAsync<TRestaurantResponse[]>(fetchRestaurants)
	const [restaurants, setRestaurants] = useState<TRestaurant[]>()
	const router = useRouter()

	useEffect(() => {
		runFetchRestaurants()
		setRestaurants(
			(restaurantsResponse ?? []).map((rr) => mapRestaurantToApp(rr))
		)
	}, [restaurantsResponse, runFetchRestaurants])

	return (
		<>
			<Header className='py-10'>
				<div className='flex flex-col items-center gap-5 w-fit mx-auto'>
					<h2 className='text-white text-center font-semibold text-3xl'>
						Find your table for any occasion
					</h2>
					<section className='flex gap-5 w-full'>
						<input
							type='text'
							placeholder='Location or Restaurant'
							className='rounded px-2 py-1 w-full'
							onChange={(e: any) => setLocation(e.target.value)}
						/>
						<Button
							variant='danger'
							onClick={() => {
								router.push(`/search/${location}`)
							}}
						>
							{"Let's go"}
						</Button>
					</section>
				</div>
			</Header>
			<main className='py-10 px-20'>
				<h2 className='text-xl text-center mb-20 font-semibold'>
					Reserve a Restaurant Now
				</h2>
				{restaurants ? (
					restaurants.map((restaurant) => (
						<RestaurantCard
							key={restaurant.slug}
							restaurant={restaurant}
						/>
					))
				) : (
					<div className='text-center'>Loading...</div>
				)}
			</main>
		</>
	)
}

export default Home
