<script lang="ts">
	import { goto } from '$app/navigation';

	let url: string;
	let reason: string;

	const addVideo = async () => {
		const response = await fetch('/api/videos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify({
				url,
				reason
			})
		});
		if (response.ok) {
			goto('/videos');
		}
	};
</script>

<svelte:head>
	<title>Add Favorite Video</title>
</svelte:head>

<h1>Add Favorite Video</h1>
<form>
	<label for="url">Youtube embed URL:</label>
	<input bind:value={url} type="url" id="url" />
	<label for="reason">Why you love it?</label>
	<input bind:value={reason} type="text" id="reason" />
	<button type="button" class="btn" on:click={addVideo}>Add</button>
</form>
