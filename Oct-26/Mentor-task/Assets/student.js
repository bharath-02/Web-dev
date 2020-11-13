let studentdata;

async function load() {
    let rawdata = await fetch('https://localhost:3300/students');
    studentdata = await rawdata.json();

    let table = document.getElementById('studentdata');
    let tbody = document.createElement('tbody');

    studentdata.forEach((val) => {
        let row = document.createElement('tr');
        let nameData = document.createElement('td');
        let subjectData = document.createElement('td');
        let mentorData = document.createElement('td');
        let updateMentor = document.createElement('td');

        nameData.innerHTML = val.name;
        subjectData.innerHTML = val.subject;
        mentorData.innerHTML = val.mentor;
        updateMentor.innerHTML = `<button onclick="updatementor(${val.id}">Update Mentor</button>`

        row.append(nameData, subjectData, mentorData);
        tbody.append(row);
    });
    table.append(tbody);
}


load();