const recipes = [];
const recipeList = document.getElementById('recipe-list');
const recipeForm = document.getElementById('recipe-form');
const addEditButton = document.getElementById('add-edit-button');
function displayRecipes() {
    recipeList.innerHTML = '';
  recipes.forEach((recipe, index) => {
        const recipeItem = document.createElement('div');
        recipeItem.classList.add('recipe-item');
        recipeItem.innerHTML = `
            <h3>${recipe.name}</h3>
            <p><strong>Ingredients:</strong></p>
            <p>${recipe.ingredients}</p>
            <button onclick="editRecipe(${index})">Edit</button>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeList.appendChild(recipeItem);
    });
}

function addRecipe() {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;

    if (name && ingredients) {
        recipes.push({ name, ingredients });
        displayRecipes();
        clearForm();
    }
}

function editRecipe(index) {
    const selectedRecipe = recipes[index];
    document.getElementById('recipe-name').value = selectedRecipe.name;
    document.getElementById('ingredients').value = selectedRecipe.ingredients;

    addEditButton.innerHTML = 'Update Recipe';

    addEditButton.onclick = function () {
        updateRecipe(index);
    };
}

function updateRecipe(index) {
    const name = document.getElementById('recipe-name').value;
    const ingredients = document.getElementById('ingredients').value;

    if (name && ingredients) {
        recipes[index] = { name, ingredients };
        displayRecipes();
        clearForm();
        addEditButton.innerHTML = 'Add Recipe';
        addEditButton.onclick = addRecipe;
    }
}

function deleteRecipe(index) {
    recipes.splice(index, 1);
    displayRecipes();
}

function clearForm() {
    document.getElementById('recipe-name').value = '';
    document.getElementById('ingredients').value = '';
}

addEditButton.addEventListener('click', addRecipe);
displayRecipes();
