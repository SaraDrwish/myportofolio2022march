let section = document.querySelector(".count");
let spans = document.querySelectorAll(".progress span");
let span = document.querySelector(".up");

window.onscroll = function(){

    if(this.scrollY >= 500){
        span.classList.add("show");
    }
    else{
        span.classList.remove("show")
    }

// ----------------------------------------------------------


    if(window.scrollY >= section.offsetTop - 222 ){
        // spans.forEach( (span) => {
        //     span.style.width = span.dataset.width;
        //   })
        spans.forEach(function(span) 
        {
            span.style.width = span.dataset.width;
        }
        
        );  //end foreach
    }


// ----------------------------------------------------------


}


span.onclick = function(){
 
   window.scrollTo({
       top:0 , 
       behavior: "smooth",
   });

};

// ---------------------------------------------------------

// -----------------start loadig ---------------------------

let filterBtn = document.querySelectorAll(".filterBtn li");
let items = document.querySelectorAll(".containerItems .items");

function load(){
    let loader = document.querySelector(".laoder");
    loader.classList.add("fadOut");
}

function fade(){
    setInterval(load , 3000);
}
fade()


// -----------------------end loading ----------------------