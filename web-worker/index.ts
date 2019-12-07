/// <reference lib="webworker" />

const registeredComponents: object = {};

onmessage = function(e: MessageEvent): void {
    console.log(e.data);

    postMessage("Web worker acknowledges message received");
}
