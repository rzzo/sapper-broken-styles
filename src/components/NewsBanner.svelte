<script>
  export let post;
</script>

<style lang="scss">
  // @import './styles/_newsBanner.scss';
</style>

<div class="post-header news-banner">
  <div class="text">
    <h4><a href="news/{post.slug}">{post.title}</a></h4>
    <h5><span>{post.date} • {post.minutes} minute read</span></h5>
    {#if post.teaser}
      <p>{post.teaser}</p>
    {/if}
  </div>
</div>
