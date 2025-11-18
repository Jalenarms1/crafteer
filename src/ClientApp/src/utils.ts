export const handleDownload = async (url: string) => {
    const a = document.createElement("a")
    const f = await fetch(url)
    const blob = await f.blob()

    const urlObj = URL.createObjectURL(blob)

    a.href = urlObj
    a.download = "img.png"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

  }