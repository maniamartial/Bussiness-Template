const Submitquerry=document.querySelector(".querry");
const Textarea=document.querySelector(".textarea");
const Canine=document.querySelector(".can");
const Textms=document.querySelector(".text")

Submitquerry.addEventListener('click',PopThis);
document.addEventListener("ContentLoader",getMola);

function PopThis(event){
    event.preventDefault();

    const  Mola=document.createElement('div');
    Mola.classList.add("Moladiv");

    const Premolar=document.createElement('li');
    Premolar.innerText=Textarea.value;
    Premolar.classList.add("Premolar");
    Mola.appendChild(Premolar);
saveLocalText(Textarea.value);
    Canine.appendChild(Mola);
    Textarea.value="";
}
//Saving data into local storage
function saveLocalText(motiv){
   let text;
   if(localStorage.getItem("Item") == null){
       text=[];
   }
   else{
       text=JSON.parse(localStorage.getItem("Item"));
   }
   text.push(motiv);
   localStorage.setItem("Item",JSON.stringify(text));
}
function getMola(motiv){
    let text;
    if(localStorage.getItem("Item")==null){
        text=[];
    }
    else{
        JSON.parse(localStorage.getItem("Item"))
    }
    text.push(motiv);
    localStorage.setItems(JSON.stringify(text));
}
text.forEach(function(){
    const  Mola=document.createElement('div');
    Mola.classList.add("Moladiv");

    const Premolar=document.createElement('li');
    Premolar.innerText=Textarea.value;
    Premolar.classList.add("Premolar");
    Mola.appendChild(Premolar);
  Canine.appendChild(Mola);
    
})