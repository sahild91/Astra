<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";

  import ISDC2026 from "./components/sections/ISDC2026.svelte";
  import Program from "./components/sections/Program.svelte";
  import Outcomes from "./components/sections/Outcomes.svelte";
  import Assessment from "./components/sections/Assessment.svelte";
  import Impact from "./components/sections/Impact.svelte";
  import WhyPartner from "./components/sections/WhyPartner.svelte";
  import Parents from "./components/sections/Parents.svelte";
  import Contact from "./components/sections/Contact.svelte";
  import Footer from "./components/sections/Footer.svelte";

  let showScrollToTop = false;

  function handleScroll() {
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

<div class="font-montserrat text-white min-h-screen relative">
  <!-- Global flowing background -->
  <div class="fixed inset-0 bg-black -z-10">
    <!-- Flowing gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"></div>
    
    <!-- Animated glowing orbs -->
    <div class="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-astraYellow opacity-[0.08] rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-purple-500 opacity-[0.08] rounded-full blur-3xl animate-float-slower"></div>
    <div class="absolute top-[50%] right-[15%] w-[400px] h-[400px] bg-blue-500 opacity-[0.08] rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute top-[70%] left-[10%] w-[350px] h-[350px] bg-cyan-500 opacity-[0.08] rounded-full blur-3xl animate-float-slower"></div>
    <div class="absolute top-[85%] right-[20%] w-[450px] h-[450px] bg-green-500 opacity-[0.08] rounded-full blur-3xl animate-float-slow"></div>
    
    <!-- Scattered stars throughout -->
    <div class="absolute top-[5%] left-[15%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[8%] right-[25%] w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    <div class="absolute top-[12%] left-[45%] w-1 h-1 bg-astraYellow rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[18%] right-[35%] w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    
    <div class="absolute top-[25%] left-[25%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[28%] right-[45%] w-1 h-1 bg-cyan-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    <div class="absolute top-[35%] left-[60%] w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[38%] right-[15%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle-delayed"></div>
    
    <div class="absolute top-[45%] left-[35%] w-1 h-1 bg-astraYellow rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[48%] right-[55%] w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    <div class="absolute top-[52%] left-[70%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[58%] right-[25%] w-1 h-1 bg-cyan-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    
    <div class="absolute top-[65%] left-[20%] w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[68%] right-[40%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle-delayed"></div>
    <div class="absolute top-[72%] left-[55%] w-1 h-1 bg-astraYellow rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[78%] right-[60%] w-1 h-1 bg-purple-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    
    <div class="absolute top-[82%] left-[40%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[88%] right-[30%] w-1 h-1 bg-cyan-300 rounded-full opacity-60 animate-twinkle-delayed"></div>
    <div class="absolute top-[92%] left-[65%] w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-twinkle"></div>
    <div class="absolute top-[95%] right-[50%] w-1 h-1 bg-white rounded-full opacity-60 animate-twinkle-delayed"></div>
  </div>

  <Navbar />

  <main class="pt-20 relative">
    <Hero />

    <!-- About ASTRA / TDG -->
    <section id="About" class="relative py-24 px-6 md:px-16 text-white overflow-hidden">
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
    <Assessment />
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

<style>
  @keyframes float-slow {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(20px, 20px);
    }
  }

  @keyframes float-slower {
    0%, 100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(-20px, 20px);
    }
  }

  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }

  @keyframes twinkle-delayed {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.9;
      transform: scale(1.3);
    }
  }

  .animate-float-slow {
    animation: float-slow 20s ease-in-out infinite;
  }

  .animate-float-slower {
    animation: float-slower 25s ease-in-out infinite;
  }

  .animate-twinkle {
    animation: twinkle 3s ease-in-out infinite;
  }

  .animate-twinkle-delayed {
    animation: twinkle-delayed 4s ease-in-out infinite;
  }
</style>