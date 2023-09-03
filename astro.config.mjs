import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'rex docs',
			social: {
				github: 'https://github.com/fromafrica/rex',
				twitter: 'https://twitter.com/createrexapp',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'What\'s rex?', link: '/guides/explainer/' },
						{ label: 'Installation', link: '/guides/install/' },
						{ label: 'Structure', link: '/guides/structure/' },
					],
				},
				{
					label: 'CLI Reference',
					autogenerate: { directory: 'cli' },
				},
				{
					label: 'Runtime Reference',
					autogenerate: { directory: 'runtime' },
				},
				{
					label: 'Project',
					autogenerate: { directory: 'project' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
