const elevenSheildRecipe = {
  leatherStrips: 2,
  ironIgnot: 1,
  refineMoonstone: 4,
};

const elevenGauntletsRecipe = {
  ...elevenSheildRecipe,
  leather: 1,
  refineMoonstone: 4,
};

console.log(elevenSheildRecipe);
console.log(elevenGauntletsRecipe);

import React, { useState } from "react";

/**
 * @author
 * @function Recipes
 **/

export const Recipes = (props) => {
  const [recipes, setRecipes] = useState({});

  return (
    <div>
      <h3>Currnet Recipe:</h3>
      <button onClick={() => setRecipes(elevenSheildRecipe)}>
        Eleven Sheild Recipe
      </button>
      <button onClick={() => setRecipes(elevenGauntletsRecipe)}>
        eleven Gauntlets Recipe
      </button>
      <ul>
        {Object.keys(recipes).map((recipe) => (
          <li key={recipe}>
            {recipe}: {recipes[recipe]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
