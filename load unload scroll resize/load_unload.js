//Load Event in case html use Load==>inload
window.addEventListener('load',function(){
    console.log("Load");
    this.document.write("Load");
});

//UnLoad Event 
window.addEventListener('unload',function(){
    console.log("Unload");
    this.document.write("Unload ! ");
});