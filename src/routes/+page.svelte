<script lang="ts">
	import { CapCoreML } from 'capacitor-plugin-coreml';
	import { Filesystem, Directory, Encoding, type ReaddirResult } from '@capacitor/filesystem';

	let dir: ReaddirResult;

	$: console.log(dir);
</script>

<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={() => CapCoreML.download({ value: 'test' })}>download</button>
<button on:click={() => CapCoreML.echo({ value: 'test' })}>download</button>
<button on:click={() => CapCoreML.load({ value: 'test' })}>Load</button>
<button
	on:click={() =>
		Filesystem.writeFile({
			path: 'text.txt',
			data: 'This is a test',
			directory: Directory.Documents,
			encoding: Encoding.UTF8
		})}>Image Download</button
>

<button
	on:click={async () =>
		(dir = await Filesystem.readdir({
			path: '/',
			directory: Directory.Documents
		}))}>Get Files</button
>
{dir}

<button
	on:click={async () =>
		await Filesystem.mkdir({
			path: 'models',
			directory: Directory.Documents
		})}>Create Models Dir</button
>
