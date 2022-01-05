<script lang="ts">
	export let video: Video;
</script>

<div class="card">
	<iframe
		width="100%"
		height="auto"
		src={video.url}
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	<div class="card-text">{video.reason}</div>
</div>
