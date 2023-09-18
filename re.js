vv 

Object.defineProperty(globalThis, "a", {
    enumerable: true,
    configurable: true,
    get() {
        return 1
    },
    set(f) {
        this
    }
})

console.log(a)