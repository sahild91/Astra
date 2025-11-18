<script lang="ts">
  export let id: string = "Program";
  export let isDarkMode = false;

  type Phase = {
    title: string;
    modules: string[];
    description: string;
  };

  const phases: Phase[] = [
    {
      title: "Phase 1: Foundation & Exploration",
      modules: ["Module 1-5"],
      description: "Introduction to space science fundamentals, ISDC requirements, research methodology, and team formation. Students explore core concepts and begin identifying their settlement focus area."
    },
    {
      title: "Phase 2: Research & Development",
      modules: ["Module 6-12"],
      description: "Deep dive into technical domains: orbital mechanics, life support systems, structural engineering, economics, and governance. Teams conduct literature reviews and develop initial design concepts."
    },
    {
      title: "Phase 3: Integration & Refinement",
      modules: ["Module 13-17"],
      description: "Synthesize research into cohesive settlement design. Focus on systems integration, trade-off analysis, risk assessment, and ensuring all technical components work together seamlessly."
    },
    {
      title: "Phase 4: Communication & Submission",
      modules: ["Module 18-20"],
      description: "Professional report writing, visual presentation design, peer review sessions, and final submission preparation. Teams practice defending their proposals and refining their communication."
    }
  ];
</script>

<section {id} class="relative py-24 px-6 md:px-16">
  <div class="max-w-6xl mx-auto relative">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-center {isDarkMode ? 'text-white' : 'text-astraBlack'} mb-6">
      Program Structure
    </h2>

    <p class="text-center {isDarkMode ? 'text-gray-100' : 'text-gray-700'} text-lg font-montserrat mb-12 max-w-3xl mx-auto">
      Our 50-hour, 20-module training journey is structured across four progressive phases, each building essential skills and knowledge for ISDC success.
    </p>

    <div class="grid md:grid-cols-2 gap-8">
      {#each phases as phase, i}
        <div class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-astraYellow transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-astraYellow to-yellow-400 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              {i + 1}
            </div>
            <h3 class="text-2xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'}">
              {phase.title}
            </h3>
          </div>

          <div class="mb-4">
            <span class="inline-block bg-cosmicPurple/20 text-cosmicPurple px-4 py-1 rounded-full text-sm font-semibold">
              {phase.modules[0]}
            </span>
          </div>

          <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat">
            {phase.description}
          </p>
        </div>
      {/each}
    </div>

    <div class="mt-16 {isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur rounded-3xl p-8 md:p-12 border-2 border-astraYellow/30 shadow-xl">
      <h3 class="text-2xl md:text-3xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6 text-center">
        Program Highlights
      </h3>

      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="text-4xl font-bold text-astraYellow mb-2">50</div>
          <div class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat">Total Hours</div>
        </div>

        <div class="text-center">
          <div class="text-4xl font-bold text-cosmicPurple mb-2">20</div>
          <div class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat">Structured Modules</div>
        </div>

        <div class="text-center">
          <div class="text-4xl font-bold text-skyBlue mb-2">4</div>
          <div class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat">Learning Phases</div>
        </div>
      </div>

      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center font-montserrat mt-8 text-lg">
        Aligned with <strong class="text-astraYellow">NEP 2020</strong>, <strong class="text-cosmicPurple">IB ATL Skills</strong>, and contemporary innovation frameworks.
      </p>
    </div>
  </div>
</section>