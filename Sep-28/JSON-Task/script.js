var variants=[];
var variantDeatils=[];
var count=0;


// Add() function
function add() {
    // Increasing count for reference
    count++;

    var container=document.createElement('div');
    container.setAttribute('class','container');
    var form=document.createElement('form');
    var row=document.createElement('div');
    row.setAttribute('class','row');
    
    // Creating Type-field
    var form_grp1=document.createElement('div');
    form_grp1.setAttribute('class','form-group col-lg-4 col-md-4 col-sm-4');
    var label1=document.createElement('label');
    label1.setAttribute('for','type');
    label1.innerHTML='Type';
    var input1=document.createElement('input');
    input1.setAttribute('type','text');
    input1.setAttribute('class','form-control');
    input1.id='type'+count;
    input1.name='type'+count;

    // Creating value-field
    var form_grp2=document.createElement('div');
    form_grp2.setAttribute('class','form-group col-lg-4 col-md-4 col-sm-4');
    var label2=document.createElement('label');
    label2.setAttribute('for','value');
    label2.innerHTML='Values';
    var input2=document.createElement('input');
    input2.setAttribute('type','text');
    input2.setAttribute('class','form-control');
    input2.id='value'+count;
    input2.name='value'+count;

    // Append the necessary things
    document.body.append(container);
    container.append(form);
    form.append(row);
    row.append(form_grp1,form_grp2);
    form_grp1.append(label1,input1);
    form_grp2.append(label2,input2);
}

function addOn() {
    // Initialize the id's for the input values
    for(var itr=1;itr<=count;itr++) {
        var obj={};
        obj['type']=document.getElementById('type'+itr).value;
        obj['value']=document.getElementById('value'+itr).value;
        variants.push(obj);
    }
}