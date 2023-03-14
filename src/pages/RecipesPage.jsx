import { Center, Heading, Box } from "@chakra-ui/react";
import { useState } from "react";
import { RecipeChoice } from "../../components/RecipeChoice";
import { RecipeSearch } from "../../components/RecipeSearch";

export const RecipesPage = () => {
  const [userRecipe, setUserRecipe] = useState();

  const greeting = "Winc Recipe checker";

  return (
    <Box className="App">
      <Center flexDir="column" minHeight={"100vh"} bg={"#fff"}>
        {userRecipe ? (
          <RecipeChoice recipe={userRecipe} onClick={setUserRecipe} />
        ) : (
          <>
            <Heading
              size="3xl"
              color="#000"
              marginTop={"50px"}
              textAlign={"center"}
            >
              {greeting}
            </Heading>
            <RecipeSearch onClick={setUserRecipe} />
          </>
        )}
      </Center>
    </Box>
  );
};
