<script lang="ts">
	import { StableDiffusion } from 'capacitor-plugin-stable-diffusion';
	import { Filesystem, Directory } from '@capacitor/filesystem';
	import { onDestroy, onMount } from 'svelte';
	import type { PluginListenerHandle } from '@capacitor/core';

	let dProgress = 0;
	let dStatus = '';
	let dError: string | undefined = '';
	let zStatus = '';
	let gProgress = 0;
	let gStatus = '';
	let gError: string | undefined = '';

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
			})
		];
	});

	onDestroy(() => {
		handlers.map((handler) => handler.remove());
	});
</script>

<ion-list>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-list-header>
		<ion-label>Video Games</ion-label>
	</ion-list-header>
	<ion-item>
		<ion-label>Pokémon Yellow</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Mega Man X</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>The Legend of Zelda</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Pac-Man</ion-label>
	</ion-item>
	<ion-item>
		<ion-label>Super Mario World</ion-label>
	</ion-item>
</ion-list>
