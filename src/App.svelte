<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Hero from "./components/Hero.svelte";

  import ISDC2026 from "./components/sections/ISDC2026.svelte";
  import Program from "./components/sections/Program.svelte";
  import Outcomes from "./components/sections/Outcomes.svelte";
  import Impact from "./components/sections/Impact.svelte";
  import WhyPartner from "./components/sections/WhyPartner.svelte";
  import Parents from "./components/sections/Parents.svelte";
  import Contact from "./components/sections/Contact.svelte";
  import Footer from "./components/sections/Footer.svelte";

  import Section from "./components/Section.svelte";
</script>

<div class="font-montserrat bg-astraBlack text-white min-h-screen">
  <Navbar />

  <main class="pt-20">
    <Hero />

    <!-- About ASTRA / TDG -->
    <section id="About" class="py-24 px-6 md:px-16 bg-black text-white">
      <div class="flex flex-col md:flex-row items-start justify-between gap-2">
        <!-- LEFT: Text -->
        <div class="max-w-6xl">
          <h2
            class="text-4xl md:text-5xl font-poppins font-bold text-astraYellow mb-6"
          >
            About ASTRA EDU LLP and Travel De Gama
          </h2>

          <p class="text-gray-300 leading-relaxed font-montserrat mb-4">
            ASTRA EDU LLP is the education and innovation vertical under Travel
            De Gama that curates research-driven global learning experiences in
            space science and technology. Since 2016 our core team has mentored
            Indian school students for international space contests, helping
            them transform early ideas into award-winning submissions reviewed
            by expert juries.
          </p>

          <p class="text-gray-300 leading-relaxed font-montserrat mb-4">
            The ISDC 2026 Training Program is a 50-hour, 20-module journey
            aligned with NEP 2020, IB ATL skills, and contemporary innovation
            frameworks. The curriculum blends scientific thinking, collaborative
            research, and impactful storytelling, measured through structures
            like Marzano and SOLO taxonomy.
          </p>

          <p class="text-gray-300 leading-relaxed font-montserrat">
            Over 30,000 student journeys have been shaped through these
            initiatives, with teams earning recognition on NASA-linked platforms
            and ISDC, bringing global visibility to their schools.
          </p>
        </div>

        <!-- RIGHT: Spaceman -->
        <div
          class="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto"
        >
          <img
            src="/spaceman-no-bg.png"
            alt="ASTRA Mascot"
            class="w-56 md:w-72 lg:w-80 floating"
          />
        </div>
      </div>

      <style>
        .floating {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      </style>
    </section>

    <ISDC2026 />
    <Program />
    <Outcomes />
    <Impact />
    <WhyPartner />
    <Parents />
    <Contact />
  </main>

  <Footer />
</div>
