const pics = [
    {src: "https://lh3.googleusercontent.com/pw/ACtC-3cDCF2V5oRmegvKirmSQTs2F47kBoGWxEcZ7Ll0TLdofxENWkslxVgU0ydmVGmT-7nHKDGSm6FjGl0w6xRxutpPMhhb4Ktd1A9UPL9VJO0miSdqP1zHrvxd2fp1PQgqrGbOvH8W3A8DMeNKJK_MN7Qj=w2548-h1700-no?authuser=0", thumb: "https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/compressed_thumbnails/VeniceBeachSunset.jpeg"}
    
]

function createJson(array) {
    let json = []
    for(i = 0; i < array.length; i++) {
       let data = {
           "id": i,
           "src": array[i].src,
           "thumbnail": array[i].thumb,
           "thumbnailWidth": 500,
           "thumbnailHeight": 300
       }
       json.push(data)
    }
    
    console.log(json)
    return json
    
}

let json = createJson(pics)

// command shift P