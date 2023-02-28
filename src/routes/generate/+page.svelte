<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { Filesystem, Directory } from '@capacitor/filesystem';
	import { onDestroy, onMount } from 'svelte';
	import type { PluginListenerHandle } from '@capacitor/core';

	let prompt: string | null | undefined = '';
	let base64Data: string | undefined;
	// $: image = 'data:image/jpeg;base64,' + base64Data;

	let dProgress = 0;
	let dStatus = '';
	let dError: string | undefined = '';
	let zStatus = '';
	let gProgress = 0;
	let gStatus = '';
	let gError: string | undefined = '';

	const generate = async () => {
		if (!prompt) return;

		const progressHandler = await StableDiffusion.addListener('generateProgress', (data) => {
			console.log('progressHandler');
			gProgress = data.progress;
			console.log('progressHandler2');
		});

		const compHandler = await StableDiffusion.addListener('generateDidComplete', (data) => {
			console.log('compHandler');
			compHandler.remove();
			progressHandler.remove();
			gStatus = data.state;
			gError = data.error;
			console.log('compHandler2');
		});

		StableDiffusion.generateTextToImage({
			modelPath: 'models/stable-diffusion-v2.1-base_split-einsum_compiled',
			prompt
		});
	};

	let handlers: PluginListenerHandle[] = [];
	onMount(async () => {
		handlers = [
			// await StableDiffusion.addListener('downloadProgress', (data) => {
			// 	dProgress = data.progress;
			// }),
			// await StableDiffusion.addListener('downloadDidComplete', (data) => {
			// 	dStatus = data.state;
			// 	dError = data.error;
			// }),
			// await StableDiffusion.addListener('unzipDidComplete', (data) => {
			// 	zStatus = data.state;
			// }),
			// await StableDiffusion.addListener('generateProgress', (data) => {
			// 	gProgress = data.progress;
			// }),
			// await StableDiffusion.addListener('generateDidComplete', (data) => {
			// 	console.log('comppppppppppp');
			// 	gStatus = data.state;
			// 	gError = data.error;
			// 	base64Data = data.image;
			// })
		];
	});

	onDestroy(() => {
		handlers.map((handler) => handler.remove());
	});
</script>

<ion-list>
	<ion-item lines="none">
		<ion-label>Prompt</ion-label>
	</ion-item>
	<ion-item>
		<ion-textarea
			auto-grow={true}
			value={prompt}
			on:ionChange={(ion) => (prompt = ion.detail.value)}
		/>
	</ion-item>
	<ion-item lines="none">
		<ion-label>Negative Prompt</ion-label>
	</ion-item>
	<ion-item>
		<ion-textarea auto-grow={true} />
	</ion-item>
	<ion-item>
		<ion-button size={'large'} on:click={generate}>
			<ion-label>画像生成</ion-label>
		</ion-button>
		{gProgress}
	</ion-item>
	{#if base64Data}
		<ion-item>
			<ion-img
				src="file:///private/var/mobile/Containers/Data/Application/CA8A6C55-F3DB-4A20-B2F2-D2CC435F7355/Documents/images/aaaa.png"
			/>
		</ion-item>
	{/if}
</ion-list>
