
let doorEls = document.querySelectorAll(`.door`)

for(let i=0; i<doorEls.length; i++){
    doorEls[i].addEventListener("click", chooseDoor)
}


function chooseDoor(e) {
    if (e.target.id == "door1") {
        console.log("You clicked door nr. 1");
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
    } 
    
    else if (e.target.id == "door2") {
        console.log("You clicked door nr. 2");
        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg"
    } 
    
    else {
        console.log("You clicked door nr. 3");
        e.target.src = "https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:"
    }
  }