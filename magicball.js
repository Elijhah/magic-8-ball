
let quotes = ['Abandon your fear. Turn and face him. Don\'t back an inch','Retreat and you will age. Hesitate and you will die', 'Though you fight a fierce battle on the outside, your inner world trembles not the slightest','When your heart is in chaos, this sky becomes clouded. When you are sad, rain falls so terribly easy', 'Abandon your fear. Look forward. Move forward and never stop', 'The enemy is one, you are one. What is there to fear?','To fight..Or to live..Choose', 'Be afraid and you will die'];
var answer = document.getElementById("answer");
var question = document.getElementById("yo");


     





function Quote() {
    if (question.value == "") {
    answer.innerText = "You have not asked a question."
}else{
    god();
}
function changeImage() {
    var image = document.getElementById("");
    if (image.src.match("bulbon")) {
      image.src = "https://cdn.discordapp.com/attachments/898333320688074824/917827782820642826/maxresdefaultedited.png";
    } else {
      image.src = "zangetsu.jpeg";
      }



}

function god() {
const randomNumber = Math.floor(Math.random() *8);

switch(randomNumber){
    case 0:
        console.log('0')
        answer.innerText = quotes[0];
        break;
    case 1:
        console.log('1')
        answer.innerText = quotes[1]
        break;
    case 2:
        console.log('2')
        answer.innerText = quotes[2]
        break;
    case 3:
        console.log('3')
        answer.innerText = quotes[3] 
        break;
    case 4:
        console.log('4')
        answer.innerText = quotes[4]
        break;
    case 5:
        console.log('5')
        answer.innerText = quotes[5]
    case 6:
        console.log('6')
        answer.innerText = quotes[6]
        break
    case 7:
        console.log('7')        
        answer.innerText = quotes[6]
        break
    case 8:
        console.log('8')
        answer.innerText = quotes[6]
        break

}
}
