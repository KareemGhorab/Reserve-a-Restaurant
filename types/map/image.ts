import { TImage } from '../app/image'
import { TImageResponse } from '../response/image'

export const mapImageToApp = ({
	alt,
	height,
	src,
	width,
}: TImageResponse): TImage => ({
	alt,
	height,
	src,
	width,
})

export const mapImageToResponse = ({
	alt,
	height,
	src,
	width,
}: TImage): TImageResponse => ({
	alt,
	height,
	src,
	width,
})
