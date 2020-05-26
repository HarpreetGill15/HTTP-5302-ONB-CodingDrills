//check dog treats
function checkDog() {
  // set small treats to user input
  var sm = document.getElementById("smallT").value;
  // set medium treats to user input
  var md = document.getElementById("mediumT").value;
  // set big treats to user input
  var bg = document.getElementById("bigT").value;

  //get output box
  let output = document.getElementById("output");

  //declare the points for each type of treat
  const s = 1;
  const m = 2;
  const b = 3;

  // Get total happiness
  let total = sm * s + md * m + bg * b;

  // logic to calculate the amount of happiness if happiness is 10 or grater doggy is happy else it is sad
  if (total <= 10) {
    output.innerHTML = "Barley is sad";
  } else {
    output.innerHTML = "Barley is happy";
  }
}
//get emotion
function checkEmotion() {
  //get user input 
  var text = document.getElementById("txtMessage").value;

  //get output box
  let output = document.getElementById("output1");

  //search for the :) emotion in the user input
  var smily = text.match(/[:\-\)]{3}/g);
  //search for the :( emotion in the user input
  var sadly = text.match(/[:\-\(]{3}/g);

  //variables to hold the length of the arrays above
  var happy, sad;

  //check if the smily array is empty
  if(smily == null){
    happy = 0;
  }
  else{
    happy = smily.length;
  }
  //check if the sadly array is empty
  if(sadly == null){
    sad = 0;
  }
  else{
    sad = sadly.length;
  }
  
  //tell the user thier emotions
  //if there are more happy emojies then sad emojies they are happy
  if(happy > sad){
    output.innerHTML = "You are happy";
  }
  //if there are more sad emojies then happy emojies they are sad
  else if(happy < sad){
    output.innerHTML = "You are sad";
  }
  //if there are no emojies then they dont have any emotions
  else if (happy == 0 && sad == 0){
    output.innerHTML = "You have no emotions";
  }
  //if both are equal then they are unsure
  else if(happy == sad){
    output.innerHTML = "You are unsure";
  }
  
}
//translate the word into pig latin
function test() {
  //get user input 
  var word = document.getElementById("txtMessage1").value;

  //get output box
  let output = document.getElementById("output2");

  //array of the constants in the alpahbet
  var alpahbet = [ "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p",
  "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  //array of vowels
  var vowels = ["a","e","i","o","u"];

  //split inputed text into single letters
  var inputsplit = word.split('');

  //variable to get the index of the letter in the array
  var index;

  //FINAL OUTPUT 
  var translate = "";

  //loop through the letters in the input
  for(index = 0; index <= inputsplit.length - 1 ; index ++){   
    //RULES ARE
    //FIRST IS THE SAME LETTER
    //SECOND IS THE NEXT CLOSEST VOWEL
    //THIRD THE NEXT CONSONANT
    //VOWEL IS KEPT THE SAME

    //variable to get the index from the vowels array 
    let c;
    c = vowels.findIndex(y => y === inputsplit[index]);

    //CHECK IF THE LETTER IS A VOWEL
    //if it returns -1 means the letter is not a vowel
    if (c !== -1){
      translate += inputsplit[index];
    }
    //IF NOT VOWEL CONTINUE
    else{
      //get the index of the letter in the array
      
      //set the first letter to the same constant
      let firstLetter;
      firstLetter = inputsplit[index];

      //set the second letter to the next vowel
      let secondLetter = "";
      //set variable to the index of the letter in the array
      let i;
      i = alpahbet.findIndex(x => x === inputsplit[index]);
      
      //switch statment to find the nearest vowel based on the index of the letter
      switch(i){
        case 0:
        case 1:
          secondLetter = "a";
          break;
        case 2:
        case 3:
        case 4:
          secondLetter = "e";
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          secondLetter = "i";
          break;
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
          secondLetter = "o";
          break;
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
          secondLetter = "u";
          break;
      }
      
      //set the third letter to the next constant
      let thirdLetter;
      thirdLetter = alpahbet[i+1];

      //if the last letter is z the index would be out of range 
      //so here it is set to z 
      if(thirdLetter == undefined){
        thirdLetter = "z";
      }

      //add all the 3 letters to one variable
      translate += firstLetter+secondLetter+thirdLetter;
    }
    
    
  } 
  //output the final text 
  output.innerHTML = "Translated Text: "+translate;
}
