<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	// import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	// import { Filesystem, Directory } from '@capacitor/filesystem';
	// import { onMount } from 'svelte';

	import Page from './file/[...path]/+page.svelte';

	// let dProgress = 0;
	// let dStatus = '';
	// let dError: string | undefined = '';
	// let zStatus = '';
	// let gProgress = 0;
	// let gStatus = '';
	// let gError: string | undefined = '';

	// onMount(() => {
	// 	StableDiffusion.addListener('downloadProgress', (data) => {
	// 		dProgress = data.progress;
	// 	});
	// 	StableDiffusion.addListener('downloadDidComplete', (data) => {
	// 		dStatus = data.state;
	// 		dError = data.error;
	// 	});
	// 	StableDiffusion.addListener('unzipDidComplete', (data) => {
	// 		zStatus = data.state;
	// 	});
	// 	StableDiffusion.addListener('generateProgress', (data) => {
	// 		gProgress = data.progress;
	// 	});
	// 	StableDiffusion.addListener('generateDidComplete', (data) => {
	// 		gStatus = data.state;
	// 		gError = data.error;
	// 	});
	// });
	onMount(() => {
		goto('/generate');
	});
</script>

<!-- <ion-item href="/file">
	<ion-label> ファイルマネージャ </ion-label>
</ion-item> -->

<!-- <h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => StableDiffusion.echo({ value: 'test' })}>echo</button>
<button
	on:click={() =>
		StableDiffusion.download({
			url: 'https://huggingface.co/coreml/coreml-stable-diffusion-2-1-base/resolve/main/split_einsum/stable-diffusion-v2.1-base_no-i2i_split-einsum.zip',
			modelsDirName: 'models'
		})}>download</button
><br />
dProgress: {dProgress}<br />
dStatus: {dStatus}<br />
dError: {dError}<br /><br />
<button
	on:click={() =>
		StableDiffusion.unzip({
			url: 'https://huggingface.co/coreml/coreml-stable-diffusion-2-1-base/resolve/main/split_einsum/stable-diffusion-v2.1-base_no-i2i_split-einsum.zip',
			modelsDirName: 'models'
		})}>unzip</button
><br />
zStatus: {zStatus}<br /><br />
<button
	on:click={() =>
		StableDiffusion.generateTextToImage({
			modelPath: 'models/stable-diffusion-v2.1-base_no-i2i_split-einsum',
			prompt: 'a photo of car'
		})}>generateTextToImage</button
><br />
gProgress: {gProgress}<br />
gStatus: {gStatus}<br />
gError: {gError}<br /><br />
<button
	on:click={async () =>
		await Filesystem.readdir({
			path: '/',
			directory: Directory.Documents
		})}>Get Files</button
><br /><br />
<button
	on:click={async () =>
		await Filesystem.readdir({
			path: '/models',
			directory: Directory.Documents
		})}>Get Models Files</button
><br /><br />
<button
	on:click={async () =>
		await Filesystem.mkdir({
			path: 'models',
			directory: Directory.Documents
		})}>Create Models Dir</button
> -->
