import {
  Center,
  Image,
  Text,
  WrapItem,
  Tag,
  Box,
  Flex,
} from "@chakra-ui/react";

export const RecipeItem = ({ recipe, onClick }) => {
  return (
    <WrapItem>
      <Center cursor={"pointer"} onClick={() => onClick(recipe)}>
        <Box
          key={recipe.id}
          maxW={270}
          minHeight={420}
          bg={"white"}
          boxShadow={"md"}
          borderRadius={"4px"}
          objectFit={"cover"}
          alignItems={"center"}
        >
          <Image
            src={recipe.image}
            width={270}
            height={150}
            borderTopRadius={"4px"}
            objectFit="cover"
          />
          <Text
            color={"grey"}
            fontSize={"1rem"}
            marginTop={"5px"}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            {recipe.mealType}
          </Text>
          <Text
            fontSize={"18px"}
            fontWeight={"bold"}
            margin={"1rem"}
            textAlign={"center"}
          >
            {recipe.label}
          </Text>
          <Flex
            padding={"10px"}
            gap={2}
            flexWrap={"wrap"}
            width={250}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {recipe.healthLabels
              .filter((health) => health === "Vegetarian" || health === "Vegan")
              .map((veg) => (
                <Tag
                  key={self.crypto.randomUUID()}
                  variant="outline"
                  colorScheme={"green"}
                  backgroundColor={"#fff"}
                  margin={"2px"}
                >
                  {veg}
                </Tag>
              ))}

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
          </Flex>
          <Text
            color={"grey"}
            fontSize={"1rem"}
            marginTop={"5px"}
            textAlign={"center"}
            textTransform={"uppercase"}
            alignContent={"flex-end"}
          >
            Dish: {recipe.dishType}
          </Text>
        </Box>
      </Center>
    </WrapItem>
  );
};
