<script lang="ts">
  export let label: string;
  export let value: string | number;
  export let caption = '';
</script>

<article class="metric-card">
  <span class="metric-label">{label}</span>
  <strong class="metric-value">{value}</strong>
  {#if caption}
    <p class="metric-caption">{caption}</p>
  {/if}
</article>

<style>
  .metric-card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(248, 243, 232, 0.86));
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    padding: 18px;
    display: grid;
    gap: 6px;
  }

  .metric-label {
    color: var(--text-soft);
    font-size: 0.92rem;
  }

  .metric-value {
    font-size: 1.9rem;
    line-height: 1;
  }

  .metric-caption {
    margin: 0;
    color: var(--text-faint);
    font-size: 0.88rem;
  }
</style>
