<script>
import { tweenTest } from "../storeItem";
let value = 0
const btnOnClick = () =>{
    $tweenTest = value
}
</script>

<progress value={$tweenTest} max="100"></progress>

<input type="number" bind:value min="0" max="100" />
<button on:click={btnOnClick}>Load Progress</button>

