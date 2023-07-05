<script>
    import { count } from '../storeItem';
    const addCount = () =>{count.update(n => n + 1);}
</script>

<button on:click={addCount}>+</button>