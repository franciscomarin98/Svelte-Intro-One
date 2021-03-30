<script>
	import About from "./components/About.svelte";
	import Text from "./components/Text.svelte";
	import Skills from "./components/Skills.svelte";
	import Person from "./components/Person.svelte";
	import Input from "./components/Input.svelte";
	import Photos from "./components/Photos.svelte";
	import ButtonCount from "./components/ButtonCount.svelte";
	export let name;
	export let lastName;
	let svelteLogo = "https://arepa.s3.amazonaws.com/svelte-logo.png";
	const data = {
		name: "Francisco",
		lastName: "Calderón",
		age: 21,
	};
</script>

<main>
	<h1>Hello {name} {lastName}!</h1>
	<Input />
	<About />
	<Skills />
	<ButtonCount />
	<Text anotherText={"Prop recibido"} />
	<Text />
	<Person name={data.name} lastName={data.lastName} age={data.age} />
	<img src={svelteLogo} alt="Svelte Logo" />
	<Person {...data} />
	<Photos />
</main>

<style>
	/* Definir estilos globales */
	:global(body) {
		background-color: #f2eee2;
		color: #0084f6;
	}

	/* Definir variables */
	:global(:root) {
		--theme-color: purple;
	}

	:global(body.dark-mode) {
		background-color: #1d3040;
		color: #bfc2c7;
	}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	main img {
		width: 30%;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
