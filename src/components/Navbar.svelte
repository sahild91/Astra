<script lang="ts">
  export let isDarkMode = false;

  type NavLink = {
    label: string;
    targetId: string;
  };

  const links: NavLink[] = [
    { label: "Home", targetId: "Home" },
    { label: "About", targetId: "About" },
    { label: "ISDC 2026", targetId: "ISDC2026" },
    { label: "Program", targetId: "Program" },
    { label: "Outcomes", targetId: "Outcomes" },
    { label: "Assessment", targetId: "Assessment" },
    { label: "Impact", targetId: "Impact" },
    { label: "Why Partner", targetId: "WhyPartner" },
    { label: "Parents", targetId: "Parents" },
    { label: "Contact", targetId: "Contact" },
  ];

  let open = false;

  $: logoSrc = isDarkMode ? "/logo.png" : "/logo-black.png";

  const toggle = () => {
    open = !open;
  };

  const close = () => {
    open = false;
  };
</script>

<nav class="fixed top-0 left-0 w-full {isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'} backdrop-blur z-50 border-b-4 border-astraYellow shadow-md font-montserrat transition-colors duration-300">
  <div class="max-w-full mx-auto flex justify-between items-center px-4">
    <div class="flex flex-col">
      <img src="{logoSrc}" alt="ASTRA Logo" class="h-24 w-auto" />
    </div>

    <button
      class="md:hidden text-astraYellow"
      aria-label="Toggle navigation"
      on:click={toggle}
    >
      ☰
    </button>

    <ul class="hidden md:flex gap-8 text-sm font-semibold">
      {#each links as link}
        <li>
          <a
            href={`#${link.targetId}`}
            class="{isDarkMode ? 'text-gray-200 hover:text-astraYellow' : 'text-gray-800 hover:text-astraYellow'} transition-colors"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  {#if open}
    <ul class="md:hidden {isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t-2 border-astraYellow px-4 pb-4 text-sm font-semibold">
      {#each links as link}
        <li class="py-2">
          <a
            href={`#${link.targetId}`}
            class="block {isDarkMode ? 'text-gray-200 hover:text-astraYellow' : 'text-gray-800 hover:text-astraYellow'} transition-colors"
            on:click={close}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>