const pics = [
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3cDCF2V5oRmegvKirmSQTs2F47kBoGWxEcZ7Ll0TLdofxENWkslxVgU0ydmVGmT-7nHKDGSm6FjGl0w6xRxutpPMhhb4Ktd1A9UPL9VJO0miSdqP1zHrvxd2fp1PQgqrGbOvH8W3A8DMeNKJK_MN7Qj=w2548-h1700-no?authuser=0",
    thumb:
      "https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/compressed_thumbnails/VeniceBeachSunset.jpeg",
  },
  {
    src:
      "https://lh3.googleusercontent.com/pw/ACtC-3dysnGT9FFVp4OABvLbyCe9n25l3V9fdDQzb9V6r7ksZXsHuWPywYnQMGAv12tdkeO7WedAAsg_rU6eULG1DfXn6TS_WPcAJ7nbr_C0QHuSRgSmr_548FqvzFmaTEW15koFmmJv417QLENDgw9B6cXc=w2548-h1648-no?authuser=0",
    thumb:
      "https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/compressed_thumbnails/IMG_0354.jpeg",
  },
];

function createJson(array) {
  let json = [];
  for (i = 0; i < array.length; i++) {
    let data = {
      id: i,
      src: array[i].src,
      thumbnail: array[i].thumb,
      thumbnailWidth: 500,
      thumbnailHeight: 300,
    };
    json.push(data);
  }

  console.log(json);
  return json;
}

let json = createJson(pics);

// command shift P

// https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/compressed_thumbnails/VeniceBeachSunset.jpeg

function getGihubLink(array) {
  const links = [];
  for (i = 0; i <= array.length; i++) {
    links.push(
      `"https://raw.githubusercontent.com/mickywagner/images-m-portfolio/master/compressed_thumbnails/${array[i]}"`
    );
  }
  return links;
}

// const compressed = [
//   "IMG_0354.jpeg",
//   "IMG_4122.jpeg,",
//   "IMG_8079.jpeg",
//   "IMG_0537.jpeg",
//   "IMG_4189.jpeg,",
//   "IMG_8223.jpeg",
//   "IMG_0572.jpeg",
//   "IMG_4196.jpeg,",
//   "IMG_8486.jpeg",
//   "IMG_0826.jpeg",
//   "IMG_4482.jpeg,",
//   "IMG_8599.jpeg",
//   "IMG_0868.jpeg",
//   "IMG_4510.jpeg,",
//   "IMG_8839.jpeg",
//   "IMG_0949.jpeg",
//   "IMG_4529.jpeg,",
//   "IMG_8848.jpeg",
//   "IMG_1223-Edit.gif",
//   "IMG_4592.jpeg,",
//   "IMG_8933.jpeg",
//   "IMG_1228.jpeg",
//   "IMG_4605.jpeg,",
//   "IMG_9002.jpeg",
//   "IMG_1277.jpeg",
//   "IMG_4892.jpeg,",
//   "IMG_9406.jpeg",
//   "IMG_2331.jpeg",
//   "IMG_4983-Edit.jpeg",
//   "IMG_9415.jpeg",
//   "IMG_2610.jpeg",
//   "IMG_5777.jpeg",
//   "IMG_9536.jpeg",
//   "IMG_2662.jpeg",
//   "IMG_5820.jpeg",
//   "IMG_9549.jpeg",
//   "IMG_3155.jpeg",
//   "IMG_5862.jpeg",
//   "IMG_9622.jpeg",
//   "IMG_3176.jpeg",
//   "IMG_5888.jpeg",
//   "IMG_9644.jpeg",
//   "IMG_3253.jpeg",
//   "IMG_5944.jpeg",
//   "IMG_9673.jpeg",
//   "IMG_3299.jpeg",
//   "IMG_6001.jpeg",
//   "IMG_9690.jpeg",
//   "IMG_3304.jpeg",
//   "IMG_6014.jpeg",
//   "IMG_9696.jpeg",
//   "IMG_3352.jpeg",
//   "IMG_6100.jpeg",
//   "IMG_9708.jpeg",
//   "IMG_3367.jpeg",
//   "IMG_6163.jpeg",
//   "IMG_9788.jpeg",
//   "IMG_3380.jpeg",
//   "IMG_6359.jpeg",
//   "IMG_9792.jpeg",
//   "IMG_3402.jpeg",
//   "IMG_6411.jpeg",
//   "IMG_9804.jpeg",
//   "IMG_3468.jpeg",
//   "IMG_6515.jpeg",
//   "IMG_9809.jpeg",
//   "IMG_3477.jpeg",
//   "IMG_6531.jpeg",
//   "IMG_9830.jpeg",
//   "IMG_3716.jpeg",
//   "IMG_6895-2.jpeg",
//   "IMG_9887.jpeg",
//   "IMG_3879.jpeg",
//   "IMG_6909.jpeg",
//   "IMG_9906.jpeg",
//   "IMG_3919.jpeg",
//   "IMG_6938.jpeg",
//   "IMG_9982.jpeg",
//   "IMG_3977.jpeg",
//   "IMG_7045.jpeg",
//   "VeniceBeachSunset.jpeg",
//   "IMG_4012.jpeg",
//   "IMG_7409.jpeg",
//   "tempImagehgNwy4.jpeg",
//   "IMG_4047.jpeg",
//   "IMG_7492.jpeg",
//   "tempImageqPxhQz.jpeg",
//   "IMG_4063.jpeg",
//   "IMG_7530.jpeg",
//   "IMG_4105.jpeg",
//   "IMG_8033.jpeg",
// ];

// const links = getGihubLink(compressed)
// console.log(links)
