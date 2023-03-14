import { Flex } from "@chakra-ui/react";
import { RecipeItem } from "./RecipeItem";

export const RecipeItems = ({ recipes, onClick }) => {
  return (
    <Flex gap={10} w="80%" flexWrap="wrap" justify={"center"}>
      {recipes.map((recipe) => (
        <RecipeItem key={recipe.id} recipe={recipe} onClick={onClick} />
      ))}
    </Flex>
  );
};
