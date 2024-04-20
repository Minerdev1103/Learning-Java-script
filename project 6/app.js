let round = prompt("คุณจะเล่นทั้งหมดกี่รอบ ?")
let sum = ""
for(var i=0 ; i <round ; i++){
    var answer = prompt("หัว หรือ ก้อย พิมพ์มาเลย")
    var random_answer = ""
    sum = sum + answer
    document.getElementById("game-list").innerHTML += 
    "ทายครั้งที่"+ i +":" +random_answer + "<br>"
    
    if(Math.floor(Math.random() *10) <= 4 ){
        //หัว
        random_answer = "หัว"
      
    }
    else{
        //ก้อย
        random_answer = "ก้อย"
        
    }

    if(answer == random_answer){
        alert("คุณตอบถูกยินดีด้วย !!!")
    
    }
    else{
        alert("คุณตอบผิด เสียใจด้วย !!!")
    }
    console.log(random_answer+" : " + answer)
    
}
document.getElementById("game-list").innerHTML = "ทายถูก" + sum + "ข้อ"