<script lang="ts">
  import { DIFFICULTY_LEVELS } from '../utils/gameData';

  export let currDifficulty = DIFFICULTY_LEVELS[1];
  let selection = currDifficulty.name;

  $: currDifficulty = DIFFICULTY_LEVELS.find((dl) => dl.name === selection);
</script>

<div>
  <form>
    <label for="difficulty">Difficulty:</label>
    <select name="difficulty" bind:value={selection}>
      {#each DIFFICULTY_LEVELS as difficulty}
        <option value={difficulty.name}>{difficulty.name}</option>
      {/each}
    </select>
  </form>
</div>

<style>
  select {
    text-transform: capitalize;
  }
  option {
    padding-left: 10px;
  }
</style>
