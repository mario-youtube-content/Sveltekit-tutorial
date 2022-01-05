<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	export const load: Load = async ({ fetch }) => {
		const quote = await fetch('https://api.kanye.rest/');
		if (quote.ok) {
			return {
				props: {
					quote: (await quote.json()).quote
				}
			};
		}
		return {
			props: {
				quote: 'I love the smells of good in the morning'
			}
		};
	};
</script>

<script lang="ts">
	export let quote;

	// onMount(async () => {
	// 	const response = await fetch('https://api.kanye.rest/');
	// 	if (response.ok) {
	// 		quote = (await response.json()).quote;
	// 	}
	// });
</script>

<svelte:head>
	<title>{quote}</title>
</svelte:head>

<h1>Favorite Quote</h1>
<div class="text-center">
	<q id="quote" on:click={() => console.log('haha')}>{quote}</q><br /><br />
	<label for="quote">- Kanye West</label>
</div>
