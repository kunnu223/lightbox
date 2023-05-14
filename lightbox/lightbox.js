//function to include html popup code


function includepophtml(){
    let html = '<div id="pop_up"><span id="cross" onclick = "closeimg()"><img id="cross_img" src="lightbox/images/cross.png"></span><img id="left" src="lightbox/images/left.png"><img id="main_img" src="images/krishna.jpg"><img id="right" src="lightbox/images/right.png"></div>';

    let popdiv = document.createElement("div");
    popdiv.innerHTML = html;
    document.body.insertBefore(popdiv,document.body.firstChild);

}

//function to init plugin 
let img ;
var current ;

function imageplugin(target)

{   //select all images with class name
    img = document.getElementsByClassName(target);

    // add event listener on all selected images
    for (let i = 0; i < img.length; i++) {
       img[i].style.cursor='pointer';

       //add eventlistner 
       img[i].addEventListener("click" , function(){
         document.getElementById("main_img").src = this.src;
         document.getElementById("pop_up").style.display = 'block';
         checkarrow();
       })
        
    }
    includepophtml();

    // left button

    document.getElementById("left").addEventListener( "click" , function(){
        prev_image();
    })
    
    // right button
    document.getElementById("right").addEventListener( "click" , function(){
        next_image();
    })
}


//close buttton 
 
function closeimg()
{
    document.getElementById("main_img").src = "";
    document.getElementById("pop_up").style.display = 'none';
}

 // previous image 

function prev_image ()
{ 
    getcurrent();
    current--;
    document.getElementById("main_img").src = img[current].src;   
    checkarrow ();

}

 // next  image 

 function next_image ()
 {  
    getcurrent();
    current++;
    document.getElementById("main_img").src = img[current].src;
    checkarrow ();
 }



function getcurrent (){
    for(var i = 0 ; i < img.length ; i++)
    {
         if(img[i].src == document.getElementById("main_img").src)
         {
            current=i;
         }
    }
}

// check arrow 

function checkarrow ()
{   
    getcurrent();
    if (current == "0") {
        
        document.getElementById("left").style.display = 'none';
        document.getElementById("right").style.display = 'block';
   }
    else if(current == img.length -1)
   {
    document.getElementById("right").style.display = 'none';
    document.getElementById("left").style.display = 'block';
   }
   else{
    document.getElementById("right").style.display = 'block';
    document.getElementById("left").style.display = 'block';
   }

}

