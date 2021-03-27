import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Francisco',
		lastName: 'Marin'
	}
});

export default app;