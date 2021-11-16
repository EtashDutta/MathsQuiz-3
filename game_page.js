p1_name=localStorage.getItem("p1")
p2_name=localStorage.getItem("p2")

p1_score=0;
p2_score=0;

document.getElementById("player1_name").innerHTML=p1_name+" : "
document.getElementById("player2_name").innerHTML=p2_name+" : "

document.getElementById("player1_score").innerHTML=p1_score
document.getElementById("player2_score").innerHTML=p2_score

document.getElementById("player_question").innerHTML="Question Turn - "+p1_name
document.getElementById("player_answer").innerHTML="Answer Turn - "+p2_name

function send(){
   getn1=document.getElementById("n1").value
   getn2=document.getElementById("n2").value
     
    console.log(getn1,getn2)
    actual_answer= parseInt(getn1) * parseInt(getn2);

    question_number="<h4>" + getn1+" X " + getn2 + "</h4>";
    input_box="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_number + input_box + check_button;

    document.getElementById("output").innerHTML=row;

    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}