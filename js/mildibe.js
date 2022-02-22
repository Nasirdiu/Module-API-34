const searchFood = async () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  //clear data
  searchInput.value = "";
  //error dake te hba pari na
  if (searchText == "") {
  } else {
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => displayMeals(data.meals));
    //fetch or way ata diea same kaj korbe
    try {
      const res = await fetch(url);
      const data = await res.json();
      displayMeals(data.meals);
    } catch (error) {
      alert(error);
    }
  }
};
//.....................................................................................

const displayMeals = (melas) => {
  // console.log(melas);
  const searchResult = document.getElementById("search-result");
  //clear data
  //   searchResult.innerHTML='';
  searchResult.textContent = "";

  //error daka te hba parice na
  if (melas.length == 0) {
  }
  melas.forEach((mals) => {
    // console.log(mals);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div onclick="loadditles('${mals.idMeal}')" class="card">
    <img src="${mals.strMealThumb}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${mals.strMeal}</h5>
      <p class="card-text">
        ${mals.strInstructions.slice(0, 200)}
      </p>
    </div>
  </div>
        `;
    searchResult.appendChild(div);
  });
};
//...........................................................................................

const loadditles = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeal(data.meals[0]));
};
//.........................................................................................
const displayMeal = (meals) => {
  //   console.log(meals);

  const mealsDitles = document.getElementById("meals-ditles");
  const div = document.createElement("div");
  mealsDitles.textContent = "";
  div.classList.add("card");
  div.innerHTML = `
    <img width= "50px" src="${
      meals.strMealThumb
    }" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meals.strMeal}</h5>
              <p class="card-text">
                ${meals.strInstructions.slice(0, 200)}
              </p>
              <a target='black' href="${
                meals.strYoutube
              }" class="btn btn-primary">Go somewhere</a>
            </div>
    `;
  mealsDitles.appendChild(div);
};
