<script lang="ts">
	import { removeFood } from '@/stores/food';

	export let food: Food;
</script>

<div class="card">
	<img class="card-img" src={food.img_url} alt="Something" />
	<div class="card-title">{food.title}</div>
	<div class="card-text">
		{food.description}
	</div>
	<div class="btn-group">
		{#each food.tags as tag}
			<button class="btn">{tag}</button>
		{/each}
	</div>
	<button
		class="card-delete-btn btn"
		on:click={() => {
			removeFood(food.id);
		}}>X</button
	>
</div>
