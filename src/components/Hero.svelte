<script lang="ts">
    function scrollToContact() {
        const contactSection = document.getElementById('Contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<div class="starfield min-h-screen flex items-center relative overflow-hidden">
    <!-- Additional cosmic elements -->
    <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
    <div class="absolute top-1/3 right-1/3 w-1 h-1 bg-astraYellow rounded-full animate-pulse delay-1"></div>
    <div class="absolute bottom-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-2"></div>
    
    <section id="Home" class="w-full py-24 relative z-10">
        <div
            class="w-full px-4 md:px-12 lg:px-24 xl:px-40 2xl:px-56 flex flex-col items-center text-center"
        >
            <h1
                class="text-4xl md:text-6xl font-poppins font-semibold mb-6 text-astraYellow drop-shadow-lg"
            >
                ASTRA Space Innovation Program for ISDC 2026
            </h1>

            <p
                class="text-gray-200 font-montserrat max-w-3xl md:max-w-4xl mb-10"
            >
                A world-class mentorship journey that guides school students
                from early curiosity to research-based, competition-ready space
                settlement proposals presented on a global ISDC stage.
            </p>

            <div class="flex flex-wrap gap-4 justify-center">
                <button
                    on:click={scrollToContact}
                    class="bg-astraYellow text-astraBlack font-montserrat font-semibold px-6 py-3 rounded-md text-sm md:text-base hover:bg-yellow-500 transition"
                >
                    Invite ASTRA to Your School
                </button>
                <a
                    href="/ASTRA ISDC Brochure.pdf"
                    download="ASTRA ISDC Brochure.pdf"
                    class="px-6 py-3 bg-transparent border border-astraYellow text-astraYellow rounded-lg font-montserrat hover:bg-astraYellow hover:text-black transition"
                >
                    Download Brochure
                </a>
            </div>
        </div>
    </section>
</div>

<style>
    .delay-1 {
        animation-delay: 1s;
    }
    .delay-2 {
        animation-delay: 2s;
    }
</style>