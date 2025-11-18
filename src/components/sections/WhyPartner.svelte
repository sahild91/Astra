<script lang="ts">
  export let id: string = "WhyPartner";
  export let isDarkMode = false;

  type Reason = {
    title: string;
    description: string;
    icon: string;
  };

  const reasons: Reason[] = [
    {
      title: "Proven Track Record",
      description: "Since 2016, ASTRA has mentored students to award-winning submissions at ISDC and other international competitions.",
      icon: "🏆"
    },
    {
      title: "Curriculum Excellence",
      description: "Our 50-hour, 20-module program is aligned with NEP 2020, IB ATL skills, and research-backed learning frameworks.",
      icon: "📚"
    },
    {
      title: "Expert Mentorship",
      description: "Access to experienced mentors who understand both the technical requirements and the pedagogical needs of student teams.",
      icon: "👨‍🏫"
    },
    {
      title: "Comprehensive Support",
      description: "From concept to submission, we provide structured guidance, resources, and feedback at every stage of the journey.",
      icon: "🤝"
    },
    {
      title: "Measurable Outcomes",
      description: "Pre and post assessments track growth across competencies, providing tangible evidence of student development.",
      icon: "📊"
    },
    {
      title: "Global Recognition",
      description: "Participation connects your school to an international community and enhances institutional reputation.",
      icon: "🌍"
    }
  ];
</script>

<section {id} class="relative py-24 px-6 md:px-16">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-poppins font-bold text-center text-astraYellow mb-8">
      Why Partner with ASTRA?
    </h2>

    <p class="text-center {isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg font-montserrat mb-16 max-w-3xl mx-auto">
      Schools choose ASTRA EDU LLP for our comprehensive approach to space education and proven success in preparing students for international competitions.
    </p>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each reasons as reason}
        <div class="{isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-2xl shadow-lg p-8 border-2 border-transparent hover:border-astraYellow transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <!-- <div class="text-5xl mb-4 text-center">{reason.icon}</div> -->
          <h3 class="text-xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-3 text-center">
            {reason.title}
          </h3>
          <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-montserrat text-center">
            {reason.description}
          </p>
        </div>
      {/each}
    </div>

    <div class="mt-16 {isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} backdrop-blur rounded-3xl p-8 md:p-12 border-2 border-astraYellow/50 text-center shadow-xl">
      <h3 class="text-2xl md:text-3xl font-poppins font-bold {isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-4">
        Ready to Transform Your Students' Learning Journey?
      </h3>
      <p class="{isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-montserrat text-lg mb-6">
        Join the growing network of schools that trust ASTRA EDU LLP to deliver world-class space education experiences.
      </p>
    </div>
  </div>
</section>