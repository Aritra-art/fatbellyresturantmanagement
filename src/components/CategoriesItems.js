import React, { useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";

function CategoriesItems(props) {
  let [categoryName, setCategoryName] = useState("");

  const categoryNameHandler = (e) => {
    categoryName = e.target.textContent;
    setCategoryName(categoryName);
    props.getCategoryName(categoryName);
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="5">
      {props.uniqueCategory.map((item, index) => (
        <Box key={index} m={1} p={1} onClick={(e) => categoryNameHandler(e)}>
          <Button color={"white"} bg={props.styleAColorHex}>
            {item}
          </Button>
        </Box>
      ))}
    </Flex>
  );
}

export default CategoriesItems;
