import { writable } from "svelte/store";
import { readable } from "svelte/store";

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
