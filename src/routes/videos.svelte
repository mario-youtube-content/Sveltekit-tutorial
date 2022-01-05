<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const videos = await fetch('/api/videos');
		if (videos.ok) {
			return {
				props: {
					videos: await videos.json()
				}
			};
		}
		return {
			props: {
				videos: []
			}
		};
	};
</script>

<script lang="ts">
	import VideoCard from '@/components/VideoCard.svelte';

	export let videos: Video[];
</script>

<svelte:head>
	<title>Favorite Videos</title>
</svelte:head>

<h1>Favorite Videos</h1>

{#each videos as video}
	<VideoCard {video} />
{/each}

<a href="/videos/create">
	<button class="fab">+</button>
</a>
