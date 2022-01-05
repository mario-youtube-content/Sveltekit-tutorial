type Food = {
	id: number
	title: string
	tags: string[]
	description: string
	img_url: string
}

type CreateFoodArgs = {
	title: string
	tags: string[]
	description: string
	img_url: string
}

type Quote = string

type Video = {
	url: string
	reason: string
}