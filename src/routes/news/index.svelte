<script context="module">
  export async function preload({ params, query }) {
    const res1 = await this.fetch('news/news.json');
    let posts = await res1.json();

    // const res2 = await this.fetch('news/tags.json');
    // const tags = await res2.json();

    // if (query.tag && tags.includes(query.tag)) {
    //   posts = posts.filter((post) => post.tags.includes(query.tag));
    // }

    // return { posts, tags };
    return { posts };
  }
</script>

<script>
  export let posts;

  import Title from '../../components/Title.svelte';
  import NewsBanner from '../../components/NewsBanner.svelte';
  import Head from '../../components/Head.svelte';

  import { fly } from 'svelte/transition';
</script>

<style lang="scss">
  .posts {
    background-color: darkred;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
  }
  // @media screen and (max-width: 450px) {
  //   .posts {
  //     grid-gap: 30px;
  //   }
  //   .post {
  //     border-bottom: 1px solid #fff2;
  //   }
  //   .post:last-child {
  //     border-bottom: none;
  //   }
  // }
</style>

<Head title="Latest News" description="The latest news" />

<div class="layout main-news">
  <Title title="News" />

  <div class="posts">
    {#each posts as post, i}
      <div class="post" in:fly={{ delay: i * 50, y: 0, x: 50, duration: 250 }}>
        <NewsBanner {post} />
      </div>
    {/each}
  </div>
</div>
