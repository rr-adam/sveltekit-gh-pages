<script>
  import { base } from '$app/paths';

  let count = 0;
  
  function handleClick() {
  count += 1;
  }
</script>

<button on:click={handleClick}>
	clicks: {count}
</button>

<p>
  <a href="{base}/subpage">Go to subpage</a>
</p>
