<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div style="padding: 0 2rem;">
	<h1>Favorite App</h1>
	<div class="centered">
		<div class="btn-group">
			<a href="/food">
				<button class="btn">Favorite Food</button>
			</a>
			<a href="/quote">
				<button class="btn">Favorite Quote</button>
			</a>
			<a href="/video">
				<button class="btn">Favorite Video</button>
			</a>
		</div>
	</div>
</div>
