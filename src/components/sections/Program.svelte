<script lang="ts">
    export let id: string = "Program";
</script>

<section {id} class="relative py-24 px-6 md:px-16 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute top-10 right-10 w-80 h-80 bg-blue-500 opacity-5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-10 left-10 w-64 h-64 bg-astraYellow opacity-5 rounded-full blur-3xl"></div>

    <div class="relative max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <!-- Left: Content -->
        <div class="md:w-3/5 order-1">
            <h2 class="text-3xl md:text-4xl font-poppins font-semibold text-astraYellow mb-6">
                Program Overview
            </h2>

            <p class="text-gray-300 font-montserrat mb-8">
                The ASTRA Space Innovation Program is an intensive 50-hour,
                20-module journey that blends space science, creativity, and
                structured research. Students progress from topic exploration to a
                complete space settlement report and presentation aligned with the
                NSS Gerard K. O'Neill Space Settlement Contest guidelines.
            </p>

            <div class="grid md:grid-cols-2 gap-6 mb-10">
                <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                    <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-1">
                        Phase 1
                    </h3>
                    <p class="font-montserrat text-sm text-gray-300">
                        Orientation and topic finalisation. Students understand
                        contest expectations, explore themes, and select a focus
                        area for their project.
                    </p>
                </div>
                <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                    <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-1">
                        Phase 2
                    </h3>
                    <p class="font-montserrat text-sm text-gray-300">
                        Research and mentorship. Guided sessions on literature
                        review, systems thinking, and data collection, with regular
                        mentor feedback.
                    </p>
                </div>
                <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                    <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-1">
                        Phase 3
                    </h3>
                    <p class="font-montserrat text-sm text-gray-300">
                        Project development. Teams build the technical narrative,
                        diagrams, and models, and connect scientific choices to
                        human factors.
                    </p>
                </div>
                <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                    <h3 class="font-poppins font-semibold text-lg text-astraYellow mb-1">
                        Phase 4 &amp; 5
                    </h3>
                    <p class="font-montserrat text-sm text-gray-300">
                        Final submission to NSS and preparation for ISDC. Includes
                        editing, mock judging, and presentation coaching for
                        selected teams travelling to the USA.
                    </p>
                </div>
            </div>
        </div>

        <!-- Right: Additional Info -->
        <div class="md:w-2/5 order-2 space-y-6">
            <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                <h3 class="font-poppins font-semibold text-xl text-astraYellow mb-2">
                    Student Kit and Support
                </h3>
                <ul class="list-disc list-inside font-montserrat text-sm text-gray-300 space-y-1">
                    <li>On-boarding kit with report formats, templates, and rubrics.</li>
                    <li>Hybrid live sessions with interim tasks and reflections.</li>
                    <li>Mentor access for doubt-clearing and review.</li>
                    <li>Mock presentations with structured feedback.</li>
                </ul>
            </div>

            <div class="p-6 border border-gray-700 rounded-lg bg-white/5 backdrop-blur-sm">
                <h3 class="font-poppins font-semibold text-xl text-astraYellow mb-2">
                    Tracks and Contest Options
                </h3>
                <p class="font-montserrat text-sm text-gray-300">
                    Students can opt for poster or oral presentation tracks.
                    Within each track the program scaffolds them through
                    ideation, evidence gathering, design, and narrative building
                    so that final submissions match international expectations.
                </p>
            </div>
        </div>
    </div>
</section>