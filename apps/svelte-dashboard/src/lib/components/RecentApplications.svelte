<script lang="ts">
  import { filteredApplications } from '../stores/dashboard';

  const statusLabel: Record<string, string> = {
    saved: 'Salva',
    applied: 'Aplicado',
    in_review: 'Em análise',
    interview: 'Entrevista',
    offer: 'Oferta',
    rejected: 'Rejeitado',
    approved: 'Aprovado',
  };
</script>

<section class="panel">
  <div class="panel-header">
    <div>
      <p class="eyebrow">Leitura rápida</p>
      <h2 class="section-title">Candidaturas filtradas</h2>
    </div>
    <span class="muted">{$filteredApplications.length} itens</span>
  </div>

  <div class="list-shell">
    {#each $filteredApplications as application}
      <article class="list-row">
        <div>
          <strong>{application.position}</strong>
          <div class="table-meta">{application.company} · {application.source}</div>
        </div>
        <span class={`status-pill ${application.status}`}>
          {statusLabel[application.status]}
        </span>
        <div class="list-summary">{application.nextAction}</div>
        <span class="muted">{application.updatedAt}</span>
      </article>
    {/each}
  </div>
</section>

<style>
  .panel {
    background: rgba(255, 253, 247, 0.92);
    border: 1px solid var(--line);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow);
    padding: 24px 28px;
    display: grid;
    gap: 18px;
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    align-items: flex-start;
  }

  .list-shell {
    border: 1px solid var(--line);
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--surface);
  }

  .list-row {
    display: grid;
    grid-template-columns: 1.5fr auto 1.4fr auto;
    gap: 14px;
    align-items: center;
    padding: 16px 18px;
    border-top: 1px solid var(--line);
  }

  .list-row:first-child {
    border-top: none;
  }

  .list-summary {
    color: var(--text-soft);
    font-size: 0.95rem;
  }

  @media (max-width: 900px) {
    .list-row {
      grid-template-columns: 1fr;
    }
  }
</style>
