// public/worker.js


self.onmessage = function(event) {
    console.log(event.data.number)
let result  = 0
        for (let i = 0; i <  1000000000; i++) {
            // debugger
            result += i;
        }
        self.postMessage(result)
};
