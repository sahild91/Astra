<script lang="ts">
  export let id: string = "Impact";
</script>

<section
  id={id}
  class="relative py-24 px-6 md:px-16 text-white overflow-hidden"
>
  <!-- Pulsing Glow Halo Background -->
  <div
    class="absolute inset-0 flex justify-center items-center pointer-events-none"
    aria-hidden="true"
  >
    <div class="halo"></div>
  </div>

  <!-- Impact Content -->
  <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <!-- Left: Main Content -->
    <div class="md:w-3/5 order-1">
      <h2 class="text-4xl md:text-5xl font-poppins font-bold text-astraYellow mb-6">
        Impact
      </h2>

      <p class="font-montserrat text-gray-300 leading-relaxed mb-4">
        Over 30,000 students have participated in our space innovation journeys since 2016,
        with many earning recognition on NASA-linked platforms, the National Space Society,
        and international STEM forums. Schools partnering with ASTRA consistently showcase
        higher engagement, improved research quality, and global visibility.
      </p>

      <p class="font-montserrat text-gray-300 leading-relaxed">
        Our structured mentorship and design-thinking driven curriculum empower students to
        build credible, competition-ready projects that reflect deep scientific understanding
        and creativity.
      </p>
    </div>

    <!-- Right: Stats Visual -->
    <div class="w-full md:w-2/5 order-2 flex items-center justify-center">
      <div class="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-md">
        <div class="bg-astraYellow/15 border border-astraYellow/40 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm hover:bg-astraYellow/20 transition-colors">
          <div class="text-2xl md:text-3xl font-poppins font-bold text-white mb-1">30K+</div>
          <div class="text-gray-200 font-montserrat text-xs">Students Mentored</div>
        </div>
        <div class="bg-astraYellow/15 border border-astraYellow/40 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm hover:bg-astraYellow/20 transition-colors">
          <div class="text-2xl md:text-3xl font-poppins font-bold text-white mb-1">9+</div>
          <div class="text-gray-200 font-montserrat text-xs">Years Experience</div>
        </div>
        <div class="bg-astraYellow/15 border border-astraYellow/40 rounded-lg p-4 md:p-6 text-center backdrop-blur-sm col-span-2 hover:bg-astraYellow/20 transition-colors">
          <div class="text-2xl md:text-3xl font-poppins font-bold text-white mb-1">Global</div>
          <div class="text-gray-200 font-montserrat text-xs">Recognition & Visibility</div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Pulsing Halo Glow */
  .halo {
    width: 600px;
    height: 600px;
    border-radius: 9999px;
    background: rgb(255, 204, 0);
    opacity: 0.05;
    filter: blur(180px);
    animation: pulseGlow 6s ease-in-out infinite;
  }

  @keyframes pulseGlow {
    0% {
      transform: scale(1);
      opacity: 0.05;
    }
    50% {
      transform: scale(1.25);
      opacity: 0.08;
    }
    100% {
      transform: scale(1);
      opacity: 0.05;
    }
  }
</style>