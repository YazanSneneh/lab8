// take user name, age and fav color

var userInput = prompt('how many T-shirts do you want');
  userInput = parseInt(userInput);  // prompt produce string value so i parse it

// validate user input until he enter the correct answer
  while(isNaN(userInput)){  // isNan method check if value is a number or not
    userInput = prompt('how many T-shirts do you want');
}

// generate images
function userRequest(){
    var data = '';
    var i =0;
    
    // number of images based on user input
    for(i=0; i<userInput; i++){
       generateImage()
   }

// generate image
function generateImage(){
        data += ' <img class="user-order" src="https://i.pinimg.com/originals/67/de/e4/67dee4e83ce9365a1cbc4cdd225a655b.jpg" />'
  }
  return data;
}
