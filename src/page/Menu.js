import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { resturantInfo } from "../data/ResturantInfo";
import { menuList } from "../data/MenuList";

import Navbar from "../components/Navbar";
import IndividualItems from "../components/IndividualItems";
import CategoriesItems from "../components/CategoriesItems";

export default function Menu() {
  const [getCategoryName, setGetCategoryName] = useState("Burgers");

  const getCategory = (categoryName) => {
    setGetCategoryName(categoryName);
  };
  return (
    <>
      <Navbar companyName={resturantInfo.name} styleAColorHex={"#FF2C55"} />
      <Flex justifyContent="center" alignContent="center" my={2}>
        <Image minW={"300px"} maxW={"300px"} src={resturantInfo.logo} />
      </Flex>
      <CategoriesItems
        styleAColorHex={"#FF2C55"}
        getCategoryName={getCategory}
        uniqueCategory={Object.keys(menuList)}
      />
      <Flex
        flexWrap="wrap"
        m="5"
        justifyContent="center"
        borderColor="gray.100"
        alignContent={"center"}
      >
        {menuList[getCategoryName].length === 0 ? (
          <p>No Items Found !!</p>
        ) : (
          menuList[getCategoryName].map((item, index) => (
            <Box key={index}>
              <IndividualItems
                currency={"SGD"}
                item={item}
                styleAColorHex={"#FF2C55"}
              />
            </Box>
          ))
        )}
      </Flex>
      <Flex flexWrap="wrap" m="5" alignContent={"center"}>
        <Button bg={"grey"} color="white" onClick={() => {}}>
          Back
        </Button>
      </Flex>
    </>
  );
}
