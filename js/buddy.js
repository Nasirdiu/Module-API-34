const buddy = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddy(data));
};

const displayBuddy = (data) => {
  const buddys = data.results;
  console.log(data.results);
  const disbuddy = document.getElementById("disbuddy");
  for (const buddy of buddys) {
    const p = document.createElement("p");
    p.innerText = `Name:${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Gender : ${buddy.gender} street--  ${buddy.location.street.number} Name--${buddy.location.street.name} email--${buddy.email} ${buddy.cell}Date-- ${buddy.dob.date}`;
    disbuddy.appendChild(p);
  }
};
