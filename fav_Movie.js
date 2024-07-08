const FavMovie = "Avtar";

let guess = prompt("Enter a movie name:");

while ((guess != FavMovie) && (guess != 'quit')){
  console.log("Wrong Guess.");
  console.log("Try Again..");
  guess = prompt("Enter a movie name:");
}