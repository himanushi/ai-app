<script lang="ts">
	import type { ReaddirResult } from '@capacitor/filesystem';
	import type { PageData } from './$types';
	import { Filesystem, Directory } from '@capacitor/filesystem';

	export let data: PageData;

	$: path = data.path;
	const href = (fileName: string) => ['/file', path, fileName].filter((pt) => pt !== '').join('/');
	const prevHref = ['/file', path].filter((pt) => pt !== '').join('/');
	let dir: ReaddirResult;

	$: (async () => {
		console.log('load file');
		dir = await Filesystem.readdir({
			path,
			directory: Directory.Documents
		});
	})();
</script>

{#if dir}
	{#each dir.files as file}
		<ion-item href={href(file.name)}>
			{file.name}
		</ion-item>
	{/each}
{/if}

<ion-item href={prevHref}> .. </ion-item>
<ion-item href={'/'}> ホーム </ion-item>
