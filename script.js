console.log("Hii");

async function showInput (){
try {
     await fetch('https://api.quotable.io/random')
   .then(res => res.json())
   .then(data => {
console.log(data.content);
console.log(data.author);
document.getElementById("quote").innerHTML= data.content;
document.getElementById("author").innerHTML= '~ ' + data.author;
})
   console.log("Resolved");
   
   
}catch (error){
    console.log('Fetch error: ', error);
    console.log("Rejected");
}
}
window.onload = function() {
    showInput();
    document.getElementById("generate").addEventListener('click', showInput);
}

