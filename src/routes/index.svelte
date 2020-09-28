<script context="module">
  export async function preload({ params, query }) {
    // return await this.fetch(`setup.json`)
    //   .then((r) => r.json())
    //   .then((setupData) => {
    //     return { setupData };
    //   });

    const res1 = await this.fetch('setup.json');
    const setupData = await res1.json();

    const res2 = await this.fetch('news/recentNews.json');
    const posts = await res2.json();

    const res3 = await this.fetch(
      'https://opentdb.com/api.php?amount=10&category=11&type=multiple'
    );
    const agendasData = await res3.json();

    return { posts, setupData, agendasData };
  }
</script>

<script>
  // async function getAgendas() {
  //   const res = await fetch(
  //     'https://opentdb.com/api.php?amount=10&category=11&type=multiple'
  //   );
  //   const agendas = await res.json();
  //   return agendas;
  // }

  import Head from '../components/Head.svelte';
  import News from '../components/RecentNews.svelte';

  export let agendasData;
  export let setupData;
  export let posts;
  const data = setupData[0];
</script>

<Head
  title="Welcome to the {data.municipality}
  {data.homeGroup.addressGroup.state}!"
  description="The official website for the {data.municipality}
  {data.homeGroup.addressGroup.state}" />

<div class="homepage">
  <div
    class="hero-banner"
    style=" background-image: linear-gradient( rgba(0, 0, 0, 0.08), rgba(0, 0, 0,
  0.08) ), url('{data.homeGroup.heroGroup.hero}');">
    <div class="welcome-wrapper">
      <h3>Welcome to</h3>
      <h1>{data.municipality}</h1>
    </div>
  </div>

  <section class="news">
    <h2>The Latest</h2>

    {#if posts}
      <div class="flex-grid">
        <News {posts} />
      </div>
      <div class="read-all">
        <a class="cta" href="news" rel="prefetch">Read All</a>
      </div>
    {:else}
      <p>No posts yet...</p>
    {/if}
  </section>

  <section class="agendas">
    <h2>Agendas</h2>
    {#each agendasData.results as agenda, index}{agenda.question}{/each}
  </section>
</div>
