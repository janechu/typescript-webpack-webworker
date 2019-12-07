let webWorker: Worker | void = undefined;

webWorker = new Worker("web-worker.js");

webWorker.onmessage = (event: MessageEvent): void => {
    console.log("message recieved:", event.data);
}

webWorker.postMessage("message sent: Hello World");