<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { v4 as uuid } from 'uuid';
	import { Capacitor } from '@capacitor/core';
	import Model from './model.svelte';
	import type { Model as ModelType } from './models';
	import { loadingController } from '@ionic/core';
	import Prompt from './prompt.svelte';

	let prompt: string | null | undefined;
	let seed = 1;
	let filePath: string | undefined;
	let model: ModelType | undefined;

	let progress = 0;
	let generating = false;
	const generate = async () => {
		if (!prompt || !model) return;

		generating = true;
		const loading = await loadingController.create({
			message: 'Generating...'
		});
		loading.present();

		const progressHandler = await StableDiffusion.addListener('generateProgress', (data) => {
			progress = data.progress;
		});

		const compHandler = await StableDiffusion.addListener('generateDidComplete', (data) => {
			compHandler.remove();
			progressHandler.remove();
			loading.dismiss();
			generating = false;
			if (data.filePath) {
				filePath = data.filePath;
			}
		});

		StableDiffusion.generateTextToImage({
			modelPath: `models/${model.fileName}`,
			prompt,
			savePath: `images/${uuid()}.png`,
			seed
		});
	};

	$: console.log(progress);
</script>

<ion-list>
	<Model bind:model />
	<Prompt bind:prompt />
	<ion-item-divider>
		<ion-label> Seed </ion-label>
	</ion-item-divider>
	<ion-item>
		<ion-input
			value={seed}
			type={'number'}
			on:ionChange={(ion) => {
				if (typeof ion.detail.value === 'string') {
					seed = parseInt(ion.detail.value, 10);
				}
			}}
		/>
	</ion-item>
	<ion-item>
		{#if generating}
			{#if progress}
				<ion-progress-bar color="blue" value={progress} />
			{:else}
				<ion-progress-bar color="blue" type="indeterminate" />
			{/if}
		{:else}
			<ion-button size={'large'} on:click={generate}>
				<ion-label>画像生成</ion-label>
			</ion-button>
		{/if}
	</ion-item>
	{#if filePath}
		<ion-item>
			<ion-img src={Capacitor.convertFileSrc(filePath)} />
		</ion-item>
	{/if}
</ion-list>
