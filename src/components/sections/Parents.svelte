<script lang="ts">
  export let id: string = "Parents";
  export let isDarkMode = false;

  type FAQ = {
    question: string;
    answer: string;
  };

  const faqs: FAQ[] = [
    {
      question: "What is ISDC and why should my child participate?",
      answer: "ISDC (International Space Development Conference) hosts the Gerard K. O'Neill Space Settlement Contest, a prestigious international competition. Participation develops critical thinking, research skills, and provides global recognition that strengthens college applications."
    },
    {
      question: "How much time commitment is required?",
      answer: "The program involves 50 hours of structured training spread across 20 modules, typically conducted over several months. This includes guided sessions, team collaboration time, and independent research work."
    },
    {
      question: "What skills will my child develop?",
      answer: "Students develop space science understanding, research and analytical skills, teamwork and communication abilities, project management, and creative problem-solving. These competencies are valuable across all academic and professional fields."
    },
    {
      question: "Is prior knowledge of space science necessary?",
      answer: "No prior expertise is required. Our curriculum starts with foundational concepts and progressively builds understanding. What matters most is curiosity, willingness to learn, and commitment to the team project."
    },
    {
      question: "How is student progress measured?",
      answer: "We use pre and post assessments to track growth across six competencies. Regular feedback sessions and project milestones ensure continuous development and support throughout the program."
    }
  ];

  let openIndex: number | null = null;

  function toggleFAQ(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section {id} class="relative py-24 px-6 md:px-16">
  <div class="max-w-5xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-center text-astraYellow mb-8">
      For Parents
    </h2>

    <p class="text-center {isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-montserrat mb-12 max-w-3xl mx-auto">
      We understand that choosing the right enrichment program for your child is an important decision. Here are answers to common questions parents ask about our ISDC 2026 Training Program.
    </p>

    <div class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-astraYellow/50">
      <h3 class="text-2xl md:text-3xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-8 text-center">
        Frequently Asked Questions
      </h3>

      <div class="space-y-4">
        {#each faqs as faq, index}
          <div class="border-2 {isDarkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg overflow-hidden hover:border-astraYellow transition-colors">
            <button
              on:click={() => toggleFAQ(index)}
              class="w-full flex items-center justify-between p-6 {isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} transition-colors text-left"
            >
              <span class="font-poppins font-semibold {isDarkMode ? 'text-gray-100' : 'text-gray-900'} text-lg pr-4">
                {faq.question}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-astraYellow transition-transform duration-300 flex-shrink-0 {openIndex === index ? 'rotate-180' : ''}"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {#if openIndex === index}
              <div class="px-6 pb-6 {isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}">
                <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            {/if}
          </div>
        {/each}
      </div>

      <div class="mt-12 {isDarkMode ? 'bg-gradient-to-r from-astraYellow/20 via-skyBlue/20 to-spaceGreen/20' : 'bg-gradient-to-r from-astraYellow/10 via-skyBlue/10 to-spaceGreen/10'} rounded-2xl p-6 border-l-4 border-astraYellow">
        <p class="{isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-montserrat text-lg">
          <strong class="text-astraYellow">Still have questions?</strong> We are here to help. Reach out to our team through the contact section below, and we will be happy to discuss how this program can benefit your child.
        </p>
      </div>
    </div>
  </div>
</section>