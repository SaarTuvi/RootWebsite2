var a = 10;
a = 16.4;
a = "string";
a = false;

function A(param1, param2){
 //   debugger;

 var txt = "A visited with params:"+param1+","+param2;
console.log(txt);
 return txt;
}

var res1 = A(a,"123a");