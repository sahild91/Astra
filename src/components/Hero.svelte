<script lang="ts">
    export let id: string = "Home";
    export let isDarkMode = false;

    function downloadBrochure() {
        const link = document.createElement("a");
        link.href = "/ASTRA ISDC Brochure.pdf";
        link.download = "ASTRA_ISDC_Brochure.pdf";
        link.click();
    }

    function scrollToContact() {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<section {id} class="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
  <div class="w-full px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-56 flex flex-col items-center text-center">
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-poppins font-bold text-astraYellow mb-6 leading-tight">
      ASTRA Space Innovation Program for ISDC 2026
    </h1>

    <p class="{isDarkMode ? 'text-white' : 'text-gray-700'} text-lg md:text-xl mb-8 leading-relaxed font-montserrat font-medium">
      Join ASTRA EDU LLP's comprehensive 50-hour training program designed to guide students toward success at ISDC 2026, the world's premier space settlement design competition.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <button
        on:click={scrollToContact}
        class="bg-astraYellow text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Invite ASTRA to Your School
      </button>

      <button
        on:click={downloadBrochure}
        class="{isDarkMode ? 'bg-gray-700 text-astraYellow border-2 border-astraYellow hover:bg-astraYellow hover:text-white' : 'bg-white text-astraYellow border-2 border-astraYellow hover:bg-astraYellow hover:text-white'} px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
      >
        Download Brochure
      </button>
    </div>
  </div>

  <!-- Floating decorative elements -->
  <div class="absolute top-20 left-10 w-12 h-12 border-4 border-astraYellow rounded-full opacity-30 animate-float-slow"></div>
  <div class="absolute top-40 right-20 w-16 h-16 border-4 border-cosmicPurple rounded-full opacity-30 animate-float-slower"></div>
  <div class="absolute bottom-32 left-1/4 w-10 h-10 border-4 border-skyBlue rounded-full opacity-30 animate-float-slow"></div>
  <div class="absolute bottom-20 right-1/3 w-14 h-14 border-4 border-starPink rounded-full opacity-30 animate-float-slower"></div>
</section>

<style>
  :global(.animate-float-slow) {
    animation: float 6s ease-in-out infinite;
  }

  :global(.animate-float-slower) {
    animation: float 8s ease-in-out infinite;
  }
</style>