console.log('From worker: started')

onmessage = (event) => {
    //@ts-ignore
    Promise.withResolvers()
    console.log(`Worker says ${event.data}`)
}

postMessage('hello')
