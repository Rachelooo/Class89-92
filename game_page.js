player_1= localStorage.getItem("player_1");
player_2= localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player1name").innerHTML= player_1 + " : ";
document.getElementById("player2name").innerHTML= player_2 + " : ";

document.getElementById("player1score").innerHTML= player1_score;
document.getElementById("player2score").innerHTML= player2_score;

document.getElementById("questionturn").innerHTML= "Question Turn - " + player_1;
document.getElementById("answerturn").innerHTML= "Answer Turn - " + player_2;

function send(){
    word= document.getElementById("word").value;
    lowercase=word.toLowerCase();
    console.log(lowercase);

    firstcharacter= lowercase.charAt(1);
    console.log(firstcharacter);

    wordlength= Math.floor(lowercase.length/2);
    secondcharacter= lowercase.charAt(wordlength);
    console.log(secondcharacter);

    subtract1= lowercase.length-1;
    thirdcharacter= lowercase.charAt(subtract1);
    console.log(thirdcharacter);

    replace1= lowercase.replace(firstcharacter, "_");
    replace2= replace1.replace(secondcharacter, "_");
    replace3= replace2.replace(thirdcharacter, "_");
    console.log(replace3);

    question= "<h4 id='worddisplay'> Q. " +replace3 +"</h4>";
    answer= "<br>Answer : <input type='text' id='answerbox'> ";
    checks="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question+answer+checks;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value= "";
}
    question_turn="player1";
    answer_turn="player2";

function check(){
answer_word=document.getElementById("answerbox").value;
lowercase_a=answer_word.toLowerCase();
console.log("answer in lowercase= " + lowercase_a);

if(lowercase_a==lowercase){
    if(answer_turn=="player1"){
        player1_score= player1_score+1;
        document.getElementById("player1score").innerHTML= player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("player2score").innerHTML= player2_score;
    }
}
if(question_turn=="player1"){
    question_turn="player2";
    document.getElementById("questionturn").innerHTML="Question turn - " + player_2;
}
else{
    question_turn="player1";
    document.getElementById("questionturn").innerHTML="Question turn - " + player_1;
}
if(answer_turn=="player1"){
    answer_turn="player2";
    document.getElementById("answerturn").innerHTML="Answer turn - " + player_2;
}
else{
    answer_turn="player1";
    document.getElementById("answerturn").innerHTML="Answer turn - " + player_1;
}
document.getElementById("output").innerHTML="";
}

