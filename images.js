const pics = [
"https://lh3.googleusercontent.com/pw/ACtC-3ejXJAUvEaOfaLW_bzS9DXmFLnQiT5-nk9bEc9-pDIx4TWmAvc-nfDRCwB_GkZKrVGlqX7aU8bHZpcyIt9TrVSki3wGUkRzDynvhUY1Li2r4Fv_yPIIMBwpd-JaE3oMJjXPP51psJsq4GxGX-Cfo8iQ=w2860-h1908-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3dZDOwK_qJLzUq5CIOLLDKKjgiPiz0OQ9o3PnLMmoGAw8Hp_IS2PoUOwD63AjdfL5NUkbbH6qa_p28SACo7dQYo3G-TVAoMezp3sZjGSrFO9Ok0XrGfegjL3Ggw9jlNiHm_-fUMyZG9ovQZTIR_NIWA=w1304-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3e_bkY8wr1XiMQHobsiey6Z58J-VBhxMGP_Bhs_JM-jsubbxvxvGzGSCSgmQ5woeJBDjOk4HGHU3tCGDbuU9XFkXNKDU3ZdlHfndpULTQQyzPtoo0q0IErdRQKiTCxJTqwNUkIKLptGp6guET_RboUO=w1304-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3etI9BdNZRDdgtzdzqMSD8UQ94TDEVHqma4f6FAyTDVLFxCmlDKV0762XlAW73twgJEDIaXLexvYtBawA5NsTsdvBYTxWnDPPEhMmdW8gGuiquXWZ1dokR-YOOVzcW3tqd4maULt4WNdT2wyT4jOfvg=w2860-h1908-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3eH7d8k7ucU3Qc6Cbky1LcUzbZSGe9pwOOjKHEjG1ul9rP7G17a5WzgFui_ovaZ3mYdM086lGhk4warj0hSc--0Vxn7BSwGuuqlCK5tMzS6GH98NHOxj4_XY0LXqd9OcsS_FxFjJisYvrRhGVZW5PqJ=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3dViI0UUiuFSeE6SN_Soz_-5m00ctjIA2OXFuvj-DryKOGe8Jt3j4Nu5ZJKlmh62Gg7juWiw2hWehc0L7v9SM6FKaUXmADEENIPAl2ln5P-m-bbDUaeh3Of70D1U51okHYKS-grC4VS7J5pmOJokBkP=w2936-h1956-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3e7CzM2WCBS1fAY7GZOhN0nxUVCoeUVR-Gi9JPrfLw-HL7FDSWOW8HCDvrgBNF1R5RwcV6yJwxDHisjzeJBaMVSobJ-2h3zr9lP0XlFwhIyFrRhGfGp1IuOzBrAfbtCGYiKD2406GJVoYrdVvaSBD5l=w2140-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3fjsDMdgrRet1iUyGOM1i-7eeGpFTKTBZZJZDQHlCSSqcAHrQgD2yAFPfxGdyHM1LM19iJN6m27vZNBFFOMSJSMy-fiSoUuiVoLazYIf8zmM55PRYJ0VdXMVmj_gTKrtIORf3qw1uJBVcGrwfxo-c9i=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3cSWZbZKZAPqG_VlK1eD0EX8kQHM2xKOdD1VvxYOf6fxkBj4Av8BzwYCQKjn01QHG-iM002dCbH2g1_COMtsuWcOuJIwuYd04sB5lhB5E2lFke69da6ShKC2nOCgH57Xf2FocdBA3BrtZZHMiLYewga=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3fby9FqO4nzYhGq1N1wsTFner1Un4pQ6lrTFE-VaI8jcgxoLoz4Ep-i3Q9vK4kC07n_rcQhckej8BGWeNUmalujuQcbHGIB33e1I0JvSj4jVfdcSvfRmNmykqpjQqq2fdsPwPTSnV2RGvOU52LhPB6S=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3d4mTzDmbE3dEGrdPqBXQh5jg2dEUkYB5VjO3A3geM__v6LWbyvPdz6Xq6vXRkQCh86z6zHJjVvzFyt_tT0uxZvrShRefX5gqaktiMflS7UyXg-EUAbBeeSUiWW89ylidTNmJJOl6TxvTPS1v0vomWU=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3dE9IQ6yfIIxS1gdMNTOld9j-pppP7L67-g93IL5afG9J0ROD-cK7Ze-1T57qqAmoZ5y6qLIxsdil5HNeOzmKJtYHC-Z0C4rWIJB0N2acTfilbAaeI1VDw8oB1cyO2K1YRm2Vz0NgQdk5ezehxWvJfm=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3fKcn39u_Uqet478_ZVjnqjBwEWZQRHKfQKiNPR8KJEdTaXFRGkGypTL-Dq3X_JKX2gSob_zmvCZGiNdS97PgKhYZVgQe0tMQAeC9oDJF-sO2hfFEKi1GzW2gWY0Tq01xt131-poQHcIiFoiNVt140E=w2936-h1956-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3d53dkimhIFUUetR-iRYTNk8Dux5RphJCe2XSumyNUV0kF0ggjUe5e6jUORf2Rj6dTWU1rPcXZiTxDheauGg9AhIPNI5AeH9gbE8u7Wo5cyxwTn1BsJVrrF1XZnWvDJrxztoGsDKAjDiLAxG8ouNlqF=w2936-h1956-no?authuser=0",



"https://lh3.googleusercontent.com/pw/ACtC-3dD9As6rHBFOfWlHXZGfGb0oJ_VVGbvO0ElaU3sT_hkZvB0ysVLEXq8ml8We2SZwgDmZQD6j9OBi3Z-KHS3k9M3cb815M196Qly9Oo4qBjlzneKnHfMC8HVtiugfqiYZ06LH6qOEDCOnxnZiP3ie2pw=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3etI9BdNZRDdgtzdzqMSD8UQ94TDEVHqma4f6FAyTDVLFxCmlDKV0762XlAW73twgJEDIaXLexvYtBawA5NsTsdvBYTxWnDPPEhMmdW8gGuiquXWZ1dokR-YOOVzcW3tqd4maULt4WNdT2wyT4jOfvg=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3dYoSJKLfxXyIbJJ43QNGeNp5ScApRDWQvVMEnljfYy-6QOrILE_ilqhytMQ90Bkc5fWztfpPCmvPk5p6p_yM5w4-OMTKCsWSu6b3BiVndYWryw2b1f7Pben9dMXH8indjIl3Ke9e4-MhX3Lk4jhSPE=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3doA2xDRfZqBxM3JAFTg8YBlCzFVCicl8SjgTniJ0QqbYVsBIrrPLdE5mn8aiiO_tqCITlGfST8XhU97_qj0bh9-eYJWhJprWTJMQ4e_BTIzUuBgXGJLHBQ4lvMemsFGBAhzYmtnmu21qGJew_Yp-Xk=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3dhK-Ie07hCxAjygO_di0tqTg_72pidh-dk_cWyYm7TSlPRCUxhzfhazqW-byyiIVsyWdzHpKIxnHpE7ImibkB2RzF7rS16dBCuRU77l50ckFtVRLgmtVkLPPprCDWE0vQy5jEWIhIPxORCMqf39cxe=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3f9nDEO6UC_XNqTGhb1WvJJ16lAAfgAI3eE84wgk9prsRA9duhKNGReVb3BZUxGe3D4u_XkGj021X2AnQXiHiY8odFnzGmmfnCpa1nxs5rfA_OJek1e9hpQQK_y6VRj4opeEzFdREtNctrfGRb_1Xi3=w2936-h1956-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3csHzSDvjxDYo67xOKaRnOhxtSWhhUVT0Da67MFtthL_3Luk0FNcrr0xW-umxPehdanKQpnsbLXvk5n1F32nV47Ej_PMezUafb47U5tMaCNdtlEmqInOqTjeYzQpaz-Y0dBml53EvwQIi71inAvqZE3=w2934-h1958-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3egJodqPyx1ioheYTntgJoqqWqRW2duKbx2AKOhkXzsrmJFbkUsRKXJQiG7x3rpAdO8kQid5FN4_Wtw8bACUHUQO8nsqWjfR6kRC-Ox0nlsdsNlSKugsFxa5Bs3eEFeITI5enRqTeiWMfibevYkesNQ=w2936-h1956-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3d14Vmix2DE20J9JksaJPqH4NyAq_sX9NSlz5cMPHanfHI5VLQxcqvR8bVezGhXrx48v8muqfUnFOSObIjNMP__uJhnma0zvqPOeKOIV1dBAbl71pPACOn0yGU3YZQFS3JGXyzTpgr9MqpDC4ahOe7q=w2936-h1956-no?authuser=0",
"https://lh3.googleusercontent.com/pw/ACtC-3de7RsyMoa_-a50e1ZeNqlbEYDHh_qIsnYnSqBBP0XvgE_WM-KFzPPAj0dO_kqqI7f1dXLv9QydNv2b80f-P9TUW2dXuyr7Cb00xT9vZn7a38Q5rLO-udvidlNCgF6qxWqvM7Rbgc3Kw3aZ5-FUDojm=w2936-h1956-no?authuser=0",

"https://lh3.googleusercontent.com/pw/ACtC-3fMGMqpiOarya38ivBtYzxhqEhBjSQJAAoMJef4-DT2WNgSOqaAYjt0xXnYi4hUP6SyJ6y23e4zuyDPJbjsf6Yz0L7tf6V7-z3ZCyHgLp31hhPittnnlQpJRF4Ei8gn0jKvWeLQt9rU4wzp7d8cD1_7=w2936-h1956-no?authuser=0",


"https://lh3.googleusercontent.com/pw/ACtC-3ecjYUgVtwfP68i4j3bhuZE6XXpOgk44zLLZDRHgB0-zl7UOTLLL0tUyu3E4lO-0P2ZmUKYSYTortJw4Ed3xY7OC8gJFicFlZA5JAhGGQ4zWzq9JeP_YoKxnMkb8biKPz84H3DEU3qvXpcF9_ydlX4K=w2936-h1956-no?authuser=0",

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
