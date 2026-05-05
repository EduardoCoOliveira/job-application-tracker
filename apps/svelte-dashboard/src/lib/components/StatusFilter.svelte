<script lang="ts">
  import { selectedStatus } from '../stores/dashboard';
  import type { ApplicationStatus } from '../types';

  const options: { value: ApplicationStatus | 'all'; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'applied', label: 'Aplicado' },
    { value: 'in_review', label: 'Em análise' },
    { value: 'interview', label: 'Entrevista' },
    { value: 'offer', label: 'Oferta' },
    { value: 'rejected', label: 'Rejeitado' },
  ];
</script>

<section class="filter-shell">
  <p class="eyebrow">Filtro reativo</p>
  <div class="chip-row">
    {#each options as option}
      <button
        type="button"
        class:active={$selectedStatus === option.value}
        class="chip"
        on:click={() => selectedStatus.set(option.value)}
      >
        {option.label}
      </button>
    {/each}
  </div>
</section>

<style>
  .filter-shell {
    display: grid;
    gap: 10px;
  }

  .chip-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .chip {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 10px 14px;
    background: var(--surface);
    color: var(--text-soft);
    cursor: pointer;
    transition: transform 160ms ease, background 160ms ease, color 160ms ease;
  }

  .chip:hover {
    transform: translateY(-1px);
  }

  .chip.active {
    background: var(--accent);
    border-color: var(--accent);
    color: #fff;
  }
</style>
