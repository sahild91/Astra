<script lang="ts">
  export let id: string = "Outcomes";
</script>

<section {id} class="relative py-24 px-6 md:px-16 bg-gradient-to-bl from-black to-gray-900 text-white overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-10 left-10 w-72 h-72 bg-green-500 opacity-5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-10 right-10 w-80 h-80 bg-astraYellow opacity-5 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
    <!-- Right: Main Content -->
    <div class="md:w-3/5 order-1 md:order-2">
      <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6">
        Learning Outcomes
      </h2>

      <p class="text-gray-300 font-montserrat mb-10">
        The curriculum is designed to strengthen both disciplinary understanding and 21st-century competencies.
        Growth is mapped using research-based frameworks such as Marzano and SOLO taxonomy.
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <ul class="list-disc list-inside space-y-2 font-montserrat text-gray-300 text-sm">
          <li>Analyze space science concepts and synthesise innovative design solutions.</li>
          <li>Design models and systems using structured problem-solving approaches.</li>
          <li>Collaborate to plan, develop, and manage long-term team projects.</li>
          <li>Communicate technical ideas through reports, posters, and oral presentations.</li>
        </ul>
        <ul class="list-disc list-inside space-y-2 font-montserrat text-gray-300 text-sm">
          <li>Evaluate data and decisions using critical and creative thinking.</li>
          <li>Apply global perspectives in teamwork and innovation.</li>
          <li>Use reflection and feedback to iteratively improve project outcomes.</li>
          <li>Develop scientific temper, resilience, and ownership of learning.</li>
        </ul>
      </div>
    </div>

    <!-- Left: Competencies -->
    <div class="md:w-2/5 order-2 md:order-1">
      <h3 class="font-poppins font-semibold text-xl text-astraYellow mb-4">
        Competencies Tracked
      </h3>
      <div class="grid gap-4 text-sm font-montserrat text-gray-300">
        <div class="bg-white/5 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm">Space concept mastery</div>
        <div class="bg-white/5 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm">Research skills</div>
        <div class="bg-white/5 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm">Collaboration</div>
        <div class="bg-white/5 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm">Creativity &amp; communication</div>
        <div class="bg-white/5 border border-gray-700 rounded-lg p-4 text-center backdrop-blur-sm">Scientific temperament</div>
      </div>
    </div>
  </div>
</section>