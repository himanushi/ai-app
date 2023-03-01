<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { models, type Model } from './models';
	import { Filesystem, Directory, type StatResult } from '@capacitor/filesystem';
	import Icon from '~/components/icon.svelte';
	import { loadingController } from '@ionic/core';

	let zipFile: StatResult | undefined;
	let dirFile: StatResult | undefined;
	export let model: Model | undefined;

	const loadFile = async () => {
		if (!model) return;
		const dir = await Filesystem.readdir({
			directory: Directory.Documents,
			path: 'models'
		});

		zipFile = undefined;
		dirFile = undefined;
		dir.files.forEach((file) => {
			if (!model) return;
			const zipName = model.url.substring(model.url.lastIndexOf('/') + 1);
			if (file.name === model.fileName) {
				dirFile = file;
			} else if (file.name === zipName) {
				zipFile = file;
			}
		});
	};

	const unzip = async () => {
		if (model) {
			const loading = await loadingController.create({
				message: 'Loading...'
			});

			const compHandler = await StableDiffusion.addListener('unzipDidComplete', () => {
				compHandler.remove();
				loading.dismiss();
				loadFile();
			});

			StableDiffusion.unzip({ modelsDirName: 'models', url: model.url });
			loading.present();
		}
	};
	$: if (zipFile) unzip();

	let progress = 0;
	let downloading = false;
	const download = async () => {
		if (model) {
			downloading = true;
			const loading = await loadingController.create({
				message: `Downloading...`
			});
			loading.present();

			const progressHandler = await StableDiffusion.addListener('downloadProgress', (data) => {
				progress = data.progress;
			});

			const compHandler = await StableDiffusion.addListener('downloadDidComplete', () => {
				compHandler.remove();
				progressHandler.remove();
				loading.dismiss();
				downloading = false;
				loadFile();
			});

			StableDiffusion.download({ modelsDirName: 'models', url: model.url });
		}
	};
</script>

<ion-item-divider>
	<ion-label> Model </ion-label>
</ion-item-divider>
<ion-item lines="none">
	<ion-select
		interface="action-sheet"
		placeholder="Select Model"
		on:ionChange={(ion) => {
			model = models.find((model) => model.fileName === ion.detail.value);
			loadFile();
		}}
	>
		{#each models as model}
			<ion-select-option value={model.fileName}>{model.name}</ion-select-option>
		{/each}
	</ion-select>
</ion-item>

{#if model}
	{#if !zipFile && !dirFile}
		{#if downloading}
			<ion-item>
				<ion-progress-bar color="blue" value={progress} />
			</ion-item>
		{:else}
			<ion-item lines="none">
				<ion-button size={'default'} on:click={download} disabled={downloading} color="blue">
					<Icon name="download" />
					<ion-label>Download</ion-label>
				</ion-button>
			</ion-item>
		{/if}
	{:else if zipFile}
		<ion-item>
			<ion-progress-bar color="blue" type="indeterminate" />
		</ion-item>
	{/if}
{/if}
