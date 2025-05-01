onmessage = (event) => {
    Promise.withResolvers()
    console.log(`Worker says ${event.data}`)
}

postMessage('hello')
