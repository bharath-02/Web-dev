var section=create_class('div','total-section');

var background=create_class('div','bg-color');

var pic= create_img('pic.jpeg');

var name_area=create_class('div','name');

var my_name=create_class('h2');
my_name.innerHTML="BHARATH J";

var contact_area=create_class('div','contact');
var contact=create_class('p');
contact.innerHTML="N Damen Avenue, Chicago 9999|999-999-9999|hello@kickresume.com|www.kickresume.com";

var line=create_class('hr');


var main_content=create_class('div','content');

var profile=create_class('h2');
profile.innerHTML='<i style="font-size:24px" class="fas fa-bullseye"></i> PROFILE:';

var profile_content=create_class('p');
profile_content.innerHTML="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduos, animated, and an alliteration advocate";

var skills=create_class('h2');
skills.innerHTML="<i style='font-size:24px' class='fas fa-laptop-code'></i>SKILLS:";
var skill_content=create_class('ul','skill');
var skill_name=create_list(skill_content,6);
skill_name[0].innerHTML="Javascript";
skill_name[1].innerHTML="CSS";
skill_name[2].innerHTML="HTML";
skill_name[3].innerHTML="React";
skill_name[4].innerHTML="Redux";
skill_name[5].innerHTML="MongoDB";

var work_experience=create_class('h2');
work_experience.innerHTML="<i style='font-size:24px' class='fas'>&#xf0b1;</i> WORK EXPERIENCE:";

var first_work=create_class('h4');
first_work.innerHTML="Event Manager, C3 Presents (03/2014-03/2017)";
var first_work_content=create_class('ul');
var first_work_points=create_list(first_work_content,3);
first_work_points[0].innerHTML="Lead and execute all phases of event planning and production spaning committee Recruitment,training,vendor relationships and on-suite facilitation.";
first_work_points[1].innerHTML="Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civicevent to date, the United State of Women.";
first_work_points[2].innerHTML="Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.";

var second_work=create_class('h4');
second_work.innerHTML="Community Relations Manager, Gay & Lesbian Elder Housing, (03/2014-03/2017)";
var second_work_content=create_class('ul');
var second_work_points=create_list(second_work_content,4);
second_work_points[0].innerHTML="Arranging presentations and pitch deck.";
second_work_points[1].innerHTML="Designing a PR plan and establishing important focus points.";
second_work_points[2].innerHTML="Designing, creating and managing content across multiple communication platforms.";
second_work_points[3].innerHTML="Building relationships with key media players.";

var education=create_class('h2');
education.innerHTML="<i style='font-size:24px' class='fas'>&#xf19d;</i> EDUCATION:";

var first_edu=create_class('h4');
first_edu.innerHTML="Engineering immersion Program, Thinkful, (11/2018-06/2018)";
var first_edu_content=create_class('ul');
var first_edu_points=create_list(first_edu_content,3);
first_edu_points[0].innerHTML="Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.";
first_edu_points[1].innerHTML='Developed a language learning app, "Foodie Phonetics" using spaced repetition and a linked list data structure. React was used to create the front end components while Node and MongoDB were used to createa backend that stores user data.';
first_edu_points[2].innerHTML="Developed a concierge app,. 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.";


document.body.append(section);
section.append(background,contact_area,line,main_content);
background.append(pic,name_area);
name_area.appendChild(my_name);
contact_area.append(contact);
main_content.append(profile,profile_content,skills,skill_content,work_experience,first_work,first_work_content,second_work,second_work_content,education,first_edu,first_edu_content);




function create_class(element,className) {
    var elem=document.createElement(element);
    if(className) {
        elem.setAttribute('class',className);
    }
    return elem;
}
function create_img(link) {
    var image=document.createElement('img');
    image.setAttribute('src',link);
    return image;
}
function create_list(element,number) {
    var array=[];
    for(var itr=0;itr<number;itr++) {
        array.push(document.createElement('li'));
        element.appendChild(array[itr]);
    }
    return array;
}
function create_label(name) {
    var value=document.createElement('label');
    value.innerHTML=name;
    return value;
}