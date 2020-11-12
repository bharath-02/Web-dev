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