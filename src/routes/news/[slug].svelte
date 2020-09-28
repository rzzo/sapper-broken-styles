<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`news/${params.slug}.json`);
    const post = await res.json();

    const res2 = await this.fetch(`news/recentNews.json`);
    const recentPosts = await res2.json();

    return { post, recentPosts };
  }
</script>

<script>
  import Head from '../../components/Head.svelte';
  import { fly } from 'svelte/transition';

  export let post;
  export let recentPosts;
</script>

<Head title={post.title} description={post.teaser} />

<div class="news two-col">
  <div class="left">
    <h1>{post.title}</h1>
    <h4><span>{post.date} • {post.minutes} minute read</span></h4>

    <article>
      {#if post.html}
        {@html post.html}
      {:else}
        <p />
      {/if}
    </article>
  </div>

  <aside transition:fly={{ x: 100 }}>
    <h4>Recent News</h4>

    <ul>
      {#each recentPosts as post}
        <li>
          <a rel="prefetch" href="news/{post.slug}"> {post.title} </a>
          <div class="date">{post.date}</div>
        </li>
      {/each}
    </ul>
  </aside>
</div>
