export function resultToBlobUrl(result) {
    const base64 = 'data:' + result.mimeType + ';base64,' + result.fileByte
    const arr = base64.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    let bstr = atob(arr[1]);
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], {type: mime})
    return URL.createObjectURL(blob)

}

export function createDownloadFile(url,fileName) {
    const el = document.createElement('a');
    el.style.display = 'none';
    el.setAttribute('target', '_blank');
    el.setAttribute('download', fileName);
    el.href = url;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
}