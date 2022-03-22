var h1 = document.querySelector("h1");
var buttonsLength = document.querySelectorAll(".my-button").length;
//button add lister 
for(let x=0; x<buttonsLength; x++){
    document.querySelectorAll(".my-button")[x].addEventListener("click", function(){
        //h1.innerHTML = this.innerHTML + " is clicked";
        var text = this.innerHTML;
		audioplay(text);
        playAnimation(text);
        

      
    });
    
}
function audioplay(text)
{
	  switch(text)
        {
            case "a":
            {
                var audio = new Audio('sound/clip_1.mp3');
                 audio.play();
                 break;

            }
                
            case "b":
            {
                var audio = new Audio('sound/clip_2.mp3');
                audio.play();
                break;

            }
                
            case "c":
            {
                var audio = new Audio('sound/clip_3.mp3');
                audio.play();
                break;
    
            }
                
        }
	
}

function playAnimation(text)
{
   var selectedButton= document.querySelector("."+text);
   //animation add 
   selectedButton.classList.add('anim');
   //remove animation
   setTimeout(function()
   {
    selectedButton.classList.remove("anim"); 

   },1000);
   

}

