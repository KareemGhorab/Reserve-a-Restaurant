import { useCallback, useState } from 'react'

type TReturn<T> = {
	loading: boolean
	data?: T
	error?: Error
	run: () => void
}

const useAsync = <T>(asyncFunction: () => Promise<T>): TReturn<T> => {
	const [loading, setLoading] = useState<boolean>(false)
	const [data, setData] = useState<T>()
	const [error, setError] = useState<Error>()

	const run = useCallback(() => {
		setLoading(true)
		asyncFunction()
			.then((data) => setData(data))
			.catch((error) => setError(error))
			.finally(() => setLoading(false))
	}, [asyncFunction])

	return { loading, data, error, run }
}

export default useAsync
