<script>
    import AddCount from './components/AddCount.svelte';
    import ShowCount from './components/showCount.svelte';
    import TodoItem from './components/Todo-item.svelte';
    import ProgressItem from './components/tweenTest.svelte'
    import Springy from './components/Springy.svelte';
    import { interval } from './storeItem';
    import { onMount } from 'svelte';
    import { toDoItems } from './storeItem';


    let toDoTextInput = ""
    let isToggleForm = false
    const toggleForm = () => {
        isToggleForm = !isToggleForm
    }
    const submitToDo = () => {
        if(toDoTextInput === "") return
        toDoItems.update((items) => {
            return [...items, {id: crypto.randomUUID(), title: toDoTextInput,done: false}]
        })
        toDoTextInput = ""
        isToggleForm = false
    }
    onMount(()=>{
        console.log("this run newssss")
    })
</script>

<h1>To Do App</h1>

{#each $toDoItems as item (item.id)}
    <TodoItem itemID={item.id} itemText={item.title}/>
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
<ProgressItem/>
<div style="background:gray;width:100%;height:1px;margin:10px;"/>
<Springy/>

<h1>
    Keep adding : {$interval}
</h1>

<style>
    .todo-item-div {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        display:flex;
        flex-direction: row;
        align-items: center;
    }

</style>