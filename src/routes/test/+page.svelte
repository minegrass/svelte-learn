<script>
    import AddCount from './components/AddCount.svelte';
import ShowCount from './components/showCount.svelte';
import { interval } from './storeItem';
    import { onMount } from 'svelte';

    let toDoList = [{id:crypto.randomUUID(),text:"item1"},{id:crypto.randomUUID(),text:"item2"}]
    let toDoTextInput = ""
    let isToggleForm = false
    const toggleForm = () => {
        isToggleForm = !isToggleForm
    }
    const submitToDo = () => {
        if(toDoTextInput === "") return
        toDoList = [...toDoList, {id:crypto.randomUUID(),text:toDoTextInput}]
        toDoTextInput = ""
    }
    onMount(()=>{
        console.log("this run newssss")
    })
</script>

<h1>To Do App</h1>

{#each toDoList as item (item.id)}
<div class="todo-item-div">
    <p>{item.text}</p>
</div>
{/each}
{#if (isToggleForm)}
<div class="todo-item-div">
    <input type="text" placeholder="Enter To Do Item" bind:value={toDoTextInput} />
    <button on:click={submitToDo}>Confirm</button>
</div>
{/if}
<button on:click={toggleForm}>Add</button>

<ShowCount/>
<AddCount/>

<h1>
    Keep adding : {$interval}
</h1>

<style>
    .todo-item-div {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
    }
</style>