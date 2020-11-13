let mentordata;
async function load() {
    let dataraw = await fetch('https://localhost:3300/mentors');
    mentordata = await dataraw.json();
    let table = document.getElementById('mentordata');
    let tbody = document.createElement('tbody');

    mentordata.forEach((value) => {
        let row = document.createElement('tr');
        let nameData = document.createElement('td');
        let emailData = document.createElement('td');
        let subjectData = document.createElement('td');
        let companyData = document.createElement('td');
        let addStudent = document.createElement('td');
        let getStudent = document.createElement('td');

        nameData.innerHTML = value.name;
        emailData.innerHTML = value.email;
        subjectData.innerHTML = value.subject;
        companyData.innerHTML = value.company;
        addStudent.innerHTML = `<button onclick="student(${value.id})" class="btn btn-success">Add Student</button>`;
        getStudent.innerHTML = `<button onclick="getstudent('${value.name}')" class="btn btn-primary">All Students</button>`;

        row.append(nameData, emailData, subjectData, companyData, addStudent, getStudent);
        tbody.append(row);
    })
    table.append(tbody);
}

load();

async function addMentor() {
    document.getElementById('mentorForm').style.display = "none";

    let data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        company: document.getElementById('company').value
    };

    await fetch('http://localhost:3300/', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'content-Type': "application/json"
        }
    });
}

async function student(mentorid) {
    document.getElementById('studentForm').style.display = 'block';
    let mentor = mentordata.find((mentor) => mentor.id === parseInt(mentorid));
    document.getElementById('mentor').value = mentor.name;
    document.getElementById('subjectStudent').value = mentor.subject;
}

async function addStudent() {
    let data = {
        name: document.getElementById('studentName').value,
        subject: document.getElementById('subjectStudent').value,
        mentor: document.getElementById('mentorName').value
    };
    await fetch('https://localhost:3300/students', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-Type': 'application/json'
        }
    });

    document.getElementById('studentForm').style.display = 'hidden';
}

async function getStudent(name) {
    let rawdata = await fetch(`https://localhost:3300/students/${name}`);
    let studentdata = await rawdata.json();

    let ul = document.getElementById('students');
    ul.innerHTML = '';

    studentdata.forEach((student) => {
        let li = document.createElement('li');
        li.innerHTML = student.name;
        ul.append(li);
    });

    document.getElementById('studentDetails').style.display = (document.getElementById('studentDetails').style.display === 'block') ? 'none' : 'block';
}

function mentorform() {
    document.getElementById('mentorForm').style.display = 'block';
}