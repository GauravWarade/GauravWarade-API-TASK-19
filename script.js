
function showInput() {
    let name1 = document.getElementById("name").value;
     console.log(name1);
     fetch (`https://api.agify.io/?name=${name1}`)
     .then(res => res.json())
     .then(displaydata => {console.log(displaydata.age)  
    createDisplay (displaydata);
    })
}
    function createDisplay (displaydata){
        console.log(displaydata.age);
        const display = displaydata;
        const dispalyElementDiv = document.getElementById("display_container");
        const displayage =  "Your Age is : " + display.age;
        const heading = document.createElement("h1");
        heading.innerHTML=displayage;
        dispalyElementDiv.appendChild(heading);
        //Reset Button
    //     let btn = document.createElement("button");
    //    btn.className +='inputs';
    //     btn.innerHTML = "Reset";
    //     btn.onclick = function () {
    //     window.location.reload();};
    //     document.body.appendChild(btn);
    }   


    
     
