<script lang="ts">
	import { goto } from '$app/navigation';
	import { addFood } from '@/stores/food';

	let title: string;
	let description: string;
	let tags: string;
	let img_url: string;

	const createFood = async () => {
		let food = { title, description, tags: tags.split(','), img_url };
		addFood(food);
		goto('/food');
	};
</script>

<svelte:head>
	<title>Create Food</title>
</svelte:head>
<!-- this will resolve to /food/create -->
<h1>Create Food</h1>
<form>
	<label for="title">Title</label>
	<input id="title" name="title" bind:value={title} />
	<label for="description">Description</label>
	<input bind:value={description} />
	<label for="tags">Tags</label>
	<input bind:value={tags} />
	<label for="img_url">Image Url</label>
	<input bind:value={img_url} />
	<div class="btn-group">
		<button type="button" class="btn" on:click={createFood}>Create</button>
		<button type="reset" class="btn">Reset</button>
		<a href="/food">
			<button class="btn">Cancel</button>
		</a>
	</div>
</form>
