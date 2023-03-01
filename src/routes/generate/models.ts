export type Model = {
	fileName: string;
	license: string;
	name: string;
	url: string;
};

export const models: Model[] = [
	{
		fileName: 'stable-diffusion-v1-5_split-einsum_compiled',
		license: 'creativeml-openrail-m',
		name: 'Stable Diffusion v1.5',
		url: 'https://huggingface.co/coreml/coreml-stable-diffusion-v1-5/resolve/main/split_einsum/stable-diffusion-v1-5_no-i2i_split-einsum.zip'
	},
	{
		fileName: 'stable-diffusion-v2.1-base_split-einsum_compiled',
		license: 'creativeml-openrail-m',
		name: 'Stable Diffusion v2.1 Base',
		url: 'https://huggingface.co/coreml/coreml-stable-diffusion-2-1-base/resolve/main/split_einsum/stable-diffusion-v2.1-base_no-i2i_split-einsum.zip'
	},
	{
		fileName: 'wd-1-4-anime_e1_split-einsum_compiled',
		license: 'creativeml-openrail-m',
		name: 'Waifu Diffusion v1.4',
		url: 'https://huggingface.co/coreml/coreml-waifu-diffusion-v1-4/resolve/main/split_einsum/wd-1-4-anime_e1_no-i2i_split-einsum.zip'
	}
];
