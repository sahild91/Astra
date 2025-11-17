<script lang="ts">
  export let id: string | undefined = undefined;
  export let className: string = "";
</script>

<section {id} class={`py-20 px-4 ${className}`}>
  <div class="max-w-6xl mx-auto">
    <slot />
  </div>
</section>