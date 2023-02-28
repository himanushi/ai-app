<script lang="ts">
	import type { ReaddirResult } from '@capacitor/filesystem';
	import type { PageData } from './$types';
	import { Filesystem, Directory } from '@capacitor/filesystem';
	import Icon from '~/components/icon.svelte';
	import { Capacitor } from '@capacitor/core';

	export let data: PageData;

	$: path = data.path;
	$: prevHref = ['/file', ...path.split('/')]
		.filter((pt) => pt !== '')
		.slice(0, -1)
		.join('/');
	const href = (fileName: string) => ['/file', path, fileName].filter((pt) => pt !== '').join('/');
	let dir: ReaddirResult;

	$: (async () => {
		dir = await Filesystem.readdir({
			path,
			directory: Directory.Documents
		});
	})();
</script>

<ion-item-group>
	{#if dir}
		{#each dir.files as file}
			{@const isImage = file.name.endsWith('.png')}
			{@const isDirectory = file.type === 'directory'}
			<ion-item href={isDirectory ? href(file.name) : undefined}>
				{#if isImage}
					<ion-thumbnail>
						<ion-img src={Capacitor.convertFileSrc(file.uri)} />
					</ion-thumbnail>
				{:else if isDirectory}
					<Icon fill name="folder" color="yellow" />
				{:else}
					<Icon fill name="description" color="blue" />
				{/if}
				<ion-label>
					{file.name}
				</ion-label>
			</ion-item>
		{/each}
	{/if}
	<ion-item href={prevHref} detail={false}>
		<Icon fill name="chevron_left" color="gray" />
		1つ戻る
	</ion-item>
</ion-item-group>
