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
var you_are_rich = false;
var you_have_partner = true;
var you_have_flat = true;
var life_is_fantastic = you_are_rich && you_have_partner && you_have_flat;
alert("life is fantastic is " + life_is_fantastic);
you_are_rich = true;

life_is_fantastic = you_are_rich && you_have_partner && you_have_flat;
alert("life is fantastic is " + life_is_fantastic);
