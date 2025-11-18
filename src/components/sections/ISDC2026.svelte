<script lang="ts">
    export let id: string = "ISDC2026";
    import Constellations from "../../lib/Constellations.svelte";
</script>

<section id={id} class="relative py-24 px-6 md:px-16 text-white overflow-hidden">    
    <Constellations />
    
    <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <!-- Text Content (Right side) -->
        <div class="md:w-3/5 order-1 md:order-2">
            <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6">
                What is ISDC?
            </h2>

            <p class="font-montserrat text-gray-300 mb-6">
                The International Space Development Conference (ISDC) is the annual
                flagship forum of the National Space Society (NSS). Since 1982 it
                has brought together students, researchers, industry leaders, and
                space enthusiasts from across the world to discuss the future of
                human activity beyond Earth. One of its most visible initiatives is
                the NSS Gerard K. O'Neill Space Settlement Contest, where student
                teams design and document visionary yet technically grounded space
                habitats and settlements.
            </p>

            <p class="font-montserrat text-gray-300 mb-10">
                Over the decades the contest has evolved from a small collaboration
                between NASA and San José State University to a truly global
                competition, receiving thousands of submissions from tens of
                thousands of students across Asia, Europe, and the Americas. Winning
                entries are showcased at ISDC and associated NASA platforms,
                providing authentic international visibility to participating
                schools and teams.
            </p>
        </div>

        <!-- Timeline (Left side) -->
        <div class="md:w-2/5 order-2 md:order-1">
            <div class="grid gap-4 text-sm font-montserrat text-gray-300">
                <div class="bg-white/5 border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
                    <h3 class="font-poppins font-semibold text-astraYellow mb-1">
                        1982
                    </h3>
                    <p>
                        NSS launches ISDC as its global conference on space
                        development.
                    </p>
                </div>
                <div class="bg-white/5 border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
                    <h3 class="font-poppins font-semibold text-astraYellow mb-1">
                        1994
                    </h3>
                    <p>
                        NASA and San José State University initiate the Space
                        Settlement Contest with a small cohort of teams.
                    </p>
                </div>
                <div class="bg-white/5 border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
                    <h3 class="font-poppins font-semibold text-astraYellow mb-1">
                        2000s
                    </h3>
                    <p>
                        Participation expands worldwide, with well over a thousand
                        habitat designs submitted annually.
                    </p>
                </div>
                <div class="bg-white/5 border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:border-astraYellow/30 transition-colors">
                    <h3 class="font-poppins font-semibold text-astraYellow mb-1">
                        Today
                    </h3>
                    <p>
                        ISDC hosts student innovators from 25+ countries, nurturing
                        future leaders in space exploration.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>