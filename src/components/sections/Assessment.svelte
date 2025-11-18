<script lang="ts">
  export let id: string = "Assessment";
  
  let currentImageIndex = 0;
  const images = [
    { src: "/pre.png", alt: "Pre-Assessment Sample", label: "Baseline Assessment" },
    { src: "/post.png", alt: "Post-Assessment Sample", label: "Growth Assessment" }
  ];

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  }

  let touchStartX = 0;
  let touchEndX = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  }

  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchEndX - touchStartX > 50) {
      prevImage();
    }
  }
</script>

<section {id} class="relative py-16 md:py-24 px-6 md:px-16 text-white overflow-hidden">
  <div class="relative max-w-6xl mx-auto">
    <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6 text-center">
      Student Learning Assessment Framework
    </h2>

    <p class="text-gray-300 font-montserrat mb-8 md:mb-12 text-center max-w-3xl mx-auto text-sm md:text-base">
      A structured approach to measure and support individual growth throughout the ISDC 2026 journey
    </p>

    <!-- Purpose and Philosophy -->
    <div class="mb-12 md:mb-16">
      <h3 class="text-xl md:text-2xl font-poppins font-semibold text-astraYellow mb-4 md:mb-6">Purpose and Philosophy</h3>
      <div class="bg-white/5 border border-gray-800 rounded-lg p-6 md:p-8 backdrop-blur-sm">
        <p class="text-gray-300 font-montserrat mb-4 text-sm md:text-base">
          At ASTRA EDU LLP, we believe that every student has a unique learning pattern that influences how they understand, create, and collaborate. To ensure each participant receives the right mentoring throughout the ISDC 2026 journey, our program includes a structured learning profile assessment at two key stages: before and after training.
        </p>
        <p class="text-gray-300 font-montserrat text-sm md:text-base">
          This assessment helps mentors identify how each student learns, thinks, and grows across essential areas such as curiosity, reasoning, teamwork, and creative communication. It is designed to support individual development rather than competition and ensures that every learner is guided toward their personal best.
        </p>
      </div>
    </div>

    <!-- Two Stage Process -->
    <div class="mb-12 md:mb-16">
      <h3 class="text-xl md:text-2xl font-poppins font-semibold text-astraYellow mb-4 md:mb-6">Two-Stage Assessment Process</h3>
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Stage 1 -->
        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-astraYellow/10 border border-astraYellow flex items-center justify-center flex-shrink-0">
              <span class="text-astraYellow font-poppins font-bold text-lg md:text-xl">1</span>
            </div>
            <h4 class="text-lg md:text-xl font-poppins font-semibold text-astraYellow">Baseline Assessment</h4>
          </div>
          <p class="text-gray-400 font-montserrat text-xs md:text-sm mb-3">Before Training</p>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm mb-4">
            Conducted during orientation, this stage helps establish each student's starting point by identifying preferred learning and collaboration approaches, natural strengths in conceptual understanding and problem-solving, and areas where additional mentoring may help.
          </p>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Students engage with guided scenarios, short prompts, and reflection-based questions that allow mentors to map how they interpret information, reason through challenges, and work within a team.
          </p>
        </div>

        <!-- Stage 2 -->
        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-astraYellow/10 border border-astraYellow flex items-center justify-center flex-shrink-0">
              <span class="text-astraYellow font-poppins font-bold text-lg md:text-xl">2</span>
            </div>
            <h4 class="text-lg md:text-xl font-poppins font-semibold text-astraYellow">Growth Assessment</h4>
          </div>
          <p class="text-gray-400 font-montserrat text-xs md:text-sm mb-3">After Training</p>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm mb-4">
            Conducted toward the end of the program, this stage measures the student's growth and transformation across multiple dimensions, highlighting conceptual improvement and depth of reasoning, development of research thinking and structured argumentation, and progress in teamwork, motivation, and creativity.
          </p>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Comparing both stages offers a complete picture of how each learner has advanced in knowledge, confidence, and approach to problem-solving.
          </p>
        </div>
      </div>
    </div>

    <!-- Six Domains -->
    <div class="mb-12 md:mb-16">
      <h3 class="text-xl md:text-2xl font-poppins font-semibold text-astraYellow mb-4 md:mb-6">Six Domains of Evaluation</h3>
      <p class="text-gray-300 font-montserrat mb-6 md:mb-8 text-sm md:text-base">
        The framework measures development across six domains, represented on a five-point continuum for each participant. These domains are informed by student responses, reflections, and mentor observations across sessions.
      </p>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Space Concepts</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Understanding of scientific and thematic ideas related to space exploration
          </p>
        </div>

        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Research Aptitude</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Ability to ask questions, gather data, and draw logical conclusions
          </p>
        </div>

        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Scientific Temperament</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Open-mindedness, curiosity, and methodical thinking
          </p>
        </div>

        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Motivation</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Consistency, goal orientation, and perseverance in complex tasks
          </p>
        </div>

        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Collaboration</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Team contribution, listening, and constructive engagement
          </p>
        </div>

        <div class="bg-white/5 border border-gray-800 rounded-lg p-6 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
          <h4 class="text-base md:text-lg font-poppins font-semibold text-astraYellow mb-3">Creativity & Communication</h4>
          <p class="text-gray-300 font-montserrat text-xs md:text-sm">
            Clarity of expression, originality, and effective presentation
          </p>
        </div>
      </div>
    </div>

    <!-- Visual Example -->
    <div class="bg-gradient-to-br from-astraYellow/5 to-purple-500/5 border border-gray-800 rounded-lg p-6 md:p-8 backdrop-blur-sm">
      <h3 class="text-xl md:text-2xl font-poppins font-semibold text-astraYellow mb-4 text-center">Sample Assessment Visualization</h3>
      <p class="text-gray-300 font-montserrat text-xs md:text-sm text-center mb-6 md:mb-8">
        Growth is tracked visually through radar charts that compare baseline and post-training performance across all six domains
      </p>
      
      <!-- Desktop: Side by side -->
      <div class="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="text-center">
          <img src="/pre.png" alt="Pre-Assessment Sample" class="w-full rounded-lg mb-3" />
          <p class="text-gray-400 font-montserrat text-sm">Baseline Assessment</p>
        </div>
        <div class="text-center">
          <img src="/post.png" alt="Post-Assessment Sample" class="w-full rounded-lg mb-3" />
          <p class="text-gray-400 font-montserrat text-sm">Growth Assessment</p>
        </div>
      </div>

      <!-- Mobile: Swipeable carousel -->
      <div class="md:hidden relative max-w-sm mx-auto">
        <div 
          class="relative overflow-hidden"
          on:touchstart={handleTouchStart}
          on:touchend={handleTouchEnd}
        >
          <div class="text-center">
            <img 
              src={images[currentImageIndex].src} 
              alt={images[currentImageIndex].alt} 
              class="w-full rounded-lg mb-3" 
            />
            <p class="text-gray-400 font-montserrat text-sm mb-4">{images[currentImageIndex].label}</p>
          </div>
        </div>

        <!-- Navigation buttons -->
        <div class="flex justify-center gap-4 mb-4">
          <button
            on:click={prevImage}
            class="w-10 h-10 rounded-full bg-astraYellow/20 border border-astraYellow flex items-center justify-center hover:bg-astraYellow/30 transition-colors"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-astraYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            on:click={nextImage}
            class="w-10 h-10 rounded-full bg-astraYellow/20 border border-astraYellow flex items-center justify-center hover:bg-astraYellow/30 transition-colors"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-astraYellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Indicator dots -->
        <div class="flex justify-center gap-2">
          {#each images as _, index}
            <button
              on:click={() => currentImageIndex = index}
              class="w-2 h-2 rounded-full transition-colors {currentImageIndex === index ? 'bg-astraYellow' : 'bg-gray-600'}"
              aria-label={`Go to image ${index + 1}`}
            ></button>
          {/each}
        </div>
      </div>
      
      <p class="text-gray-400 font-montserrat text-xs text-center mt-6 italic">
        * This assessment is not a judgement on intelligence. It is used to understand learning preferences and guide personalized mentorship.
      </p>
    </div>
  </div>
</section>