// This is a problem because popups are routinely blocke in most modern broswers
// function surprise() {
//   alert("Hello!");
// }
//
// //This seems to work fine however.
// if (confirm("Want to go to Disneyland?"))
// document.location.href = "http://park.hongkongdisneyland.com";
// var cost = 7000;
//
// var user_name; //Setting a variable, note that you declare with the keyword var
//                 //rather than in Python where you just write the variable name.
// user_name = prompt("What is your name?: ");
//
// //DOnt forget to use comments for testing code
// //document.write("Welcome to my webpage "
// //  + user_name + "!");
// /*Or we can use slash asterisk to comment out paragraphs */
// /*document.write("Welcome to my webpage "
//   + user_name + "!");
// */
// document.write("Welcome to my webpage "
//   + user_name + "!");
//
// /* JavaScript only has one type of numnber, to represent both floats and
// integers.
// You can also use scientific notation for example 123e5 = 12300000
// and 123-5 would equal 0.00123*/
// /* with strings you can denote them using either " or ' :)*/
// /* Boolean is lowercase t or f for true or false, not uppercase like Python
// so */
// var thing = true;
// /* Javascript will change the type of the variable as it gets declared with a
// new value of a different type. */
// var ting = 78;
// var ting = "Fred";
// /* All fine :) */
// /* Type of is a nice command*/
// document.write( '" John is type: "' + typeof "John" + "\n\n"
//         + "3.14 is type: " + typeof 3.14 + "\n\n"
//         + "false is type: " + typeof false);
        //Can't get \n\n to work at all!
// First you must declare the variable before you can increment the values
//
// var count = 1;
// count ++ ; // count = count + 1
// document.write("first one is : \r\n" + count);
// var count1 = 10 ;  //count1 = count1 - 1
// count1 -- ;
// document.write(" second one is : " + count1);
// var count2 = 10 ; // count2 = count2 + 10
// count2 += 10 ;
// document.write(" third one is : " + count2);
// var hello = "!" ; // hello = hello + "!"
// hello += "!" ;
// document.write(" The hello one is : " + hello);
// var marks = 420 ; // marks = marks - 20
// marks -= 20 ;
// document.write("marks one is : " + marks);
// var pigs = 5 ; // pigs = pigs * 5
// pigs *= 5 ;
// document.write(" pigs one is : " + pigs);
// var students = 50 ;
// var cakes = 3 ; // cakes = cakes / students
// document.write(" There are : " + cakes + " cakes and " + students + " students");
// cakes /= students ;
// document.write(" Each student gets: " + cakes + " of cake");
//
// /* ParseInt() converts what's in the brackets to an integers
// ParseFloat() converts what's in the brackets to a real or float numnber
// String() converts the value in the brackets  to a string*/
// var count = "345";
// document.write("         " + count + " is an " + typeof count);
// var count2Int = ParseInt(count) ;
// document.write("    "  + count2Int + " is now an " + typeof count2Int);

//Yay functions!! Weird that he's not differentiating between functions and
//procedures
//
// function do_something() {
//   alert('We start soon...');
//   var usrname = prompt('Wats da man\'s name G!');
//   return usrname;
// }
// viewer = do_something();
// function greeting(viewer){
//   alert("Hi " + viewer + " Sound Geeza blud.");
// }

// function check_user_age(){
//   if (age_of_user() < 18)
//   alert("Please go to another page.");
// }
// function age_of_user(){
//   var age_text, age;
//   age_text = prompt("What is your age?");
//   //document.write("age_text STuff " + typeof age_text)  //this works to here
//   //Is parseint the problem?
//   age = parseInt(age_text);
//   //Eventually from some research realised that atom was not auto completing
//   //properly. should be parseInt not ParseInt... is that because I typed it wrong
//   // to begin with?
//   //document.write("age Stuff " + typeof age);
//   return age;
// }
// function check_user_age(){
//   //concole.log cool user tool to check output etc from code without putting
//   //alert in there.
//   console.log("It's my " + build_great(5) + //initial value sent to build_great function
//   "grandmother!");
// }
// function build_great(depth){
//   if(depth > 0)
//     return "great " + build_great( depth - 1 ); // recursive loop (calls itself)
//   else
//     return "";
// }
//Multiple lines of code in a conditional statement must be surrounded by braces{}
//
// function check_user_age(){
//   var user_name;
//   user_name = prompt("What's your name?")
//   if (user_name == "Gee")
//   alert("You must be a gangster");
//   else if (user_name != "Gee") //the not equal to here means the interpreter
//   //never gets to the rest of the code. Be aware!
//     alert("whodat?");
//   else if (user_name == "Luther")
//     alert("Who's my ickle lad?");
//   else
//     alert("Oh, not a G");
// }

// Now Switch Statements
// function check_user_age() {
// var user_name=prompt("What is your name");
// //switch case example
//   switch (user_name) {
//     case "Gee":
//     alert("You must be a gangster");
//             break;
//     case "Vix":
//       alert("Sexy Girl");
//             break;
//     case "Luther":
//       alert("Ickle Lad");
//             break;
//     case "Willow":
//       alert("Punkin");
//             break;
//     default:
//     alert("Evil Kitty");
//
//   }
//
// }

// ANother switch statement but this time will tell you if you are human or
//animal.

