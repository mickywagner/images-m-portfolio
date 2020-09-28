const pics = [
"https://lh3.googleusercontent.com/e9LLu6JCKUHoVcBJfN-PjO71xELNjbYR3fJZXk9t-Eu-jwjeV1Fe_FdjmMpMldhl42auHqdep3MF1bpa5HLFkjFCG2E8R5pMksHtENupFGL4cmKEcujpUcaPecFLoEcEkX73JSEO", 
"https://lh3.googleusercontent.com/h4mqmE0x24eGmPBA0qj_GUu7Bd6bYABnHZx58pGqE0SfxdatQho7o0YSi7_aZtbQh1m5vdvr_16f_NWDEmriBSYkgsPf4DRn5i3eGaRKNpGmufqG-iq1nQCBkHi2qyhz721-CXyU",
"https://lh3.googleusercontent.com/sa760sza6pdyY4a01O6PxKsEQ7RP5jDA8xGT-FlN3779ml4cmoX3VVi11Fqhoe5Zsxk_6LdD5bp40lqYubuN-4oDEE8O_FtY-tZyZ11DCEG7KuLx7-pa9B5Sz3J_gHIIC41-3UgX",
"https://lh3.googleusercontent.com/i8MSwEJI4QRoxvgb9YwzSzvgi5quLM2cTLuhy036Q6SOMzyqXJKo1LSEaFQgqjmuyF7vB6PE1jmy_8FAUwW--hLQ7OQJ1J4w6Dc7_tdcuMEDUkqKdaVs6iy7pxJnUmHZAubryIQf",
"https://lh3.googleusercontent.com/E_x-gjzLTmDEsKbzuWlnDAsfuhy3L8jl-GYujFiMwitcSdAxR68_qZ8yreTXUFJzaXQ6sx-tdDHGKuCKAi9ocdEJMBdhjS_kXc8yU_0CrXJL-mik4Sil8hw6u5AYmmFvnXPxCtuP",
"https://lh3.googleusercontent.com/4AWegyG94UhdcmY-bxQCvvX545ZE-89MfoXXO3nWy99_ozc90oIGVZTLlfGskYcUNg6NEVRnZyRPXlZDC6KBQwtkaaoFRTxQM0ManEwZUoG4mzUw5d1uWbDG43JovT4WbE-03LfE",
"https://lh3.googleusercontent.com/zD6WoRIwg6yMsJVJJdn3JAbcuzfI48pGoYxyYSbgGrMot51MpJcz7k0Ej3Auc7R0NYiQBycJ7YxUv4ifeSbPaq_cI1MR3YyafvgUw3XXXf_6Cdsy0zo0k2jzsH9bhm2dqQ2lVYi4",
"https://lh3.googleusercontent.com/bJ69XFnHrUX4uprXeJXHUOkQUHQOCo7G7lMAPC1DP4iMTxnD1J_vFL-RNUnLnKCqW7h5HSGj_n0IcLTAeU-9TZQFvfbMGjzx6-PSRr9EDLl1DCOmwyALjacXf1rakT7VUU2v-1_v",
"https://lh3.googleusercontent.com/7GMPe0XikzDVWXBvriOU_gcFhOsWw6XAywAg13KboSuRFbhL_mu4is1JmamUjfngmlGLgmfV74k1b2yvbr2jNunORzzlAJQZm9qmXbHxEhEqaAHwQ6vzcWfdrSWy3pplCOoNUaoMEA",
"https://lh3.googleusercontent.com/aztNyFvnzgn1tpJLDziVCaNCXT4vWjD-Yro7jCVAzAstte0MUQ89nOI3MwMFCVNJ811FYsbXkXcaQs-FllJRtAs42F8bot85nwWtm5bMd9lJ6OcIB5Ld2oxU6OTXkKCFVpSJtPALNA",
"https://lh3.googleusercontent.com/0Arl0O_yV-qp7Y4Ct1RMq3iebT249J4JFZJ_JErVpVRlpeQkd-ZTGOdZp58wSMX4KM-wuuCEEQkhNBemYw9c45osGCEPlkMBGQ7El1BvNT2kJ54fLq4dyVUj5Ho6ihY_DAFwbp2V-g",
"https://lh3.googleusercontent.com/DFNA5iCjek_yTkrkC_AlxSdFes5sEOpwKWtjAOnhNndOs71kXQeMrCgls_VPaiWR9BhdF6bp1rULyonpzAZnofoKj-HKZdmJUw7NcAjoQAuf_4Ux0LyJ7bMgrnJK8rpQbCYhB9FYwA",
"https://lh3.googleusercontent.com/LFbeUsHNF6zqd7gr4p8nPb3luPw2qjjVhgXUIi_im8ClyYCxe-PbyfWfZ9xcx0XvoeNPyUOiZdaeuMcWLctyL1gBDyflJYrq8wyMfzvDrI7qeC2nesvTNKgfIvtF7nZl631U_qrR-w",
"https://lh3.googleusercontent.com/ZeQaKe9sVX58rSu2aDwgYE_9HuxBXbZCJfIcca_GlPijJwfIj9nPIsyYYP3AZgrZ7gfFTF8Fxyj76sG4MftPPTieJ5FF7-zRvsmWezSg2bJ0i4aWWjieaa7ZJbLmhT4ORjeYCEvPsQ",
"https://lh3.googleusercontent.com/Y-bAX3Z5GaS0HOUbWtd-jgd1l9iHmUyawb8zU9Xvl8I2unAFZ3wd18M6odR_9Fpe4xD96phOCOCfisCNcG5vgw4_bO1DZ9HImJ1Yl1Jvxw1esZZt_oRBR7H5DRPDT0-gppv1ajOTQA",
"https://lh3.googleusercontent.com/QyVy7buqM1OCht_qHq7WiGQ_7VpoSi9C46mHI8-f1WMxUz_Z-dDTjDxOghhHoRQq9kZybZaqQrzjKoT4U2-jjDB73vohVbhMW6FcPPakxU8Iq6-ZYSjzIzKYX-pRRwbywh0vS5zcSA",
"https://lh3.googleusercontent.com/GQxeZ8hPnK2B8oYuVCwLOWr3W7dGgk8PxIQ0sreulNa2FqfI1cE-NHO42IQFctfATava5INplcY6OIEvz94XRmL_jvSSp_ylLhxw6g_F9dJDE8y6v1RseEp9RrxLNTTTvXwK9r_2bA",
"https://lh3.googleusercontent.com/pw/ACtC-3ejXJAUvEaOfaLW_bzS9DXmFLnQiT5-nk9bEc9-pDIx4TWmAvc-nfDRCwB_GkZKrVGlqX7aU8bHZpcyIt9TrVSki3wGUkRzDynvhUY1Li2r4Fv_yPIIMBwpd-JaE3oMJjXPP51psJsq4GxGX-Cfo8iQ=w2860-h1908-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3etI9BdNZRDdgtzdzqMSD8UQ94TDEVHqma4f6FAyTDVLFxCmlDKV0762XlAW73twgJEDIaXLexvYtBawA5NsTsdvBYTxWnDPPEhMmdW8gGuiquXWZ1dokR-YOOVzcW3tqd4maULt4WNdT2wyT4jOfvg=w2860-h1908-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3eH7d8k7ucU3Qc6Cbky1LcUzbZSGe9pwOOjKHEjG1ul9rP7G17a5WzgFui_ovaZ3mYdM086lGhk4warj0hSc--0Vxn7BSwGuuqlCK5tMzS6GH98NHOxj4_XY0LXqd9OcsS_FxFjJisYvrRhGVZW5PqJ=w2936-h1956-no?authuser=0"

]

function createJson(array) {
    let json = []
    for(i = 0; i < array.length; i++) {
       let data = {
           "id": i,
           "url": array[i]
       }
       json.push(data)
    }
    
    return json
    
}

let json = createJson(pics)
console.log(json)
