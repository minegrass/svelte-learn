<script lang="ts">
    import { toDoItems } from "../storeItem";
    export let itemText:string
    export let itemID:string
    let isEdit = false;
    const editBtnClick = () => {
        isEdit = !isEdit
        if(!isEdit){
            // update the toDoItems to the content that edited
            // $toDoItems = $toDoItems.map((item) => {
            //     if(item.id === itemID){
            //         return {...item,title:itemText}
            //     }
            //     return item
            // })
            console.log()
        }
    }
    const deleteBtnClick = (id:string) => {
        $toDoItems = $toDoItems.filter((item) => item.id !== id)
    }
</script>

<div class="todo-item-div">
    <p class:hide={isEdit}>{itemText}</p>
    <input type="text" bind:value={itemText} class:hide={!isEdit}/>
    <div class="button-div">
    <button on:click={editBtnClick}>{isEdit?"✅":"✏️"}</button>
    <button on:click={()=>{deleteBtnClick(itemID)}}>🗑️</button>
    </div>
</div>

<style>
    input[type="text"]{
        border: 1px solid black;
        padding: 5px;
        margin: 10px;
    }
    .hide{
        display:none;
    }
    .todo-item-div {
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        display:flex;
        flex-direction: row;
        align-items: center;
    }
    .button-div {
        display:flex;
        flex-direction: row;
        align-items: center;
        column-gap: 10px;
        margin-left:auto;
    }
</style>