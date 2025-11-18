<script lang="ts">
  export let id: string = "Outcomes";

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

<section {id} class="relative py-24 px-6 md:px-16 bg-gradient-to-bl from-black to-gray-900 text-white overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-10 left-10 w-72 h-72 bg-green-500 opacity-5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-10 right-10 w-80 h-80 bg-astraYellow opacity-5 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6 text-center md:text-left">
      Learning Outcomes
    </h2>

    <p class="text-gray-300 font-montserrat mb-12 text-center md:text-left max-w-3xl">
      The curriculum is designed to strengthen both disciplinary understanding and 21st-century competencies.
      Growth is mapped using research-based frameworks such as Marzano and SOLO taxonomy.
    </p>

    <div class="flex flex-col md:flex-row items-start gap-12">
      <!-- Left: Interactive Competencies -->
      <div class="md:w-2/5 order-2 md:order-1">
        <h3 class="font-poppins font-semibold text-xl text-astraYellow mb-4">
          Competencies Tracked
        </h3>
        <p class="font-montserrat text-gray-400 text-sm mb-6">
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
              class="bg-white/5 border rounded-lg p-4 backdrop-blur-sm transition-all duration-500 cursor-pointer
                {selectedIndex === index ? 'border-astraYellow bg-astraYellow/10 scale-105' : 'border-gray-700 hover:border-gray-600'}"
            >
              <span class={selectedIndex === index ? 'text-astraYellow font-semibold' : 'text-gray-300'}>
                {competency.name}
              </span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: Competency Details -->
      <div class="md:w-3/5 order-1 md:order-2">
        <div class="bg-white/5 border border-gray-700 rounded-lg p-8 backdrop-blur-sm min-h-[400px]">
          {#key selectedIndex}
            <div class="animate-fadeIn">
              <h3 class="font-poppins font-semibold text-2xl text-astraYellow mb-4">
                {selectedCompetency.name}
              </h3>
              <p class="font-montserrat text-gray-300 mb-6 leading-relaxed">
                {selectedCompetency.description}
              </p>
              <h4 class="font-poppins font-semibold text-lg text-astraYellow mb-3">
                Key Skills
              </h4>
              <ul class="space-y-3 font-montserrat text-gray-300 text-sm">
                {#each selectedCompetency.details as detail}
                  <li class="flex items-start gap-3">
                    <span class="text-astraYellow mt-1">✓</span>
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