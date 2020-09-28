<script>
  export let posts;
</script>

<style lang="scss">
  .post {
    background: darkred;
  }
</style>

{#each posts as post}
  <div class="post col home-news">
    <div>
      <a class="post-link" rel="prefetch" href="news/{post.slug}">
        <h4>{post.title}</h4>
      </a>
      <h5>{post.date}</h5>

      <article>
        <p>{post.teaser}</p>
      </article>
    </div>

    <a class="read-more" rel="prefetch" href="news/{post.slug}">Read More
      &#8594;</a>
  </div>
{/each}
