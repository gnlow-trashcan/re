Object.defineProperty(globalThis, "a", {
    enumerable: true,
    configurable: true,
    get() {
        return this[`_${"a"}`]()
    },
    set(f) {
        this[`_${"a"}`] = f
    }
})

const b = 2
a = () => b * 2
console.log(a)