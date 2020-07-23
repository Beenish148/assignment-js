





 //Assignmnet 38 -42
 //task1
/* function powerNumber(a,b) {
   var a=5;
   var b=2;
   return a**b;
 }
  document.write (powerNumber ())
  */
 //task2
/*var user =prompt("enter year")
function checkLeapyear(){
		var year = user;
    //if(user == year % 4)
    if (year % 4 == 0)  { 
	
			alert(user+" is a leap year");  
		}
		else
		{
			alert(user+" is not a leap year");  
		}

}
document.write (checkLeapyear())*/

// task3
/*  function tringle (a,b,c){
    var a; 
    var b; 
    var c; 
  var s = (a + b + c)/2;
    return area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));


  }
  document.write (tringle (2,4,5)) ;
   */
//task4
 //function main (){ 
  //var user1 =+prompt('Enter first subject marks')
  //var user2 = +prompt('enter second  subject marks')
  //var user3 =+prompt('enter third  subject marks ')

  //document.write(" first Subject "+user1 +"<br>")
  //document.write ("second subject"+user2+"<br>")
  //document.write ("third subject"+user3+"<br>")
   // var sum= user1+user2+user3;
   // document.write("sum"+sum+"<br>")
   

    //function percentage (){
    //var per= sum*100/300;
    //document.write("per"+per +"<br>")
    //}
    //percentage ()


    //function average(){
     //var average= sum/300;
      //document.write('Average'+average)
   // }
  //  average()
 //}
 
//main ()
  

 //task5

 /*function indexof() {
  var text = "hello javascript";
  return n = text.indexOf("p");
}
document.write(indexof())
*/

//task6

/*function removeVowels(str){
  var vowels = "aieuo";
  var strArr = str.toLowerCase().split("");
  var newArr = strArr.filter(function(letter){
      if(vowels.indexOf(letter)  == -1){
          return letter;
      }
  });
  var string = "";
  newArr.forEach(function(letter){
      string += letter;
  });
  return string;
}

 document.write(removeVowels('this is exaample text for assignment'));
*/

