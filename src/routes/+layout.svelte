<script lang="ts">
	import '~/theme/variables.css';
	import '~/theme/custom.css';
	import { initialize } from '@ionic/core';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Icon from '~/components/icon.svelte';
	import { Filesystem, Directory } from '@capacitor/filesystem';

	onMount(async () => {
		initialize({
			animated: true,
			mode: 'ios'
		});

		Filesystem.readdir({
			directory: Directory.Documents,
			path: ''
		}).then((dir) => {
			if (!dir.files.find((file) => file.name === 'models')) {
				Filesystem.mkdir({
					directory: Directory.Documents,
					path: 'models'
				});
			}
			if (!dir.files.find((file) => file.name === 'images')) {
				Filesystem.mkdir({
					directory: Directory.Documents,
					path: 'images'
				});
			}
		});
	});
</script>

<ion-app>
	<ion-header><ion-toolbar /></ion-header>
	<ion-content>
		<ion-tabs>
			<ion-tab tab="generate"><ion-content><slot /></ion-content></ion-tab>
			<ion-tab tab="images"><ion-content><slot /></ion-content></ion-tab>
			<ion-tab tab="file"><ion-content><slot /></ion-content></ion-tab>
			<ion-tab-bar slot="bottom">
				<ion-tab-button tab="generate" on:click={() => goto('/generate')}>
					<Icon name="brush" size="l" fill />
				</ion-tab-button>
				<ion-tab-button tab="images" on:click={() => goto('/images')}>
					<Icon name="photo_library" size="l" fill />
				</ion-tab-button>
				<ion-tab-button tab="file" on:click={() => goto('/file')}>
					<Icon name="folder" size="l" fill />
				</ion-tab-button>
			</ion-tab-bar>
		</ion-tabs>
	</ion-content>
	<ion-footer><ion-toolbar /></ion-footer>
</ion-app>
