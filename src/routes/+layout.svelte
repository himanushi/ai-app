<script lang="ts">
	import '~/theme/variables.css';
	import '~/theme/custom.css';
	import { initialize } from '@ionic/core';
	import { onMount } from 'svelte';
	onMount(() => {
		initialize({
			animated: true,
			mode: 'ios'
		});
	});
</script>

<ion-app>
	<ion-header>
		<ion-toolbar>
			<ion-title> AI画像生成 </ion-title>
		</ion-toolbar>
	</ion-header>
	<ion-content force-overscroll={false}>
		<slot />
	</ion-content>
</ion-app>
