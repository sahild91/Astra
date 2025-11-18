<script lang="ts">
  export let isDarkMode = false;
</script>

<footer class="py-6 {isDarkMode ? 'bg-gray-950 border-gray-800' : 'bg-astraBlack border-gray-700'} text-center text-gray-400 font-montserrat text-xs border-t">
  © {new Date().getFullYear()} ASTRA EDU LLP · All Rights Reserved
</footer>