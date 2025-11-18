<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";

  import ISDC2026 from "./components/sections/ISDC2026.svelte";
  import Program from "./components/sections/Program.svelte";
  import Outcomes from "./components/sections/Outcomes.svelte";
  import Impact from "./components/sections/Impact.svelte";
  import WhyPartner from "./components/sections/WhyPartner.svelte";
  import Parents from "./components/sections/Parents.svelte";
  import Contact from "./components/sections/Contact.svelte";
  import Footer from "./components/sections/Footer.svelte";

  let showScrollToTop = false;

  function handleScroll() {
    // Show button after scrolling past hero section (approximately 100vh)
    showScrollToTop = window.scrollY > window.innerHeight;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<div class="font-montserrat bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen">
  <Navbar />

  <main class="pt-20">
    <Hero />

    <!-- About ASTRA / TDG -->
    <section id="About" class="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute top-10 right-10 w-64 h-64 bg-astraYellow opacity-5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
      
      <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- LEFT: Text -->
        <div class="md:w-1/2 order-2 md:order-1">
          <h2 class="text-4xl md:text-5xl font-poppins font-bold text-astraYellow mb-6">
            About ASTRA EDU LLP and Travel De Gama
          </h2>

          <p class="text-gray-300 leading-relaxed font-montserrat mb-4">
            ASTRA EDU LLP is the education and innovation vertical under Travel
            De Gama that curates research-driven global learning experiences in
            space science and technology. Since 2016 our core team has mentored
            Indian school students for international space contests, helping
            them transform early ideas into award-winning submissions reviewed
            by expert juries.
          </p>

          <p class="text-gray-300 leading-relaxed font-montserrat mb-4">
            The ISDC 2026 Training Program is a 50-hour, 20-module journey
            aligned with NEP 2020, IB ATL skills, and contemporary innovation
            frameworks. The curriculum blends scientific thinking, collaborative
            research, and impactful storytelling, measured through structures
            like Marzano and SOLO taxonomy.
          </p>

          <p class="text-gray-300 leading-relaxed font-montserrat">
            Over 30,000 student journeys have been shaped through these
            initiatives, with teams earning recognition on NASA-linked platforms
            and ISDC, bringing global visibility to their schools.
          </p>
        </div>

        <!-- RIGHT: Spaceman -->
        <div class="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/spaceman-no-bg.png"
            alt="ASTRA Mascot"
            class="w-56 md:w-72 lg:w-80 floating"
          />
        </div>
      </div>

      <style>
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      </style>
    </section>

    <ISDC2026 />
    <Program />
    <Outcomes />
    <Impact />
    <WhyPartner />
    <Parents />
    <Contact />
  </main>

  <Footer />

  <!-- Back to Top Button -->
  {#if showScrollToTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-8 right-8 bg-astraYellow text-astraBlack p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 z-40 hover:scale-110"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  {/if}
</div>