import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const postRenderers = [baseHrefRewrite];
setPluginConfig(baseHrefRewrite, { href: 'https://portfolio.maxaltena.com/S7/' });

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'Portfolio-S7',
	outDir: './dist/static',
	defaultPostRenderers: postRenderers,
	handle404: 'index',
	routes: {
		'/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content',
			},
		},
		'/human-centered-design/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content/human-centered-design',
			},
		},
		'/critical-design/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content/critical-design',
			},
		},
		'/story-creation/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content/story-creation',
			},
		},
		'/media-theory/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content/media-theory',
			},
		},
		'/other/:slug': {
			type: 'contentFolder',
			slug: {
				folder: './content/other',
			},
		},
	},
};
