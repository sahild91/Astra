<script lang="ts">
  export let id: string = "Impact";
</script>

<section
  id={id}
  class="relative py-24 px-6 md:px-16 bg-black text-white overflow-hidden"
>
  <!-- Pulsing Glow Halo Background -->
  <div
    class="absolute inset-0 flex justify-center items-center pointer-events-none"
    aria-hidden="true"
  >
    <div class="halo"></div>
  </div>

  <!-- Impact Content -->
  <div class="relative z-10 max-w-4xl">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-astraYellow mb-6">
      Impact
    </h2>

    <p class="font-montserrat text-white font-semibold leading-relaxed mb-4">
      Over 30,000 students have participated in our space innovation journeys since 2016,
      with many earning recognition on NASA-linked platforms, the National Space Society,
      and international STEM forums. Schools partnering with ASTRA consistently showcase
      higher engagement, improved research quality, and global visibility.
    </p>

    <p class="font-montserrat text-white font-semibold leading-relaxed">
      Our structured mentorship and design-thinking driven curriculum empower students to
      build credible, competition-ready projects that reflect deep scientific understanding
      and creativity.
    </p>
  </div>

</section>

<style>
  /* Pulsing Halo Glow */
  .halo {
    width: 600px;
    height: 600px;
    border-radius: 9999px;
    background: rgb(255, 204, 0); /* astraYellow */
    opacity: 0.12;
    filter: blur(180px);
    animation: pulseGlow 6s ease-in-out infinite;
  }

  @keyframes pulseGlow {
    0% {
      transform: scale(1);
      opacity: 0.12;
    }
    50% {
      transform: scale(1.25);
      opacity: 0.18;
    }
    100% {
      transform: scale(1);
      opacity: 0.12;
    }
  }
</style>