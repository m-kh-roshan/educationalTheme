const prices = document.querySelectorAll(".price")
prices.forEach(price=>{
    let arrPrice = []
    let threeNum = ''
    let strPrice = String(price.innerHTML).split('').reverse().join('')
    for (let i = 0; i < strPrice.length; i++) {
        threeNum += strPrice[i]
        if (threeNum.length >= 3) {
            arrPrice.push(threeNum.split('').reverse().join(''))
            threeNum = ''
        }
    }
    if (threeNum) {
        arrPrice.push(threeNum.split('').reverse().join(''))
    }
    price.innerHTML = arrPrice.reverse().join(",") + ' تومان '
})