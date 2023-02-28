<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { Filesystem, Directory } from '@capacitor/filesystem';
	import { onDestroy, onMount } from 'svelte';
	import type { PluginListenerHandle } from '@capacitor/core';
	import { _ } from 'svelte-i18n';

	let prompt = '';
	let base64Data: string | undefined;
	$: image = 'data:image/jpeg;base64,' + base64Data;

	let dProgress = 0;
	let dStatus = '';
	let dError: string | undefined = '';
	let zStatus = '';
	let gProgress = 0;
	let gStatus = '';
	let gError: string | undefined = '';

	const generate = async () =>
		StableDiffusion.generateTextToImage({
			modelPath: 'models/stable-diffusion-v2.1-base_no-i2i_split-einsum',
			prompt
		});

	let handlers: PluginListenerHandle[] = [];
	onMount(async () => {
		handlers = [
			await StableDiffusion.addListener('downloadProgress', (data) => {
				dProgress = data.progress;
			}),
			await StableDiffusion.addListener('downloadDidComplete', (data) => {
				dStatus = data.state;
				dError = data.error;
			}),
			await StableDiffusion.addListener('unzipDidComplete', (data) => {
				zStatus = data.state;
			}),
			await StableDiffusion.addListener('generateProgress', (data) => {
				gProgress = data.progress;
			}),
			await StableDiffusion.addListener('generateDidComplete', (data) => {
				gStatus = data.state;
				gError = data.error;
				base64Data = data.image;
			})
		];
	});

	onDestroy(() => {
		handlers.map((handler) => handler.remove());
	});
</script>

<ion-list>
	<ion-item lines="none">
		<ion-label>{$_('page.generate.prompt')}</ion-label>
	</ion-item>
	<ion-item>
		<ion-textarea auto-grow={true} value={prompt} />
	</ion-item>
	<ion-item lines="none">
		<ion-label>{$_('page.generate.negativePrompt')}</ion-label>
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
			<ion-img src={image} />
		</ion-item>
	{/if}
</ion-list>
