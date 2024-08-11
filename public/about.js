
let image1 = document.getElementById('image');
let images = ["images/business-updates.jpeg","images/360_F_269930086_KnndGBRPWEUMskiKh6qgE8h0Jmr2KxuU.jpg","images/download (3).jpeg",
             "images/360_F_575048001_uGEK19h2Gn7M2lB9jvp2DzbzvgI2O7rC.jpg","images/copy.jpg"];
setInterval(function(){
    let random = Math.floor(Math.random() * images.length);
    image1.src = images[random];
},800);


let image2 = document.getElementById('imaage');
let imaages = ["images/download (1).jpeg","images/design-team-header.png","images/il_fullxfull.4923641707_sjid.webp",
            "images/resin-banner-with-chair_2048x.webp","images/download (2).jpeg","images/downloadnew.jpeg","images/images (3).jpeg"];
setInterval(function(){
    let rando = Math.floor(Math.random() * imaages.length);
    image2.src = imaages[rando];
},1500);

let image3 = document.getElementById('imaaage');
let imaaages =["images/download.jpeg","images/girl-artist-black-gloves-pours-260nw-1955974402_copy.jpg","images/images (1).jpeg",
    "images/images (2).jpeg","images/images.jpeg","images/istockphoto-1392148077-612x612.jpg"];
setInterval(function(){
   let ran = Math.floor(Math.random()*imaaages.length);
   image3.src = imaaages[ran];
},1500);