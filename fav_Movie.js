const FavMovie = "Avatar";

let guess = prompt("Guess My Favorite Movie:");

while ((guess != FavMovie) && (guess != 'quit')){
  guess = prompt("Wrong Guess. Try Again.....")
}

if(guess == FavMovie){
  console.log("congrats !!!");
  console.log("You are Right.");
  console.log("Avatar is my Favorite Movie");
}else{
  console.log("Quit");
}
