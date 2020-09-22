var background=document.createElement('div');
background.id='outline'


var tophead=document.createElement('h1');
tophead.innerHTML='Unique Random Number Generator';
tophead.id='heading';


var result=document.createElement('p');
result.id='result';

var button=document.createElement('button');
button.innerHTML='Click me';
button.id='button';


document.body.append(background);
background.append(tophead,button,result);


document.getElementById('button').addEventListener('click',random);




var obj={};

function random() {
    var number=Math.floor(Math.random()*10);
    if(number in obj) {
        obj[number]+=1;
    }
    else {
        obj[number]=1;
    }
    var str='';
    if(Object.keys(obj).length===8) {
        for(var item in obj) {
            str+=item;
        }
        document.getElementById('result').innerHTML=str;
    }
    else {
        random();
    }
}