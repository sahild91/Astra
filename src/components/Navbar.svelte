<script lang="ts">
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
    { label: "Impact", targetId: "Impact" },
    { label: "Why Partner", targetId: "WhyPartner" },
    { label: "Parents", targetId: "Parents" },
    { label: "Contact", targetId: "Contact" },
  ];

  let open = false;

  const toggle = () => {
    open = !open;
  };

  const close = () => {
    open = false;
  };
</script>

<nav class="fixed top-0 left-0 w-full bg-astraBlack/90 backdrop-blur text-white z-50 border-b border-gray-700 font-montserrat">
  <div class="max-w-full mx-auto flex justify-between items-center px-4">
    <div class="flex flex-col">
      <img src="/logo.png" alt="ASTRA Logo" class="h-24 w-auto" />
    </div>

    <button
      class="md:hidden text-white"
      aria-label="Toggle navigation"
      on:click={toggle}
    >
      ☰
    </button>

    <ul class="hidden md:flex gap-8 text-sm">
      {#each links as link}
        <li>
          <a
            href={`#${link.targetId}`}
            class="hover:text-astraYellow transition-colors"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  </div>

  {#if open}
    <ul class="md:hidden bg-astraBlack border-t border-gray-800 px-4 pb-4 text-sm">
      {#each links as link}
        <li class="py-2">
          <a
            href={`#${link.targetId}`}
            class="block hover:text-astraYellow"
            on:click={close}
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</nav>
