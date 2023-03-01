<script lang="ts">
	export let prompt: string | null | undefined;

	const words: { weight: number; word: string }[] = [];
</script>

<ion-item-divider>
	<ion-label> Prompt </ion-label>
</ion-item-divider>
<ion-item>
	<ion-textarea
		auto-grow={true}
		value={prompt}
		on:ionChange={(ion) => (prompt = ion.detail.value)}
	/>
</ion-item>
