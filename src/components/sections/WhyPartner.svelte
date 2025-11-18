<script lang="ts">
  export let id: string = "WhyPartner";
</script>

<section {id} class="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-10 right-10 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-10 left-10 w-72 h-72 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
    <!-- Left: Content -->
    <div class="md:w-3/5 order-1">
      <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6">
        Why Partner With ASTRA for ISDC 2026
      </h2>

      <p class="font-montserrat text-gray-300 mb-8">
        Many talented students have ideas but lack access to expert guidance, research scaffolding, and global
        platforms. The ASTRA Space Innovation Program addresses this gap by combining academic rigour with
        personalised mentorship.
      </p>

      <ul class="space-y-3 font-montserrat text-gray-300 text-sm">
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Proven experience mentoring Indian teams to global distinctions at NSS and NASA-linked contests.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Curriculum aligned with NEP, IB ATL skills, and international innovation rubrics.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Personalised mentoring, mock judging, and end-to-end submission support, not just contest logistics.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Pre- and post-assessments that capture growth in scientific thinking, collaboration, and creativity.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Growth charts and narrative feedback that schools can use for portfolios and reporting.</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="text-astraYellow mt-1">✓</span>
          <span>Strong emphasis on reflection, ethics, and responsible innovation in space projects.</span>
        </li>
      </ul>
    </div>

    <!-- Right: Visual Element -->
    <div class="md:w-2/5 order-2 flex items-center justify-center">
      <div class="w-full max-w-xs aspect-square rounded-full bg-gradient-to-br from-astraYellow/10 to-purple-500/10 border border-astraYellow/20 flex items-center justify-center backdrop-blur-sm">
        <div class="text-center p-8">
          <div class="text-5xl font-poppins font-bold text-astraYellow mb-2">30K+</div>
          <div class="text-gray-300 font-montserrat text-sm">Student Journeys</div>
          <div class="text-gray-400 font-montserrat text-xs mt-2">Since 2016</div>
        </div>
      </div>
    </div>
  </div>
</section>