async function askServer() {
    const response = await fetch('https://node-4248-kw2uayr2z-nealbeeken-mongodbcom.vercel.app/api/hello')
    const decoded = await response.json()
    console.dir(decoded)
}
