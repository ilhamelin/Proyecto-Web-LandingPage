// setupTests.js
global.IntersectionObserver = class {
    constructor(callback, options) {
        this.callback = callback;
        this.options = options;
    }
    observe() {
        // puedes simular el comportamiento si es necesario
    }
    unobserve() { }
    disconnect() { }
};
