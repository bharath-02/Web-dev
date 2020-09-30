var nav=document.createElement('nav');
nav.setAttribute('aria-label','Page navigation example');

var unorderedList=document.createElement('ul');
unorderedList.setAttribute('class','pagination');

var list1=document.createElement('li');
list1.setAttribute('class','page-item');
var a1=document.createElement('a');
a1.setAttribute('class','page-link');
a1.setAttribute('href','#');
a1.setAttribute('aria-label','Previous');
var span=document.createElement('span');
span.setAttribute('aria-hidden','true');
span.innerHTML='&laquo;';

var list2=document.createElement('li');
list2.setAttribute('class','page-item');
var a2=document.createElement('a');
a2.setAttribute('class','page-link');
a2.setAttribute('href','myfunc()');
a2.id='l1';
a2.innerHTML='1';

var list3=document.createElement('li');
list3.setAttribute('class','page-item');
var a3=document.createElement('a');
a3.setAttribute('class','page-link');
a3.setAttribute('href','cheetah.jpg');
a3.innerHTML='2';

var list4=document.createElement('li');
list4.setAttribute('class','page-item');
var a4=document.createElement('a');
a4.setAttribute('class','page-link');
a4.setAttribute('href','deer.jpg');
a4.innerHTML='3';

var list5=document.createElement('li');
list5.setAttribute('class','page-item');
var a5=document.createElement('a');
a5.setAttribute('class','page-link');
a5.setAttribute('href','tiger.jpg');
a5.innerHTML='4';

var list6=document.createElement('li');
list6.setAttribute('class','page-item');
var a6=document.createElement('a');
a6.setAttribute('class','page-link');
a6.setAttribute('href','squirrel.jpg');
a6.innerHTML='5';

var list7=document.createElement('li');
list7.setAttribute('class','page-item');
var a7=document.createElement('a');
a7.setAttribute('class','page-link');
a7.setAttribute('href','rabbit.jpg');
a7.innerHTML='6';

var list8=document.createElement('li');
list8.setAttribute('class','page-item');
var a8=document.createElement('a');
a8.setAttribute('class','page-link');
a8.setAttribute('href','peacock.jpg');
a8.innerHTML='7';

var list9=document.createElement('li');
list9.setAttribute('class','page-item');
var a9=document.createElement('a');
a9.setAttribute('class','page-link');
a9.setAttribute('href','lion.jpg');
a9.innerHTML='8';

var list10=document.createElement('li');
list10.setAttribute('class','page-item');
var a10=document.createElement('a');
a10.setAttribute('class','page-link');
a10.setAttribute('href','tiger,jpg');
a10.innerHTML='9';

var list11=document.createElement('li');
list11.setAttribute('class','page-item');
var a11=document.createElement('a');
a11.setAttribute('class','page-link');
a11.setAttribute('href','deer.jpg');
a11.innerHTML='10';

var list12=document.createElement('li');
list12.setAttribute('class','page-item');
var a12=document.createElement('a');
a12.setAttribute('class','page-link');
a12.setAttribute('href','#');
a12.setAttribute('aria-label','Next');
var span1=document.createElement('span');
span1.setAttribute('aria-hidden','true');
span1.innerHTML='&raquo;';

document.body.append(nav);
nav.append(unorderedList);
unorderedList.append(list1,list2,list3,list4,list5,list6,list7,list8,list9,list10,list11,list12);
list1.append(a1);
a1.append(span);
list2.append(a2);
list3.append(a3);
list4.append(a4);
list5.append(a5);
list6.append(a6);
list7.append(a7);
list8.append(a8);
list9.append(a9);
list10.append(a10);
list11.append(a11);
list12.append(a12);
a12.append(span1);





function myfunc() {
    alert('Hello');
}