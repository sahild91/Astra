<script lang="ts">
  export let id: string = "Parents";
</script>

<section {id} class="relative py-24 px-6 md:px-16 bg-gradient-to-bl from-black to-gray-900 text-white overflow-hidden">
  <!-- Background decoration -->
  <div class="absolute top-10 left-10 w-80 h-80 bg-astraYellow opacity-5 rounded-full blur-3xl"></div>
  <div class="absolute bottom-10 right-10 w-64 h-64 bg-green-500 opacity-5 rounded-full blur-3xl"></div>

  <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
    <!-- Right: Main Content -->
    <div class="md:w-3/5 order-1 md:order-2">
      <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6">
        Information for Parents
      </h2>

      <p class="font-montserrat text-gray-300 mb-8">
        The ISDC 2026 Training Program is more than a competition pathway. It is a structured learning experience
        that nurtures scientific temper, resilience, and teamwork while giving students a glimpse of real-world
        research and engineering practice.
      </p>

      <div class="space-y-6">
        <div class="bg-white/5 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
          <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-3">What your child gains</h3>
          <ul class="list-disc list-inside font-montserrat text-sm text-gray-300 space-y-2">
            <li>Guided exposure to advanced space science and settlement concepts.</li>
            <li>Experience of working in project teams with shared responsibility and timelines.</li>
            <li>Confidence to communicate ideas to external experts and international audiences.</li>
            <li>Certificates, letters, and portfolios that support future academic journeys.</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Left: How it works -->
    <div class="md:w-2/5 order-2 md:order-1">
      <div class="bg-white/5 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
        <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-3">How the program is structured</h3>
        <ul class="list-disc list-inside font-montserrat text-sm text-gray-300 space-y-2">
          <li>Clearly defined modules with regular checkpoints and mentor feedback.</li>
          <li>Pre- and post-assessments to help you see growth in skills and confidence.</li>
          <li>Templates and guidelines that make expectations transparent for students.</li>
          <li>A dedicated support team for coordination around timelines and submissions.</li>
        </ul>
      </div>
    </div>
  </div>
</section>