<script lang="ts">
  import { localStore } from '../localStore';
  export let score = 0;
  let bestScore = localStore<number>('best-score', 0);

  $: if (score > $bestScore) {
    $bestScore = score;
  }
</script>

<div class="scores">
  <div>
    Best score: {$bestScore}
  </div>
  <div>
    Score: {score}
  </div>
</div>
