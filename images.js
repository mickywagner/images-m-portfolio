const pics = ["https://lh3.googleusercontent.com/e9LLu6JCKUHoVcBJfN-PjO71xELNjbYR3fJZXk9t-Eu-jwjeV1Fe_FdjmMpMldhl42auHqdep3MF1bpa5HLFkjFCG2E8R5pMksHtENupFGL4cmKEcujpUcaPecFLoEcEkX73JSEO", 
"https://lh3.googleusercontent.com/h4mqmE0x24eGmPBA0qj_GUu7Bd6bYABnHZx58pGqE0SfxdatQho7o0YSi7_aZtbQh1m5vdvr_16f_NWDEmriBSYkgsPf4DRn5i3eGaRKNpGmufqG-iq1nQCBkHi2qyhz721-CXyU",
"https://lh3.googleusercontent.com/sa760sza6pdyY4a01O6PxKsEQ7RP5jDA8xGT-FlN3779ml4cmoX3VVi11Fqhoe5Zsxk_6LdD5bp40lqYubuN-4oDEE8O_FtY-tZyZ11DCEG7KuLx7-pa9B5Sz3J_gHIIC41-3UgX",
"https://lh3.googleusercontent.com/i8MSwEJI4QRoxvgb9YwzSzvgi5quLM2cTLuhy036Q6SOMzyqXJKo1LSEaFQgqjmuyF7vB6PE1jmy_8FAUwW--hLQ7OQJ1J4w6Dc7_tdcuMEDUkqKdaVs6iy7pxJnUmHZAubryIQf",
"https://lh3.googleusercontent.com/E_x-gjzLTmDEsKbzuWlnDAsfuhy3L8jl-GYujFiMwitcSdAxR68_qZ8yreTXUFJzaXQ6sx-tdDHGKuCKAi9ocdEJMBdhjS_kXc8yU_0CrXJL-mik4Sil8hw6u5AYmmFvnXPxCtuP",
"https://lh3.googleusercontent.com/4AWegyG94UhdcmY-bxQCvvX545ZE-89MfoXXO3nWy99_ozc90oIGVZTLlfGskYcUNg6NEVRnZyRPXlZDC6KBQwtkaaoFRTxQM0ManEwZUoG4mzUw5d1uWbDG43JovT4WbE-03LfE",
"https://lh3.googleusercontent.com/zD6WoRIwg6yMsJVJJdn3JAbcuzfI48pGoYxyYSbgGrMot51MpJcz7k0Ej3Auc7R0NYiQBycJ7YxUv4ifeSbPaq_cI1MR3YyafvgUw3XXXf_6Cdsy0zo0k2jzsH9bhm2dqQ2lVYi4",
"https://lh3.googleusercontent.com/bJ69XFnHrUX4uprXeJXHUOkQUHQOCo7G7lMAPC1DP4iMTxnD1J_vFL-RNUnLnKCqW7h5HSGj_n0IcLTAeU-9TZQFvfbMGjzx6-PSRr9EDLl1DCOmwyALjacXf1rakT7VUU2v-1_v",

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

createJson(pics)
