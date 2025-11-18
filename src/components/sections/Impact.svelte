<script lang="ts">
  export let id: string = "Impact";
  export let isDarkMode = false;
</script>

<section {id} class="relative py-24 px-6 md:px-16 overflow-hidden">
  <div class="relative max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-center text-astraYellow mb-8">
      Program Impact
    </h2>

    <p class="text-center {isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-montserrat mb-16 max-w-3xl mx-auto">
      Participation in the ISDC 2026 Training Program creates measurable outcomes at both the student and institutional level.
    </p>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Student Level Impact -->
      <div class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-2xl shadow-2xl p-8 border-2 border-skyBlue/50 hover:border-skyBlue transition-all duration-300">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-skyBlue to-blue-400 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 class="text-2xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'}">
            Student Level
          </h3>
        </div>

        <ul class="space-y-4 font-montserrat {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">
          <li class="flex items-start gap-3">
            <span class="text-skyBlue text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Academic Confidence:</strong> Students develop deeper understanding of STEM concepts and gain confidence in technical communication.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-skyBlue text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Portfolio Building:</strong> Participation in an internationally recognized competition adds significant value to college applications and scholarship opportunities.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-skyBlue text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Skill Development:</strong> Acquisition of research, presentation, and collaborative problem-solving abilities applicable across disciplines.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-skyBlue text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Global Exposure:</strong> Connection to a worldwide community of space enthusiasts and potential networking with industry professionals.</span>
          </li>
        </ul>
      </div>

      <!-- School Level Impact -->
      <div class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-2xl shadow-2xl p-8 border-2 border-cosmicPurple/50 hover:border-cosmicPurple transition-all duration-300">
        <div class="flex items-center gap-4 mb-6">
          <div class="w-16 h-16 rounded-full bg-gradient-to-br from-cosmicPurple to-purple-600 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-2xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'}">
            School Level
          </h3>
        </div>

        <ul class="space-y-4 font-montserrat {isDarkMode ? 'text-gray-300' : 'text-gray-700'}">
          <li class="flex items-start gap-3">
            <span class="text-cosmicPurple text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Enhanced Reputation:</strong> Association with prestigious international programs strengthens the institution's academic profile.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cosmicPurple text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Differentiation:</strong> Offers unique experiential learning that sets the school apart from peers in admissions materials.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cosmicPurple text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">NEP 2020 Alignment:</strong> Demonstrates commitment to competency-based, interdisciplinary education valued by accreditation bodies.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-cosmicPurple text-xl mt-1">✦</span>
            <span><strong class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'}">Parent Engagement:</strong> Visible participation in global contests builds trust and satisfaction among parent community.</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-16 {isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-3xl p-8 md:p-12 border-2 border-astraYellow/50 text-center shadow-xl">
      <p class="{isDarkMode ? 'text-gray-100' : 'text-gray-900'} font-semibold text-xl font-montserrat mb-4">
        Over 30,000 Student Journeys Shaped
      </p>
      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat text-lg">
        Teams have earned recognition on NASA-linked platforms and ISDC, bringing global visibility to their schools and creating lasting impact on their academic trajectories.
      </p>
    </div>
  </div>
</section>