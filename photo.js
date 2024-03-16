/////  control element 
let saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let Brightness = document.getElementById('Brightness');
let Sepia = document.getElementById('Sepia');
let Grayscale = document.getElementById('Grayscale');
let blur = document.getElementById('blur');
let Upload = document.getElementById('Upload');
let download = document.getElementById('download');
let img = document.getElementById('img');
let Reset = document.querySelector('span');
let imgbox = document.querySelector('.img-box');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')
/// delete element 
// console.log(img);
// Delete filters 
function Resrtvalue(){
      img.style.filter = 'none';
      saturate.value = '100';
      contrast.value = '100';
      Brightness.value = '100';
      Sepia.value = '0';
      Grayscale.value ='0';
      blur.value ='0';
}
//////////////////////////////////////////////////
window.onload= function(){
    download.style.display = 'none';
    Reset.style.display = 'none';
    imgbox.style.display='none';
}

 // Read image
Upload.onchange = function (){
      Resrtvalue();
            download.style.display = 'block';
            Reset.style.display = 'block';
            imgbox.style.display='block';
            let file = new FileReader();
            file.readAsDataURL(Upload.files[0]);
            file.onload= function() {
            img.src = file.result;
   }
img.onload = function (){
            canvas.width= img.width;
            canvas.height = img.height;
            ctx.drawImage(img , 0 ,0 ,  canvas.width ,canvas.height );
            img.style.display = 'none';
      }
}   

// Edit 
 let filtters =  document.querySelectorAll('ul li input');
     filtters.forEach( filter =>{
         filter.addEventListener("input" , function (){
          ctx.filter = `
               saturate(${saturate.value}%)
               contrast(${contrast.value}%)
               Brightness(${Brightness.value}%)
               Sepia(${Sepia.value}%)
               Grayscale(${Grayscale.value})
               blur(${blur.value}px) ` 
           ctx.drawImage(img,0,0 ,  canvas.width ,canvas.height );
    });
 });

      download.onclick = function (){
      download.href = canvas.toDataURL();
      }
