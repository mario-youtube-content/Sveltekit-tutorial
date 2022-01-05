<script lang="ts">
	import FoodCard from '@/components/FoodCard.svelte';
	import { foods } from '@/stores/food';
</script>

<svelte:head>
	<title>Favorite Food</title>
</svelte:head>

<h1>Favorite Food</h1>
<div class="grid-3">
	{#each $foods as food}
		<FoodCard {food} />
	{/each}
</div>
<a href="/food/create">
	<button class="fab">+</button>
</a>
