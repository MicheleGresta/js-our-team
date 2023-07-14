
const nome1 = document.querySelector("[name='nome1']");
const nome2 = document.querySelector("[name='nome2']");
const nome3 = document.querySelector("[name='nome3']");
const nome4 = document.querySelector("[name='nome4']");
const nome5 = document.querySelector("[name='nome5']");
const nome6 = document.querySelector("[name='nome6']");

const role1 = document.querySelector("[name='role1']");
const role2 = document.querySelector("[name='role2']");
const role3 = document.querySelector("[name='role3']");
const role4 = document.querySelector("[name='role4']");
const role5 = document.querySelector("[name='role5']");
const role6 = document.querySelector("[name='role6']");

const primaFoto = document.querySelector("[name='foto1']");
const secondaFoto = document.querySelector("[name='foto2']");
const terzaFoto = document.querySelector("[name='foto3']");
const quartaFoto = document.querySelector("[name='foto4']");
const quintaFoto = document.querySelector("[name='foto5']");
const sensaFoto = document.querySelector("[name='foto6']");

const teamContainer = document.querySelector("[name='team-container']");
const cardBody = document.querySelector("[class='card-title']");

const teamMember = [{
    nome: "Wayne Barnett",
    role: "Founder & CEO",
    img: "./img/wayne-barnett-founder-ceo.jpg",
},
{
    nome: "Angela Caroll",
    role: "Chief Editor",
    img: "./img/angela-caroll-chief-editor.jpg"
},
{
    nome: "Walter Gordon",
    role: "Office Manager",
    img: "./img/walter-gordon-office-manager.jpg"
},
{
    nome: "Angela Lopez",
    role: "Social Media Manager",
    img: "./img/angela-lopez-social-media-manager.jpg"
},
{
    nome: "Scott Estrada",
    role: "Developer",
    img: "./img/scott-estrada-developer.jpg"
},
{
    nome: "Barbara Ramos",
    role: "Graphic Designer",
    img: "./img/barbara-ramos-graphic-designer.jpg"
}];

for (const key in teamMember) {
    console.log(teamMember[key]);
    const singleMember = teamMember[key];
}

memberCard()

function memberCard() {
    for (let i = 0; i < teamMember.length; i++) {

        const newMemberCard = document.createElement("div");
        newMemberCard.classList.add("card-width");
        newMemberCard.innerHTML = (
            '<img src="' + teamMember[i].img + '" class="card-img-top" alt="";>'
            + '<h5 class="card-title">' + teamMember[i].nome + '</h5>'
            + '<p class="card-text">' + teamMember[i].role + '</p>'
        )
            teamContainer.append(newMemberCard)
    }
}