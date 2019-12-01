

/* Final Project */


// Variables
var output = "", input1=0, input2, sign="plus", answer=0, flipCheck=0,
equalPressed=0, signPressed=0, decimalPressed=false, sliceLength, t;

// Clear Display
document.getElementById("clear1").addEventListener('click', function(){
  document.getElementById("display").innerHTML = "";
  output = "";
  input1 = 0;
  answer = 0;
  equalPressed = 0;
  signPressed = 0;
  decimalPressed = false;
  flipCheck = 0;
  sign = "plus";
  document.getElementById("input").focus();
})

// Clear Input
document.getElementById("clear2").addEventListener('click', function(){
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
})

// Equals Function
function equalsFunction(){
  //debugger;
  document.getElementById("input").focus();
  if (equalPressed == 0)
    input2 = parseFloat(document.getElementById("input").value);
  if (signPressed > 1 || equalPressed > 0){
    if (!isNaN(input2)){
      if(output == String(input1)){
        output += "\n" + String(input1);
        sliceLength = String(input1).length;
      }
      else {
        output += "\n" + String(answer);
        sliceLength = String(answer).length;
      }
    }
    if(!isNaN(parseFloat(document.getElementById("input").value)) && signPressed == 0){
      input1 = 0;
      input2 = parseFloat(document.getElementById("input").value);
      sign = "plus";
      output = output.slice(0, -sliceLength);
      output += "0";
    }
  }
  if (!isNaN(input2)){
    if (output == ""){
      output = "0";
    }
    switch (sign){
      default:
        answer = input1 + input2;
        output +=  " + " + input2;
        break;
      case 'minus':
        answer = input1 - input2;
        output +=  " - " + input2;
        break;
      case 'times':
        answer = input1 * input2;
        output +=  " x " + input2;
        break;
      case 'divide':
        answer = input1 / input2;
        output +=  " / " + input2;
        break;
    }
    output += " =\n" + String(answer);
    document.getElementById("display").innerHTML = output;
    t = document.getElementById("display");
    t.scrollTop = t.scrollHeight;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    input1 = answer;
    equalPressed++;
    signPressed = 0;
  }
}

// Input Function
function inputFunction(s){
  if (signPressed > 0){
    equalPressed = 0;
    equalsFunction();
    if (!isNaN(input2))
      signPressed += 2;
    sign = s;
    equalPressed = 0;
  }
  else{
    input1 = parseFloat(document.getElementById("input").value);
    if  (isNaN(input1)){
      if(output == ""){
        input1 = 0;
        output = "0";
      }
      else{
        input1 = answer;
        output += "\n" + String(input1);
      }
    }
    else{
      if (output == "")
        output = input1;
      else{
        output += "\n" + String(input1);
      }
    }
    document.getElementById("display").innerHTML = output;
    t = document.getElementById("display");
    t.scrollTop = t.scrollHeight;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    sign = s;
    equalPressed = 0;
    signPressed++;
  }
}

// Input Number
function inputNum(n){
  //debugger;
  var num = document.getElementById("input").value;
  if (decimalPressed){
    num = num.slice(0, -1);
    decimalPressed = false;
  }
  num += n;
  if (isNaN(num)){
    flipDP();
  }
  else
    document.getElementById("input").value = num;
  document.getElementById("input").focus();
}

// Negative / Positive Button
document.getElementById("neg").addEventListener('click', function(){
  document.getElementById("input").value = -document.getElementById("input").value;
  document.getElementById("input").focus();
})

// Decimal Button
document.getElementById("decimal").addEventListener('click', function(){
  inputNum(".0");
  flipDP();
  document.getElementById("input").focus();
})

// Flip decimalPressed
function flipDP(){
  if (decimalPressed)
    decimalPressed = false;
  else
    decimalPressed = true;
}

// Equals Button
document.getElementById("equals").addEventListener('click', function(){equalsFunction();})

// Plus Button
document.getElementById("plus").addEventListener('click', function(){inputFunction("plus");})

// Minus Button
document.getElementById("minus").addEventListener('click', function(){inputFunction("minus");})

// Times Button
document.getElementById("times").addEventListener('click', function(){inputFunction("times");})

// Divide Button
document.getElementById("divide").addEventListener('click', function(){inputFunction("divide");})

// 0 Button
document.getElementById("zero").addEventListener('click', function(){inputNum("0");})

// 1 Button
document.getElementById("one").addEventListener('click', function(){inputNum("1");})

// 2 Button
document.getElementById("two").addEventListener('click', function(){inputNum("2");})

// 3 Button
document.getElementById("three").addEventListener('click', function(){inputNum("3");})

// 4 Button
document.getElementById("four").addEventListener('click', function(){inputNum("4");})

// 5 Button
document.getElementById("five").addEventListener('click', function(){inputNum("5");})

// 6 Button
document.getElementById("six").addEventListener('click', function(){inputNum("6");})

// 7 Button
document.getElementById("seven").addEventListener('click', function(){inputNum("7");})

// 8 Button
document.getElementById("eight").addEventListener('click', function(){inputNum("8");})

// 9 Button
document.getElementById("nine").addEventListener('click', function(){inputNum("9");})

// Keyboard Arithmetic Event Listeners
document.addEventListener('keypress', function(e){
  e.preventDefault();
  var k = e.which || e.keycode;
  if(k == 46){
    inputNum(".0");
    flipDP();
    document.getElementById("input").focus();
  }
  if(k == 13)
    equalsFunction();
  if(k == 42)
    inputFunction("times");
  if(k == 47)
    inputFunction("divide");
  if(k == 43)
    inputFunction("plus");
  if(k == 45)
    inputFunction("minus");
  if(k == 48)
    inputNum("0");
  if(k == 49)
    inputNum("1");
  if(k == 50)
    inputNum("2");
  if(k == 51)
    inputNum("3");
  if(k == 52)
    inputNum("4");
  if(k == 53)
    inputNum("5");
  if(k == 54)
    inputNum("6");
  if(k == 55)
    inputNum("7");
  if(k == 56)
    inputNum("8");
  if(k== 57)
    inputNum("9");
})
