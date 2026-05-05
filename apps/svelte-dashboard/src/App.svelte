<script lang="ts">
  import MetricCard from './lib/components/MetricCard.svelte';
  import RecentApplications from './lib/components/RecentApplications.svelte';
  import StatusFilter from './lib/components/StatusFilter.svelte';
  import { applications, metrics, recentApplications } from './lib/stores/dashboard';

  const modalityLabel = (modality: string, city?: string) =>
    city ? `${modality === 'remote' ? 'Remoto' : modality === 'hybrid' ? 'Híbrido' : 'Presencial'} · ${city}` : modality === 'remote' ? 'Remoto' : modality === 'hybrid' ? 'Híbrido' : 'Presencial';
</script>

<div class="dashboard-shell">
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-mark">JAT</div>
      <div class="brand-copy">
        <strong>Svelte Dashboard</strong>
        <span>Painel reativo complementar</span>
      </div>
    </div>

    <nav class="nav-group">
      <a class="nav-link active" href="#overview">Visão geral</a>
      <a class="nav-link" href="#filter">Status</a>
      <a class="nav-link" href="#recent">Recentes</a>
      <a class="nav-link" href="#compare">Comparativo</a>
    </nav>

    <div class="sidebar-note">
      <p class="eyebrow">Comparação com Angular</p>
      <ul class="mini-list">
        <li>Store central em vez de service com RxJS</li>
        <li>Derived stores para métricas e filtro</li>
        <li>Componentes mais leves e diretos</li>
      </ul>
    </div>
  </aside>

  <main class="content-shell">
    <section class="topbar" id="overview">
      <div>
        <p class="eyebrow">Segundo frontend</p>
        <h1 class="page-title">Dashboard em Svelte</h1>
        <p>
          Visão reativa e compacta do mesmo domínio de candidaturas, feita para
          destacar stores, composição e baixo boilerplate.
        </p>
      </div>
      <div class="button-row">
        <a class="button ghost" href="../angular-app/job-application-tracker/">Abrir Angular</a>
        <a class="button primary" href="#recent">Atualizar painel</a>
      </div>
    </section>

    <section class="metrics-grid" id="compare">
      <MetricCard label="Em andamento" value={$metrics.active} caption="Processos ainda abertos" />
      <MetricCard label="Entrevistas" value={$metrics.interview} caption="Conversas técnicas ou comportamentais" />
      <MetricCard label="Remote-friendly" value={$metrics.remoteFriendly} caption="Remoto ou híbrido" />
      <MetricCard label="Ofertas" value={$metrics.offer} caption="Oportunidades já em decisão final" />
    </section>

    <section class="hero-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <p class="eyebrow">Store derivada</p>
            <h2 class="section-title">Resumo recente</h2>
          </div>
          <span class="muted">{$applications.length} registros</span>
        </div>

        <div class="highlight-grid">
          {#each $recentApplications as application}
            <article class="mini-card">
              <div class="card-header">
                <div>
                  <strong>{application.company}</strong>
                  <div class="table-meta">{application.position}</div>
                </div>
                <span class={`status-pill ${application.status}`}>{application.updatedAt}</span>
              </div>
              <p class="summary">{application.summary}</p>
              <div class="card-footer">
                <span class="tag">{modalityLabel(application.modality, application.city)}</span>
                <span class="muted">{application.appliedAt}</span>
              </div>
            </article>
          {/each}
        </div>
      </section>

      <section class="panel side-panel" id="filter">
        <StatusFilter />

        <div class="reactivity-note">
          <p class="eyebrow">Reatividade</p>
          <p class="muted">
            O filtro muda o store global e todas as leituras derivadas são recalculadas
            automaticamente, sem service, sem subscribe manual e com pouco boilerplate.
          </p>
        </div>
      </section>
    </section>

    <div id="recent">
      <RecentApplications />
    </div>
  </main>
</div>
