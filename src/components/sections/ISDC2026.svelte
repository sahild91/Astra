<script lang="ts">
  export let id: string = "ISDC2026";
  export let isDarkMode = false;
</script>

<section {id} class="relative py-24 px-6 md:px-16 overflow-hidden">
  <!-- Colorful background orbs -->
  <div class="relative max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-center text-astraYellow mb-8">
      About ISDC 2026
    </h2>

    <div class="{isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-astraYellow/30">
      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat text-lg mb-6">
        The <strong class="text-astraYellow">International Space Development Conference (ISDC)</strong> hosts the prestigious Gerard K. O'Neill Space Settlement Contest, organized by the National Space Society (NSS). This competition challenges students worldwide to design a comprehensive space settlement proposal that addresses engineering, life support, economics, and social structures.
      </p>

      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat text-lg mb-6">
        Teams must develop a 10,000 to 15,000 word technical report supported by visual aids, demonstrating innovation, feasibility, and scientific rigor. Submissions are reviewed by industry experts, NASA affiliates, and space science professionals.
      </p>

      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat text-lg mb-6">
        <strong class="text-cosmicPurple">ASTRA's ISDC 2026 Training Program</strong> prepares students across 50 hours and 20 structured modules. The curriculum combines scientific research, collaborative project work, and professional presentation skills, aligned with NEP 2020 and international innovation frameworks.
      </p>

      <div class="{isDarkMode ? 'bg-gradient-to-r from-astraYellow/20 via-cosmicPurple/20 to-skyBlue/20' : 'bg-gradient-to-r from-astraYellow/10 via-cosmicPurple/10 to-skyBlue/10'} rounded-2xl p-6 mt-8 border-l-4 border-astraYellow">
        <p class="{isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-semibold text-lg font-montserrat">
          This is not just a competition entry process. It is a transformational learning journey that builds critical 21st century skills: research, systems thinking, collaboration, and impactful communication.
        </p>
      </div>
    </div>
  </div>
</section>