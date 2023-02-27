<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { Filesystem, Directory, type ReaddirResult } from '@capacitor/filesystem';
</script>

<h1>Welcome to SvelteKit</h1>
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
>
<button
	on:click={() =>
		StableDiffusion.unzip({
			url: 'https://huggingface.co/coreml/coreml-stable-diffusion-2-1-base/resolve/main/split_einsum/stable-diffusion-v2.1-base_no-i2i_split-einsum.zip',
			modelsDirName: 'models'
		})}>unzip</button
>
<button
	on:click={() =>
		StableDiffusion.generateTextToImage({
			modelPath: 'models/stable-diffusion-v2.1-base_no-i2i_split-einsum',
			prompt: 'a photo of car'
		})}>generateTextToImage</button
>
<button
	on:click={async () =>
		await Filesystem.readdir({
			path: '/',
			directory: Directory.Documents
		})}>Get Files</button
>
<button
	on:click={async () =>
		await Filesystem.readdir({
			path: '/models',
			directory: Directory.Documents
		})}>Get Models Files</button
>
<button
	on:click={async () =>
		await Filesystem.mkdir({
			path: 'models',
			directory: Directory.Documents
		})}>Create Models Dir</button
>
