<script>
    import { springy } from "../storeItem";
    const jump = () =>{
        console.log($springy)
        $springy += 10;
    }
    const reset = () =>{
        $springy = 0;
    }
</script>
<div style="transform: scale({$springy})" />
<button on:click={jump}>Jump </button>
<button on:click={reset}>Reset</button>

<style>
    div{
        background-color: red;
        width: 10px;
        height: 20px;
    }
</style>