import type { RequestHandler } from "@sveltejs/kit";

const videos: Video[] = []

export const get: RequestHandler = () => {
	console.log(videos.length)
	return {
		body: videos
	}
}

export const post: RequestHandler = ({ body }) => {
	// @ts-ignore
	videos.push(body)
	return {
		body: videos
	}
}