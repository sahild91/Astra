<script lang="ts">
  // Number of stars
  const STAR_COUNT = 45;

  // Random star positions
  const stars = Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100
  }));

  // Random connections between stars
  function randomConnections() {
    const lines = [];
    for (let i = 0; i < STAR_COUNT / 3; i++) {
      const a = stars[Math.floor(Math.random() * STAR_COUNT)];
      const b = stars[Math.floor(Math.random() * STAR_COUNT)];
      lines.push({ a, b });
    }
    return lines;
  }

  let connections = randomConnections();

  // Update constellations every few seconds
  const interval = setInterval(() => {
    connections = randomConnections();
  }, 4000);
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
  <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">

    <!-- Stars -->
    {#each stars as star}
      <circle cx={star.x} cy={star.y} r="0.25" fill="white" />
    {/each}

    <!-- Constellation lines -->
    {#each connections as line (line)}
      <line
        x1={line.a.x}
        y1={line.a.y}
        x2={line.b.x}
        y2={line.b.y}
        stroke="white"
        stroke-width="0.07"
        class="fade"
      />
    {/each}

  </svg>
</div>

<style>
  .fade {
    animation: fadeInOut 4s ease-in-out infinite;
  }

  @keyframes fadeInOut {
    0%   { opacity: 0; }
    30%  { opacity: 0.8; }
    70%  { opacity: 0.8; }
    100% { opacity: 0; }
  }
</style>