import Worker from './comp.worker.ts'

console.log('Starting worker...')
const worker = new Worker()

worker.onmessage = (event) => {
    console.log(`In main thread: ${event.data}`)
}

worker.postMessage('hello')
