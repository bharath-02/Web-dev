var userDataList=[];
var edit=false;
var selectedRow=null;
async function getUsers() {
    var request=await fetch('https://5f7be02700bd740016909f15.mockapi.io/api/users');
    var data=await request.json();
    userDataList=data;
    populateData(data);
}
async function populateData(userData) {
    document.getElementById('user-table').innerHTML='';
    userData.forEach((element) => {
        var row=document.createElement('tr');
        var fname=document.createElement('td');
        fname.innerHTML=element.firstname;
        var lname=document.createElement('td');
        lname.innerHTML=element.lastname;
        var email=document.createElement('td');
        email.innerHTML=element.email;
        var gender=document.createElement('td');
        gender.innerHTML=element.gender;
        var status=document.createElement('td');
        status.innerHTML=element.status;
        var country=document.createElement('td');
        country.innerHTML=element.country;
        var state=document.createElement('td');
        state.innerHTML=element.state;
        var city=document.createElement('td');
        city.innerHTML=element.city;
        var editButtonArea=document.createElement('td');
        var editButton=document.createElement('button');
        editButton.innerHTML='Edit';
        editButton.setAttribute('class','btn btn-warning');
        editButton.setAttribute('onclick','getRow('+element.id+')');
        var deleteButton=document.createElement('button');
        var deleteButtonArea=document.createElement('td');
        deleteButton.innerHTML='Delete';
        deleteButton.setAttribute('class','btn btn-danger');
        deleteButton.setAttribute('onclick','deleteRow('+element.id+')');
        editButtonArea.append(editButton);
        deleteButtonArea.append(deleteButton);  
        row.append(fname,lname,email,gender,status,country,state,city,editButtonArea,deleteButtonArea);
        document.getElementById('user-table').append(row);
    });
}

async function deleteRow(id) {
    var conf=confirm('Are you sure you want to delete?');
    if(conf) {
        var deleterow=await fetch(
            "https://5f7be02700bd740016909f15.mockapi.io/api/users/" +id,
            {
                method:"DELETE",
            }
        );
        await deleterow.json();
        getUsers();
    }
}

function getRow(id) {
    document.getElementById('firstname').value=userDataList[id-1].firstname;
    document.getElementById('lastname').value=userDataList[id-1].lastname;
    document.getElementById('email').value=userDataList[id-1].email;
    document.querySelector('input[name=gender]').value=userDataList[id-1].gender;
    document.querySelector('input[name=maritalstatus]').value=userDataList[id-1].status;
    document.getElementById('countrySel').value=userDataList[id-1].country;
    document.getElementById('stateSel').value=userDataList[id-1].state;
    document.getElementById('citySel').value=userDataList[id-1].city;
    edit=true;
    selectedRow=userDataList[id-1].id;
}

async function addData() {
    var data={
        firstname : document.getElementById('firstname').value,
        lastname : document.getElementById('lastname').value,
        email : document.getElementById('email').value,
        gender : document.querySelector('input[name=gender]:checked').value,
        status : document.querySelector('input[name=maritalstatus]:checked').value,
        country : document.getElementById('countrySel').value,
        state : document.getElementById('stateSel').value,
        city : document.getElementById('citySel').value
    }
    if(!edit) {
        var postData=await fetch(
            'https://5f7be02700bd740016909f15.mockapi.io/api/users',
            {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type":"application/json",
                },
            }
        );
    }
    else {
        var postData=await fetch(
            'https://5f7be02700bd740016909f15.mockapi.io/api/users/' + selectedRow,
            {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        edit=false;
        selectedRow=null;
    }
    var postresult= await postData.json();
    document.getElementById('firstname').value='';
    document.getElementById('lastname').value='';
    document.getElementById('email').value='';
    document.getElementById('password').value='';
    document.getElementById('confirmpassword').value='';
    document.querySelector('input[name=gender]:checked').value='';
    document.querySelector('input[name=maritalstatus]:checked').value='';
    document.querySelector('#countrySel').value='';
    document.querySelector('#stateSel').value='';
    document.querySelector('#citySel').value='';
    document.getElementById('firstname').focus();
    getUsers();
}
// getUsers();