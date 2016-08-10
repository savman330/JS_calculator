/*After some first principles reasoning about the problem I was having difficulty with passing the arithmetic operators into...well..anything. A few minutes of Google-fu led me the the built in function eval(); Should be pretty easy from here.

Also plan to refactor the code after proof of concept
*/

var display = $('#list');

var str = '';

var ifStr = function(str){
  if (str.length >= 9){
    return alert('too many characters');
  }
};

$('#0').click(function(){
  ifStr(str);
  display.append('<li>0</li>');
  str+='0';
});

$('#1').click(function(){
   ifStr(str);
  display.append('<li>1</li>');
  str+='1';
});

$('#2').click(function(){
  ifStr(str);
  display.append('<li>2</li>');
  str+='2';
});

$('#3').click(function(){
  ifStr(str);
  display.append('<li>3</li>');
  str+='3';
});

$('#4').click(function(){
  ifStr(str);
  display.append('<li>4</li>');
  str+='4';
});

$('#5').click(function(){
  ifStr(str);
  display.append('<li>5</li>');
  str+='5';
});

$('#6').click(function(){
  ifStr(str);
  display.append('<li>6</li>');
  str+='6';
});

$('#7').click(function(){
  ifStr(str);
  display.append('<li>7</li>');
  str+='7';
});

$('#8').click(function(){
  ifStr(str);
  display.append('<li>8</li>');
  str+='8';
});

$('#9').click(function(){
  ifStr(str);
  display.append('<li>9</li>');
  str+='9';
});

$('#divide').click(function(){
  ifStr(str);
  display.append('<li>/</li>');
  str+='/';
});

$('#X').click(function(){
  ifStr(str);
  display.append('<li>*</li>');
  str+='*';
});

$('#subtract').click(function(){
  ifStr(str);
  display.append('<li>-</li>');
  str+='-';
});


$('#add').click(function(){
  ifStr(str);
  display.append('<li>+</li>');
  str+='+';
});

$('.clear').click(function(){
  display.html('<li></li>');
  str = '';
});


$('#vertical').click(function(){
  display.html(eval(str));
});
