<script>
	import "../app.pcss";

    import Hero from '../components/Hero.svelte';
    import Footer from "../components/Footer.svelte";
</script>

<div class="app max-w-7xl mx-auto bg-[#0F1117]">
	<Hero></Hero>

	<main>
		<slot></slot>
	</main>

	<Footer></Footer>
</div>
