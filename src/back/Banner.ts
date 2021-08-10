export interface Banner {
    url : string,
    domains : string[]
}

export function fetchBanner(banner : Banner, fn : (response : any) => void) {
    promiseBanner(banner).then(fn)
}

export function promiseBanner(buffer : Banner) : Promise<any> {
    return fetch('https://doats.ml:8080/add', {
        method : "POST",
        headers : {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-type": "application/json"
        },
        body : JSON.stringify({
            url : buffer.url,
            domains : buffer.domains
        })
    })
}

export function sendSyncBannerImage(image : ArrayBuffer, type : string, id : string) : any {
    var request = new XMLHttpRequest()
    request.open("POST", `https://doats.ml:8080/add/image?id=${id}`, false)
    request.setRequestHeader("Access-Control-Allow-Origin", "*")
    request.setRequestHeader("Accept", "application/json")
    request.setRequestHeader("Content-type", `image/${type}`)
    request.send(image)
    return request.response
}