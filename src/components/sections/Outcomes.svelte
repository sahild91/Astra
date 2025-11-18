<script lang="ts">
  export let id: string = "Outcomes";
  export let isDarkMode = false;

  type Competency = {
    name: string;
    description: string;
    details: string[];
  };

  const competencies: Competency[] = [
    {
      name: "Space Concept Mastery",
      description: "Understanding of fundamental and advanced space science principles, orbital mechanics, life support systems, and habitat design.",
      details: [
        "Analyze space settlement requirements and constraints",
        "Apply physics and engineering principles to habitat design",
        "Synthesize scientific knowledge into innovative solutions",
        "Evaluate trade-offs in settlement architecture and systems"
      ]
    },
    {
      name: "Research Skills",
      description: "Ability to conduct structured literature reviews, gather evidence, analyze data, and build credible scientific arguments.",
      details: [
        "Navigate academic and technical literature effectively",
        "Synthesize information from multiple credible sources",
        "Document research process and maintain citations",
        "Apply scientific method to project development"
      ]
    },
    {
      name: "Collaboration",
      description: "Teamwork skills including communication, task delegation, conflict resolution, and collective decision making.",
      details: [
        "Work effectively in diverse project teams",
        "Manage shared timelines and responsibilities",
        "Contribute constructively to group discussions",
        "Provide and receive feedback with professionalism"
      ]
    },
    {
      name: "Creativity & Communication",
      description: "Ability to present complex ideas clearly through multiple formats including written reports, visual presentations, and oral delivery.",
      details: [
        "Design clear and compelling visual presentations",
        "Write technical reports with proper structure",
        "Deliver confident oral presentations to judges",
        "Adapt communication style to different audiences"
      ]
    },
    {
      name: "Scientific Temperament",
      description: "Development of curiosity, critical thinking, ethical reasoning, and resilience in facing complex challenges.",
      details: [
        "Approach problems with curiosity and open-mindedness",
        "Think critically about assumptions and evidence",
        "Demonstrate persistence through project challenges",
        "Consider ethical implications of design decisions"
      ]
    }
  ];

  let selectedIndex = 0;
  let isPaused = false;
  let intervalId: ReturnType<typeof setInterval>;

  $: selectedCompetency = competencies[selectedIndex];

  function startRotation() {
    intervalId = setInterval(() => {
      if (!isPaused) {
        selectedIndex = (selectedIndex + 1) % competencies.length;
      }
    }, 4000);
  }

  function handleHover(index: number) {
    isPaused = true;
    selectedIndex = index;
  }

  function handleLeave() {
    isPaused = false;
  }

  import { onMount, onDestroy } from 'svelte';

  onMount(() => {
    startRotation();
  });

  onDestroy(() => {
    if (intervalId) clearInterval(intervalId);
  });
</script>

<section {id} class="relative py-16 md:py-24 px-6 md:px-16 overflow-hidden">
  <div class="relative max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6 text-center md:text-left">
      Learning Outcomes
    </h2>

    <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat mb-8 md:mb-12 text-center md:text-left max-w-3xl">
      The curriculum is designed to strengthen both disciplinary understanding and 21st-century competencies.
      Growth is mapped using research-based frameworks such as Marzano and SOLO taxonomy.
    </p>

    <div class="flex flex-col md:flex-row items-start gap-8 md:gap-12">
      <!-- Mobile: Details first, Desktop: Competencies first -->
      <div class="w-full md:w-2/5 order-1">
        <h3 class="font-poppins font-semibold text-xl text-astraYellow mb-4">
          Competencies Tracked
        </h3>
        <p class="font-montserrat {isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-6">
          Hover on each competency to learn more
        </p>
        <div class="grid gap-4 text-sm font-montserrat">
          {#each competencies as competency, index}
            <div
              role="button"
              tabindex="0"
              on:mouseenter={() => handleHover(index)}
              on:mouseleave={handleLeave}
              on:focus={() => handleHover(index)}
              on:blur={handleLeave}
              on:keydown={(e) => e.key === 'Enter' && handleHover(index)}
              class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur border rounded-lg p-4 transition-all duration-500 cursor-pointer shadow-md
                {selectedIndex === index ? 'border-astraYellow bg-astraYellow/10 scale-105 shadow-lg' : `${isDarkMode ? 'border-gray-700' : 'border-gray-300'} hover:border-astraYellow/50 hover:shadow-lg`}"
            >
              <span class={selectedIndex === index ? 'text-astraYellow font-semibold' : `${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {competency.name}
              </span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Competency Details -->
      <div class="w-full md:w-3/5 order-2">
        <div class="relative {isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur border-2 border-astraYellow rounded-lg p-6 md:p-8 min-h-[350px] md:min-h-[400px] overflow-hidden shadow-xl">
          {#key selectedIndex}
            <div class="animate-fadeIn relative z-10">
              <h3 class="font-poppins font-semibold text-xl md:text-2xl text-astraYellow mb-3 md:mb-4">
                {selectedCompetency.name}
              </h3>
              <p class="font-montserrat {isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {selectedCompetency.description}
              </p>
              <h4 class="font-poppins font-semibold text-base md:text-lg text-cosmicPurple mb-3">
                Key Skills
              </h4>
              <ul class="space-y-2 md:space-y-3 font-montserrat {isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-xs md:text-sm">
                {#each selectedCompetency.details as detail}
                  <li class="flex items-start gap-3">
                    <span class="text-astraYellow mt-1 font-bold">✓</span>
                    <span>{detail}</span>
                  </li>
                {/each}
              </ul>
            </div>
          {/key}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.5s ease-out;
  }
</style>