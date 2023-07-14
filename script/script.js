
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