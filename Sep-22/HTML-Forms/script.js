var section=document.createElement('div');
section.id='section';

var heading=document.createElement('h1');
heading.id='heading';
heading.innerHTML='Enter your details below';

var form=document.createElement('form');
form.id="forms";
form.setAttribute('onsubmit','myfunction();return false');

var firstName=document.createElement('div');
firstName.setAttribute('class','form-group');
firstName.setAttribute('class','sizing');
var firstNameLabel=document.createElement('label');
firstNameLabel.setAttribute('for','firstname');
firstNameLabel.innerHTML='First Name';
var firstNameInput=document.createElement('input');
firstNameInput.setAttribute('type','text');
firstNameInput.setAttribute('class','form-control');
firstNameInput.id='firstname';
firstNameInput.required=true;

var lastName=document.createElement('div');
lastName.setAttribute('class','form-group');
lastName.setAttribute('class','sizing');
var lastNameLabel=document.createElement('label');
lastNameLabel.setAttribute('for','lastname');
lastNameLabel.innerHTML='Last Name';
var lastNameInput=document.createElement('input');
lastNameInput.setAttribute('type','text');
lastNameInput.setAttribute('class','form-control');
lastNameInput.id='lastname';
lastNameInput.required=true;

var address=document.createElement('div');
address.setAttribute('class','form-group');
address.setAttribute('class','sizing');
var addressLabel=document.createElement('label');
addressLabel.setAttribute('for','address');
addressLabel.innerHTML='Address';
var addressInput=document.createElement('input');
addressInput.setAttribute('type','text');
addressInput.setAttribute('class','form-control');
addressInput.id='address';
addressInput.required=true;

var pincode=document.createElement('div');
pincode.setAttribute('class','form-group');
pincode.setAttribute('class','sizing');
var pincodeLabel=document.createElement('label');
pincodeLabel.setAttribute('for','pincode');
pincodeLabel.innerHTML='Pincode';
var pincodeInput=document.createElement('input');
pincodeInput.setAttribute('type','number');
pincodeInput.setAttribute('class','form-control');
pincodeInput.id='pincode';
pincodeInput.required=true;

var radio=document.createElement('div');
radio.setAttribute('class','row');
var gender=document.createElement('div');
gender.setAttribute('class','form-group');
gender.setAttribute('class','col-sm-3');
var genderLabel=document.createElement('label');
genderLabel.innerHTML='Gender';

var male=document.createElement('div');
male.setAttribute('class','form-check');
male.setAttribute('class','form-check-inline');
male.setAttribute('class','col-sm-2');
var maleInput=document.createElement('input');
maleInput.setAttribute('type','radio');
maleInput.setAttribute('class','form-check-input');
maleInput.setAttribute('name','gender');
maleInput.setAttribute('value','male');
maleInput.id='malegender';
var maleLabel=document.createElement('label');
maleLabel.setAttribute('for','malegender');
maleLabel.setAttribute('class','form-check-label');
maleLabel.innerHTML='Male';

var female=document.createElement('div');
female.setAttribute('class','form-check');
female.setAttribute('class','form-check-inline');
female.setAttribute('class','col-sm-2');
var femaleInput=document.createElement('input');
femaleInput.setAttribute('type','radio');
femaleInput.setAttribute('class','form-check-input');
femaleInput.setAttribute('name','gender');
femaleInput.setAttribute('value','female');
femaleInput.id='femalegender';
var femaleLabel=document.createElement('label');
femaleLabel.setAttribute('for','femalegender');
femaleLabel.setAttribute('class','form-check-label');
femaleLabel.innerHTML='Female';

var state=document.createElement('div');
state.setAttribute('class','form-group');
state.setAttribute('class','sizing');
var stateLabel=document.createElement('label');
stateLabel.setAttribute('for','state');
stateLabel.innerHTML='State';
var stateInput=document.createElement('input');
stateInput.setAttribute('type','text');
stateInput.setAttribute('class','form-control');
stateInput.id='state';
stateInput.required=true;

var country=document.createElement('div');
country.setAttribute('class','form-group');
country.setAttribute('class','sizing');
var countryLabel=document.createElement('label');
countryLabel.setAttribute('for','country');
countryLabel.innerHTML='Country';
var countryInput=document.createElement('input');
countryInput.setAttribute('type','text');
countryInput.setAttribute('class','form-control');
countryInput.id='country';
countryInput.required=true;

var button=document.createElement('input');
button.setAttribute('type','submit');
button.setAttribute('class','btn');
button.setAttribute('class','btn-primary');
button.id='submit-button';
button.innerHTML='Submit';

var table=document.createElement('table');
table.id='table';
table.setAttribute('class','table-class');
var row1=document.createElement('tr');
var head1=document.createElement('th');
head1.innerHTML='First Name';
head1.setAttribute('class','head-class')
var head2=document.createElement('th');
head2.innerHTML='Last Name';
head2.setAttribute('class','head-class')
var head3=document.createElement('th');
head3.innerHTML='Address';
head3.setAttribute('class','head-class')
var head4=document.createElement('th');
head4.innerHTML='Pincode';
head4.setAttribute('class','head-class')
var head5=document.createElement('th');
head5.innerHTML='Gender';
head5.setAttribute('class','head-class')
var head6=document.createElement('th');
head6.innerHTML='State';
head6.setAttribute('class','head-class')
var head7=document.createElement('th');
head7.innerHTML='Country';
head7.setAttribute('class','head-class')


document.body.append(section);
section.append(heading,form,table);
form.append(firstName,lastName,address,pincode,radio,state,country,button);
firstName.append(firstNameLabel,firstNameInput);
lastName.append(lastNameLabel,lastNameInput);
address.append(addressLabel,addressInput);
pincode.append(pincodeLabel,pincodeInput);
radio.append(gender,male,female);
gender.append(genderLabel);
male.append(maleInput,maleLabel);
female.append(femaleInput,femaleLabel);
state.append(stateLabel,stateInput);
country.append(countryLabel,countryInput);
table.append(row1);
row1.append(head1,head2,head3,head4,head5,head6,head7);


function myfunction() {
    var row2=document.createElement('tr');
    var data1=document.createElement('td');
    data1.setAttribute('class','head-class');
    var fname=document.getElementById('firstname').value;
    data1.innerHTML=fname;
    var data2=document.createElement('td');
    data2.setAttribute('class','head-class');
    var lname=document.getElementById('lastname').value;
    data2.innerHTML=lname;
    var data3=document.createElement('td');
    data3.setAttribute('class','head-class');
    var addres=document.getElementById('address').value;
    data3.innerHTML=addres;
    var data4=document.createElement('td');
    data4.setAttribute('class','head-class');
    var pcode=document.getElementById('pincode').value;
    data4.innerHTML=pcode;
    var data5=document.createElement('td');
    data5.setAttribute('class','head-class');
    var gendre=document.querySelector('input[type=radio]:checked').value;
    data5.innerHTML=gendre;
    var data6=document.createElement('td');
    data6.setAttribute('class','head-class');
    var state=document.getElementById('state').value;
    data6.innerHTML=state;
    var data7=document.createElement('td');
    data7.setAttribute('class','head-class');
    var country=document.getElementById('country').value;
    data7.innerHTML=country;
    
    table.append(row2);
    row2.append(data1,data2,data3,data4,data5,data6,data7);
}