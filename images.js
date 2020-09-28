const pics = [
    "https://lh3.googleusercontent.com/pw/ACtC-3crkd5DkAdOT4w4nF371G0LWq5jgq-FnVFdZsTm3x_9fvihPAeWmhdqBN90T1z4gf0pv0FdSC6Qlg0NE0MWKtOHre9GWbS-lmo7FvVohR20j9poWs5Ihe2mdpKIKeqPMSTampM5cidKzQhkhL8DO1sO=w2548-h1700-no?authuser=0",

]

function createJson(array) {
    let json = []
    for(i = 0; i < array.length; i++) {
       let data = {
           "id": i,
           "src": array[i],
           "thumbnail": array [i],
           "thumbnailWidth": 400,
           "thumbnailHeight": 300
       }
       json.push(data)
    }
    
    return json
    
}

let json = createJson(pics)
console.log(json)
