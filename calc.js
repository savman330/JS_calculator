/*After some first principles reasoning about the problem I was having difficulty with passing the arithmetic operators 
into...well..anything. A few minutes of Google-fu led me the the built in function eval(); Should be pretty easy from here.
*/
var id = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = {
  divide: '/',
  X:'*',
  subtract:'-',
  add:'+',
  clear:'',
  }
var str = '';

var ifStr = function(str){
  if (str.length >= 9){
    return alert('too many characters');
  }
};

var idAssign = function(id, li){
 $(li).click(function(){
     ifStr(str);
     $('#display').append('<li>' + id + '</li>');
     str+=id;
      });
  };

var li = id.map(function(val){
	return '#' + val;
});

// iterate through array of id's [1-9] and form event handlers for each div
for (i=0; i<id.length; i++){
	idAssign(id[i], li[i]);
}

// make array of properties in special obj
var sp=[];
for (var prop in special){
  sp.push(prop);
};

var specialAssign = function(obj, arr){
  $(arr).click(function(){
    ifStr(str);
    $('#display').append('<li>' + obj[arr] + '</li>');
    str+=obj[arr];
  });
};

// iterate through properties of obj==special and assign event handlers to each div
for(i=0; i<sp.length; i++){
  specialAssign(special, sp[i]);
}

// event handler for 'equals' button
$('#vertical').click(function(){
  display.html(eval(str));
});
