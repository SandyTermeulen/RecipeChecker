import { useState } from "react";
import { data } from "../src/utils/data";
import { RecipeItems } from "./RecipeItems";
import { TextInput } from "./UI/TextInput";

export const RecipeSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const recipes = data.hits;
  const recipe = recipes.map((recipe) => {
    return recipe.recipe;
  });

  const matchedRecipes = recipe.filter((recipe) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <>
      <TextInput onChange={handleChange} />
      <RecipeItems onClick={onClick} recipes={matchedRecipes} />
    </>
  );
};
