console.log("Hello Earth ")
var name = "Earth"
console.log(name)
var age = (4+2*2/2*2+4+1-5+19)+91
alert(age)

var x = 20
{
    var x = 100
    let y = 15
}
console.log(x)

let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
if(lotto_number == random_number){
    document.getElementById("result").innerHTML = "คุณถูกรางวัล จ้ะ"
    
}
else{
    document.getElementById("result").innerHTML = "Sory จ้ะ"
}

