const worker = new Worker(new URL('./comp.worker.ts', import.meta.url))

worker.onmessage = (event) => {
    console.log(`In main thread: ${event.data}`)
}

worker.postMessage('hello')
