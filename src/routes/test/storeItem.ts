import { writable } from "svelte/store";
import { readable } from "svelte/store";
import { tweened, spring} from "svelte/motion";
// counting store
export const count = writable(0);
// readable that initial is 0 and every 1 second it will +1
export const interval = readable(0, (set) => {
    let i = 0;
    const interval = setInterval(() => {
        set(i++);
    }, 1000);
    return () => clearInterval(interval);
    }
);

export let toDoItems = writable([
    {
        id: crypto.randomUUID(),
        title: "Learn Svelte",
        done: false,
    },
    {
        id: crypto.randomUUID(),
        title: "Learn SvelteKit",
        done: false,
    }]);

export let tweenTest = tweened(0, {
    duration: 1000,
});

export let springy = spring(0, {
    stiffness: 0.4,
    damping: 0.3,
});