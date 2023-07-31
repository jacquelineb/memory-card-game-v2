<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();
  import { DIFFICULTY_LEVELS } from '../utils/gameData';

  export let currDifficulty = DIFFICULTY_LEVELS[1];
  let selection = currDifficulty.name;

  $: dispatch(
    'change',
    DIFFICULTY_LEVELS.find((dl) => dl.name === selection)
  );
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
</style>
