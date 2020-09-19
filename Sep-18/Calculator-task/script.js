
var form=create_element('form');
form.setAttribute('name','calculator');
form.setAttribute('class','total')

var table=create_element('table');

var row1=create_element('tr');
var first_col1=create_element('td');
first_col1.setAttribute('colspan','4');
var first_input1=create_input_text('text','disp','display');

var row2=create_element('tr');
var second_col1=create_element('td');
var second_input1=create_input_button('button','one','1',"calculator.display.value += '1'")
var second_col2=create_element('td');
var second_input2=create_input_button('button','two','2',"calculator.display.value += '2'")
var second_col3=create_element('td');
var second_input3=create_input_button('button','three','3',"calculator.display.value += '3'")
var second_col4=create_element('td');
var second_input4=create_input_button('button','plus','+',"calculator.display.value += '+'")


var row3=create_element('tr');
var third_col1=create_element('td');
var third_input1=create_input_button('button','four','4',"calculator.display.value += '4'")
var third_col2=create_element('td');
var third_input2=create_input_button('button','five','5',"calculator.display.value += '5'")
var third_col3=create_element('td');
var third_input3=create_input_button('button','six','6',"calculator.display.value += '6'")
var third_col4=create_element('td');
var third_input4=create_input_button('button','minus','-',"calculator.display.value += '-'")


var row4=create_element('tr');
var fourth_col1=create_element('td');
var fourth_input1=create_input_button('button','seven','7',"calculator.display.value += '7'")
var fourth_col2=create_element('td');
var fourth_input2=create_input_button('button','eight','8',"calculator.display.value += '8'")
var fourth_col3=create_element('td');
var fourth_input3=create_input_button('button','nine','9',"calculator.display.value += '9'")
var fourth_col4=create_element('td');
var fourth_input4=create_input_button('button','multi','*',"calculator.display.value += '*'")


var row5=create_element('tr');
var fifth_col1=create_element('td');
var fifth_input1=create_input_button('button','clear','c',"calculator.display.value = ''")
var fifth_col2=create_element('td');
var fifth_input2=create_input_button('button','zero','0',"calculator.display.value += '0'")
var fifth_col3=create_element('td');
var fifth_input3=create_input_button('button','result','=',"calculator.display.value = eval(calculator.display.value)")
var fifth_col4=create_element('td');
var fifth_input4=create_input_button('button','div','/',"calculator.display.value += '/'")


document.body.append(form);
form.append(table);
table.append(row1,row2,row3,row4,row5);

row1.append(first_col1);
first_col1.append(first_input1);

row2.append(second_col1,second_col2,second_col3,second_col4);
second_col1.append(second_input1);
second_col2.append(second_input2);
second_col3.append(second_input3);
second_col4.append(second_input4);

row3.append(third_col1,third_col2,third_col3,third_col4);
third_col1.append(third_input1);
third_col2.append(third_input2);
third_col3.append(third_input3);
third_col4.append(third_input4);

row4.append(fourth_col1,fourth_col2,fourth_col3,fourth_col4);
fourth_col1.append(fourth_input1);
fourth_col2.append(fourth_input2);
fourth_col3.append(fourth_input3);
fourth_col4.append(fourth_input4);

row5.append(fifth_col1,fifth_col2,fifth_col3,fifth_col4);
fifth_col1.append(fifth_input1);
fifth_col2.append(fifth_input2);
fifth_col3.append(fifth_input3);
fifth_col4.append(fifth_input4);



function create_element(element) {
    var elem=document.createElement(element);
    return elem;
}
function create_input_text(type,name,id) {
	var inpt=document.createElement('input');
	inpt.setAttribute('type',type);
	inpt.setAttribute('name',name);
	inpt.setAttribute('id',id);
	return inpt;

}
function create_input_button(type,name,value,onclick) {
	var inpt=document.createElement('input');
	inpt.setAttribute('type',type);
	inpt.setAttribute('name',name);
	inpt.setAttribute('value',value);
	inpt.setAttribute('onclick',onclick);
	return inpt;
}