// While loops
// var seven = 0;
//
// while (seven < 16) {
//   seven ++;
//   document.write(" Counting up \n\n" + seven);
// };
// var text = "The cat's hat was wet.";
// result = text.indexOf("we");
// document.write(result);
//
// var response, finished;
// finished = false;
// alert("Graham is a great name.");
// while (!finished){
//   response=prompt("Do you agree?");
//   if (response.indexOf("y")==0)
//   finished=true;
// }

// var response, finished;
// finished = false;
// alert("Graham is a lush name.");
// do {
//   response=prompt("Do you agree?");
//   if (response.indexOf("y")==0)
//       finished = true;
// } while (!finished);

// function show_money() {
//     //var money = 2; //uncomment to see the difference between local and global
//     //functions
//     alert("In the function, the value is: "+ money);
// }
// var money = 99
// alert("In the main part, the value is: "+ money);
// show_money();
// alert("In the main part, the value is: "+ money);
//
// function show_money() {
//     money = 2; //because this has not been declared (var money = 2) this
//     //becomes a global variable and can be used in global Statements
//     alert("In the function, the value is: "+ money);
// }
// //var money = 99
// // alert("In the main part, the value is: "+ money);
// show_money();
// alert("In the main part, the value is: "+ money);

//Logical operators

// && - Logical AND both inputs are true
// || - Logical OR either input is true
// ! = Logical NOT input is false
// var you_are_rich = false;
// var you_have_partner = true;
// var you_have_flat = true;
// var life_is_fantastic = you_are_rich && you_have_partner && you_have_flat;
// alert("life is fantastic is " + life_is_fantastic);
// you_are_rich = true;
//
// life_is_fantastic = you_are_rich && you_have_partner && you_have_flat;
// alert("life is fantastic is " + life_is_fantastic);

//Boolean in functions
//
// function first_function() {
//   alert("first_function() is running!")
//   return true;
// }
// function second_function() {
//   alert("second_function() is running!")
//   return false;
// }
// //The following will rung both functions as the first one is
// // True
// var test_function =
// first_function() && second_function();
//
// function first_function() {
//   alert("first_function() is running!")
//   return true;
// }
// function second_function() {
//   alert("second_function() is running!")
//   return false;
// }
// //The following will run just second function and then stop
// // Because the second function is falseTrue
// var test_function =
// second_function() && first_function();

// var you_are_rich = false;
// var you_have_partner = true;
// var you_have_flat = false;
// var life_is_good = you_are_rich || you_have_partner || you_have_flat;
// alert("life is good " + life_is_good);
// you_have_partner = false;
// var life_is_good = you_are_rich || you_have_partner || you_have_flat;
// alert("life is good " + life_is_good);
//
// function first_function() {
//   alert("first_function() is running!")
//   return true;
// }
// function second_function() {
//   alert("second_function() is running!")
//   return false;
// }
// //The following will run just second function and then stop
// // Because the second function is falseTrue
// var test_function =
// second_function() || first_function();

//This is clever and could easily be used in form data as if the male value
//changes then the female value automatically changes as well.
// var you_are_male = true;
// var you_are_female = !you_are_male;
// alert("You are male is: " + you_are_male);
// alert("You are female is: " + you_are_female);

//Arrays
//
// var pets = ["Dog", "Cat", "Hamster"];
// alert(pets.join(" and "));
// //var pets = new Array(10);
// pets[2] = "Rabbit"
// alert(pets.join());
// alert(pets.length); //This shows 3
// pets.push("Hamster");
// pets.unshift("Wolf");
// alert(pets.join(" and "));
// result = pets.pop();
// alert(pets.join(" and "));
// alert("The last item removed from array was " + result)
// var pets = ["Dog", "Cat", "Hamster"];
// var result = pets.shift();
// alert(pets.join(" and "));
// alert("The last item removed from array was " + result)
// var pets = ["Dog", "Cat", "Rabbit", "Hamster"];
// var primes = [2,3,5,7,11]
// var result = pets.concat(primes);
// alert(result);
// position = pets.indexOf(result);
// while (position < result.length) {
//   alert(position);
//   position++;
// };

//Generating random numbers
// var max_value = 50;
// var random_num = Math.random() * max_value;
// random_num = Math.floor(random_num);
// alert("Random number inthe range 0 to " + "49\n" + ( random_num + 1));
//The above shows random numbers in the range 1 - 50 (because of the +1 on result)
var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function do_game() {
  var random_number = Math.random() * 100;
  var random_number_integer = Math.floor(random_number);
  target = random_number_integer + 1;

  while (!finished) {
    guess_input_text = prompt("I am thinking of a number " +
                              "in the range 1 to 100.\n\n" +
                              "What is the number?");
    guess_input = parseInt(guess_input_text);
    guesses += 1;
    finished = check_guess();
  }
}

function check_guess() {
  //checks it's a number
  if (guess_input_text == 'q'){
    alert("Quitting game");
    return true;
  }
  if (isNaN(guess_input)) {
    alert("You have not entered a number.\n\n" +
          "Please enter a number in the range 1 to 100.");
          return false;
  }
  //Checks number in range
  if ((guess_input < 1) || (guess_input > 100)) {
    alert("Please enter a number in the range 1 to 100.");
          return false;
  }
  //If guess is higher than target
  if (guess_input > target) {
    alert("Your number was too large.");
    return false;
  }
  //If guess is lower than target
  if (guess_input < target) {
    alert("Your number was too small.");
    return false;
  }
  //Win state
  alert("You got it! The number was " + target +
        ".\n\nIt took you " + guesses +
      " guesses got the number!");
    return true;
}
