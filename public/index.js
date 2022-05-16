async function askServer() {
    const response = await fetch('//api/hello')
    const decoded = await response.json()
    console.dir(decoded)
}