//task7
var sentence= "please read this application and give me gratuirty";
var vowel=0;
function switchvowel(str){
  var strArr= str.split('');
  console.log(strArr)
  for(vari=0; i<=strArr.length;i++){
    switch (strArr[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':

      switch (strArr[i+1]){
        case 'a':
        vowel++;
        break;
        case 'e':
        vowel++;
       break;
       case 'i':
       vowel++;
      break;
      case 'o':
      vowel++;
     break;
     case 'u':
     vowel++;
    break;
   default:
   break;
      }
      break
      default:
      break
    }

  }
}
  switchvowel(sentence)


//task8
/*function distance (){
  var user = prompt("Enter distance in kilometer");

function meter(){ 
  var a=user*1000;
  alert(a+'in meter')

  }
meter();


function  feet (){
  var b=user*3280.84;
  alret(b+"in feet")
}
   feet();

function inches (){
  c=user*39370;
  alert(c+"in inches")
}
inches () 

function centimeter (){
  var d= user*100000;
  alert(d+"in centimeter")
}
centimeter ()
}
distance() */






// task10
   /*function currencyDenomination() {
    var cash= + prompt("Enter cash (in hundreds): "); 
    var hundred = parseInt(cash / 100);
    var fifty =parseInt((cash % 100) / 50);
    var ten =parseInt(((cash % 100) % 50) / 10);
    document.write('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

}
currencyDenomination(); */













//Assignment 43-48
//function showAlert(){
  //  alert("welcome")
//}

//task2
//function phone(){
  //  alert("thanks for purchasing a phone from us")

//} 

//task3
//function deleteRow(r) {
 // var i = r.parentNode.parentNode.rowIndex;
  //document.getElementById("myTable").deleteRow(i);
//}




   
   
  
//}
//task4

/*function change(){
    var pakistan = document.getElementById('img');
    pakistan.src="turkey.png"
}
function beforeimg(){
    var pakistan = document.getElementById('img');
    pakistan.src="pakistan.jpg";   
}

// task 5
/*var count = 0;
var countpl = document.getElementById('count');
function plus() {
 count++;
 countpl.value = count;
}
function minus() {
 count -- ;
 countpl.value = count;
} */









// assignment 49-52
//task1
 /*function signupForm(){
  var name = document.getElementById('name')
   para.innerHTML = name.value;
    var name1 = document.getElementById('email')
   para1.innerHTML = name1.value;
   var name2 = document.getElementById('pass')
   para2.innerHTML = name2.value;

 } */


//task2
/*function read (){
   var para =document.getElementById('para')
   para.innerHTML ="Browse through our shoes images and find high-quality shoes pictures. Download and use them for your website or blog. All images of shoes are free stock photos licensed under the open Pexels license"

 }*/
 //task3
 


 /*var tr =document.getElementById('td')

function studentRecord(){
  var index = document.getElementById('index')
  var td= document.createElement ('td')
  var tdtext = document.createTextNode (index.value)
  td.appendChild (tdtext)
  tr.appendChild (td)

  var name = document.getElementById('name')
  var td1= document.createElement ('td')
  var tdtext1 = document.createTextNode (name.value)
  td1.appendChild (tdtext1)
  tr. appendChild (td1)
  
  
 var class1 = document.getElementById('class')
var td2= document.createElement ('td')
var tdtext2 = document.createTextNode (class1.value)
  td2.appendChild (tdtext2)
  tr. appendChild (td2)

  var deltbtn = document.createElement('button')
  var btntext = document.createTextNode ('Delete')
  deltbtn.setAttribute ("onclick", "deletitem (this)")
  deltbtn.appendChild(btntext)
  tr.appendChild(deltbtn)

  var editbtn = document.createElement('button')
  var edittext = document.createTextNode ('Edit')
  editbtn.setAttribute('onclick','edititem(this)')
  editbtn.appendChild(edittext)
  tr.appendChild(editbtn) 
 }
function deletitem (e){
  e.parentNode.remove()  
}
  function  edititem (e){
     e.parentNode.nodeValue;
    //var editvalue = prompt("enter edit value",val)
  //val= editvalue
  var editvalue = prompt("enter edit value",e.parentNode.nodeValue)
  console.log(e)
}

//Assignment 53-58

//task1
// function  shoeImage(e){
  // var modelImage = document.getElementById('modelImage')
   //modelImage.src= e.src

 //}



   //task2
   /*function zoomin(){
     var para =document.getElementById('para')
    para.style.fontSize="20px"
    
   }
   function zoomout() {
    var para =document.getElementById('para')
    para.style.fontSize="10px"
   }*/



   // Assignment 58-67
   //task1

   // var element =document.getElementById('main-content')
     // console.log(element)
           
   //task1.2
   //var a= document.getElementById('main-content')
   //console.log (a.childNodes[0].childNodes[0])
   //console.log (a.childNodes[2].childNodes[0])
   //console.log (a.childNodes[3])
   //console.log (a.childNodes[5].childNodes[0])
   //console.log (a.childNodes[6].childNodes[0])
   
      //task1.3
   //var a= document.getElementsByClassName('render');
   //var content = a [0].innerHTML ="Name:Beenish"
   //var content = a [1].innerHTML ="last Name :Aslam"
   //var content = a [2].innerHTML ="Email:beenish@gmail.com"
   //var content = a [3].innerHTML ="pakisatn"
   //var content = a [4].innerHTML ="contact:0358697"

   // task1.4
     // var name = document.getElementById('first-name').value="Beenish"
     //task1.5
     //var lastName= document.getElementById('last-name').value="Aslam"
     //var email= document.getElementById('email').value="beenish@gmail.com"
    

  //task2 
  //i
 // var element = document.getElementById('form-content')
  //console.log(element.nodeType)
  //task2 (ii)
  //var element = document.getElementById('last-name')
  //console.log(element.nodeType)
 // task 2(iii)

   //var lastname= document.getElementById('lastName')
    //console.log(lastname.childNodes[0].lastname="name")
  //task 2 (iv)
 // var element = document.getElementById('main-content')
  //console.log(element.firstChild)
  //console.log(element.lastChild)

  //task2 (v)
   // var lastname = document.getElementById('lastName')
    //console.log(lastname.previousSibling)
    //console.log(lastname. nextSibling)
  //task2 (vi)
 // var email = document.getElementById('email')
  //console.log(email.nodeType)
  //console.log(email.parentNode)
  