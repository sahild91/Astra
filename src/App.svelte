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
  let isDarkMode = false;

  function handleScroll() {
    showScrollToTop = window.scrollY > window.innerHeight;
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }

  // Star generation based on screen size
  type Star = {
    top: string;
    left: string;
    size: string;
    color: string;
    opacity: number;
  };

  let stars: Star[] = [];

  const starColors = [
    'bg-astraYellow',
    'bg-cosmicPurple',
    'bg-skyBlue',
    'bg-starPink',
    'bg-spaceGreen',
    'bg-spaceOrange'
  ];

  function generateStars() {
    const width = window.innerWidth;
    
    // Calculate number of stars based on screen size
    let starCount = 100; // default for mobile
    if (width >= 1536) {
      starCount = 300; // 2xl screens
    } else if (width >= 1280) {
      starCount = 250; // xl screens
    } else if (width >= 1024) {
      starCount = 200; // lg screens
    } else if (width >= 768) {
      starCount = 150; // md screens
    }

    stars = [];
    for (let i = 0; i < starCount; i++) {
      const star: Star = {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: ['w-1 h-1', 'w-1.5 h-1.5', 'w-2 h-2'][Math.floor(Math.random() * 3)],
        color: starColors[Math.floor(Math.random() * starColors.length)],
        opacity: 0.5 + Math.random() * 0.2 // opacity between 0.5 and 0.7
      };
      stars.push(star);
    }
  }

  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    // Load theme preference
    const savedTheme = localStorage.getItem('theme');
    isDarkMode = savedTheme === 'dark';

    window.addEventListener('scroll', handleScroll);
    generateStars();
    window.addEventListener('resize', generateStars);
  });

  onDestroy(() => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', generateStars);
  });
</script>

<div class="font-montserrat min-h-screen relative overflow-x-hidden transition-colors duration-300 {isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-offWhite text-gray-800'}">
  <!-- Fixed background layer with stars and color splotches -->
    <!-- Dynamically generated stars -->
    {#each stars as star}
      <div 
        class="absolute {star.size} {star.color} rounded-full"
        style="top: {star.top}; left: {star.left}; opacity: {star.opacity};"
      ></div>
    {/each}

    <!-- Reduced size color splotches (80% of original) - more sporadic placement -->
    <!-- Purple splotches -->
    <div class="absolute top-[8%] left-[5%] w-[640px] h-[640px] rounded-full blur-3xl opacity-35" 
         style="background: #5b24e5;"></div>
    <div class="absolute top-[68%] right-[8%] w-[560px] h-[560px] rounded-full blur-3xl opacity-30" 
         style="background: #5b24e5;"></div>
    
    <!-- Blue splotches -->
    <div class="absolute top-[18%] right-[3%] w-[720px] h-[720px] rounded-full blur-3xl opacity-23" 
         style="background: #4fb4e3;"></div>
    <div class="absolute top-[82%] left-[15%] w-[640px] h-[640px] rounded-full blur-3xl opacity-30" 
         style="background: #4fb4e3;"></div>
    
    <!-- Red splotches -->
    <div class="absolute top-[33%] left-[8%] w-[600px] h-[600px] rounded-full blur-3xl opacity-35" 
         style="background: #f72d3e;"></div>
    <div class="absolute top-[75%] right-[18%] w-[520px] h-[520px] rounded-full blur-3xl opacity-30" 
         style="background: #f72d3e;"></div>
    
    <!-- Green splotches -->
    <div class="absolute top-[42%] right-[12%] w-[680px] h-[680px] rounded-full blur-3xl opacity-25" 
         style="background: #55e794;"></div>
    <div class="absolute top-[88%] left-[25%] w-[560px] h-[560px] rounded-full blur-3xl opacity-30" 
         style="background: #55e794;"></div>
    
    <!-- Orange splotches -->
    <div class="absolute top-[55%] left-[35%] w-[560px] h-[560px] rounded-full blur-3xl opacity-25" 
         style="background: #f7812e;"></div>
    <div class="absolute top-[22%] right-[28%] w-[520px] h-[520px] rounded-full blur-3xl opacity-28" 
         style="background: #f7812e;"></div>
    
    <!-- Additional sporadic overlapping splotches -->
    <div class="absolute top-[48%] right-[35%] w-[480px] h-[480px] rounded-full blur-3xl opacity-25" 
         style="background: #5b24e5;"></div>
    <div class="absolute top-[63%] left-[48%] w-[520px] h-[520px] rounded-full blur-3xl opacity-28" 
         style="background: #4fb4e3;"></div>

  <Navbar {isDarkMode} />

  <main class="pt-20 relative">
    <Hero {isDarkMode} />

    <!-- About ASTRA / TDG -->
    <section id="About" class="relative py-24 px-6 md:px-16 overflow-hidden">
      <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="md:w-2/3 order-2 md:order-1">
          <div class="{isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-astraYellow/30">
            <h2 class="text-4xl md:text-5xl font-poppins font-bold text-astraYellow mb-6 ">
              About ASTRA EDU LLP and Travel De Gama
            </h2>

            <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat mb-4">
              ASTRA EDU LLP is the education and innovation vertical under Travel
              De Gama that curates research-driven global learning experiences in
              space science and technology. Since 2016 our core team has mentored
              Indian school students for international space contests, helping
              them transform early ideas into award-winning submissions reviewed
              by expert juries.
            </p>

            <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat mb-4">
              The ISDC 2026 Training Program is a 50-hour, 20-module journey
              aligned with NEP 2020, IB ATL skills, and contemporary innovation
              frameworks. The curriculum blends scientific thinking, collaborative
              research, and impactful storytelling, measured through structures
              like Marzano and SOLO taxonomy.
            </p>

            <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat">
              Over 30,000 student journeys have been shaped through these
              initiatives, with teams earning recognition on NASA-linked platforms
              and ISDC, bringing global visibility to their schools.
            </p>
          </div>
        </div>

        <div class="md:w-1/3 flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/spaceman-no-bg.png"
            alt="ASTRA Mascot"
            class="w-56 md:w-72 lg:w-80 floating drop-shadow-2xl"
          />
        </div>
      </div>
    </section>

    <ISDC2026 {isDarkMode} />
    <Program {isDarkMode} />
    <Outcomes {isDarkMode} />
    <Assessment {isDarkMode} />
    <Impact {isDarkMode} />
    <WhyPartner {isDarkMode} />
    <Parents {isDarkMode} />
    <Contact {isDarkMode} />
  </main>

  <Footer {isDarkMode} />
  <!-- Theme Toggle Button -->
  <button
    on:click={toggleTheme}
    class="fixed bottom-8 left-8 {isDarkMode ? 'bg-gray-700' : 'bg-white'} p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110 border-2 {isDarkMode ? 'border-astraYellow' : 'border-gray-300'}"
    aria-label="Toggle theme"
  >
    {#if isDarkMode}
      <!-- Sun icon for light mode -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-astraYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    {:else}
      <!-- Moon icon for dark mode -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    {/if}
  </button>

  {#if showScrollToTop}
    <button
      on:click={scrollToTop}
      class="fixed bottom-8 right-8 bg-astraYellow text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all duration-300 z-40 hover:scale-110"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  {/if}
</div>

<style>
  .floating {
    animation: float 4s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
</style>