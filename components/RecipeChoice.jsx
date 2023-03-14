import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  Tag,
  UnorderedList,
  ListItem,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
} from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

export const RecipeChoice = ({ recipe, onClick }) => {
  return (
    <Box
      key={recipe.id}
      maxW={800}
      minHeight={420}
      bg={"white"}
      boxShadow={"md"}
      borderRadius={"4px"}
    >
      <Image src={recipe.image} width={800} height={400} objectFit="cover" />

      <SimpleGrid columns={[1, 1, 2]} spacing={5}>
        <Box padding={"20px"}>
          <Flex
            flexWrap={"wrap"}
            width={380}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Text color={"grey"} fontSize={"1rem"} textTransform={"uppercase"}>
              {recipe.mealType}
            </Text>
            <Text fontSize={"18px"} fontWeight={"bold"} margin={"1rem"}>
              {recipe.label}
            </Text>
          </Flex>
          <Text margin={"1rem"}>
            Total cooking time:{recipe.totalTime} minutes
          </Text>
          <Text margin={"1rem"}>Servings: {recipe.yield}</Text>
          <Text margin={"1rem"} fontWeight={"bold"}>
            Ingredients
          </Text>
          {recipe.ingredientLines.map((ingredient) => (
            <UnorderedList key={self.crypto.randomUUID()}>
              <ListItem listStyleType="none">{ingredient}</ListItem>
            </UnorderedList>
          ))}
          <TableContainer marginTop={"2rem"}>
            <Table variant={"simple"}>
              <Thead>
                <Tr>
                  <Th>Nutrients</Th>
                  <Th> </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Calories</Td>
                  <Td isNumeric>{Math.round(recipe.calories)}</Td>
                </Tr>
                <Tr>
                  <Td>Carbs</Td>
                  <Td isNumeric>
                    {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Protein</Td>
                  <Td isNumeric>
                    {Math.round(recipe.totalNutrients.PROCNT.quantity)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Fat</Td>
                  <Td isNumeric>
                    {Math.round(recipe.totalNutrients.FAT.quantity)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Cholesterol</Td>
                  <Td isNumeric>
                    {Math.round(recipe.totalNutrients.CHOLE.quantity)}
                  </Td>
                </Tr>
                <Tr>
                  <Td>Sodium</Td>
                  <Td isNumeric>
                    {Math.round(recipe.totalNutrients.NA.quantity)}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Center>
            <Button
              variant="outline"
              colorScheme="teal"
              marginTop={"2rem"}
              onClick={() => onClick()}
            >
              Go back to homepage
            </Button>
          </Center>
        </Box>

        <Box padding={"20px"}>
          <Text
            color={"grey"}
            fontSize={"1rem"}
            marginTop={"5px"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            Dish: {recipe.dishType}
          </Text>
          <Flex direction={"column"}>
            <Box>
              <Text margin={"1rem"} fontWeight={"bold"} textAlign={"center"}>
                Health labels:
              </Text>
              {recipe.healthLabels.map((health) => (
                <Tag
                  key={self.crypto.randomUUID()}
                  variant="outline"
                  colorScheme={"green"}
                  backgroundColor={"#fff"}
                  margin={"2px"}
                >
                  {health}
                </Tag>
              ))}
            </Box>

            <Box>
              <Text margin={"1rem"} fontWeight={"bold"} textAlign={"center"}>
                Diet labels:
              </Text>
              <Center>
                {recipe.dietLabels.map((diet) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    variant="outline"
                    colorScheme={"blue"}
                    backgroundColor={"#fff"}
                    margin={"2px"}
                  >
                    {diet}
                  </Tag>
                ))}
              </Center>
            </Box>
            <Box>
              <Text margin={"1rem"} fontWeight={"bold"} textAlign={"center"}>
                Cautions:
              </Text>
              <Center>
                {recipe.cautions.map((caution) => (
                  <Tag
                    key={self.crypto.randomUUID()}
                    variant="outline"
                    colorScheme={"red"}
                    backgroundColor={"#fff"}
                    margin={"2px"}
                  >
                    {`${caution}!`}
                  </Tag>
                ))}
              </Center>
            </Box>
            <Box></Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
