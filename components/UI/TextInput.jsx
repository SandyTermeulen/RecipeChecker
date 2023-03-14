import { Input } from "@chakra-ui/react";

export const TextInput = ({ onChange, ...props }) => (
  <Input
    variant="outline"
    placeholder="Search recipes"
    focusBorderColor="#9AE6B4"
    marginTop={"3rem"}
    w={350}
    mb={8}
    onChange={onChange}
    {...props}
  />
);
