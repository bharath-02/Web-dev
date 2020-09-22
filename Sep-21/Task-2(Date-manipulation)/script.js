var container=document.createElement('div');
container.id='container';

var heading=document.createElement('h1');
heading.id='heading';
heading.innerHTML='Date Manipulation';

var label=document.createElement('label');
label.id='label-field';
label.innerHTML='Enter your D.O.B : ';

var input=document.createElement('input');
input.type='date';
input.id='dob';

var button=document.createElement('input');
button.id='btn';
button.type='button';
button.value='Click me';
button.onclick=date_manipulator;

var result=document.createElement('div');
result.id='result';




document.body.append(container);
container.append(heading,label,input,button,result);




function date_manipulator() {
    var birthDate=document.getElementById('dob').value;

    var d=new Date(birthDate);
    
    var str=birthDate.toString();
    var bornYear=Number(str.substring(0,4),10);
    var bornMonth=Number(str.substring(5,7),10);
    var bornDay=Number(str.substring(8,10),10);
    
    var today=new Date();
    var birthDay=new Date(bornYear,bornMonth-1,bornDay);
    
    var forYear=today.valueOf()-birthDay.valueOf();
    var year=Math.floor(forYear / 31536000000);
    var day=Math.floor((forYear % 31536000000)/86400000);
    var month=Math.floor(day / 30);
    day%=30;
    var totalMonths=(month+(year*12));
    var totalDays=(day+(month*30));
    var totalHours=totalDays*24;
    var totalSeconds=totalDays*24*3600;
    var totalMilliSeconds=totalDays*24*3600*1000;
    if (isNaN(year) || isNaN(month) || isNaN(day)) {
        document.getElementById('result').innerHTML = ("Invalid D.O.B - Please try again!");
    }
    else {
        document.getElementById('result').innerHTML='AGE : '+year+' years ' + month+' months '+day+' days '+
        '<br>'+
        'MONTHS : '+totalMonths+
        '<br>'+
        'DAYS : ' +totalDays+
        '<br>'+
        'HOURS : '+totalHours+
        '<br>'+
        'SECONDS : '+totalSeconds+
        '<br>'+
        'MILLISECONDS : '+totalMilliSeconds ;
    }

}