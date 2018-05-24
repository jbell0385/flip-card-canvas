// Glossary Flip cards
$(".glossary-card-container").mouseover(function(){
    this.style.zIndex = "100";
})

$(".glossary-card-container").mouseout(function(){
    this.style.zIndex = "1";
})