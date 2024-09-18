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

const outLine = document.querySelector(".outline")
const lis = outLine.querySelectorAll("li")
outLine.getAttribute
lis.forEach(li=>{
    li.addEventListener("click", ()=>{
        const id = li.getAttribute("data-for")
        const active = document.getElementById(id)
        for (let i = 0; i < lis.length; i++) {
            const id = lis[i].getAttribute("data-for")
            document.getElementById(id).style.display = "none"
            lis[i].style.color = "black"
        }
        active.style.display = "block"
        li.style.color = "green"
    })    
})



