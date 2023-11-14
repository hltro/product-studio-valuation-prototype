import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import NewChat from "./components/NewChat";
import ExpandableList from "./components/ExpandableList";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const sidebarBgColor = useColorModeValue("gray.100", "gray.700");
  const expandableListBgColor = useColorModeValue("white", "gray.800");

  const handleSelectCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  // Adjust the height of the Sidebar to be a little less than 100vh to give whitespace
  const sidebarHeight = "calc(100vh - 32px)"; // Adjust '32px' to increase/decrease whitespace
  const borderRadiusValue = "16px"; // Adjust for desired rounded corners

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={useColorModeValue("white", "gray.800")}
      >
        <Flex justify="center" align="center" h="100vh" p={3}>
          {/* Sidebar with rounded corners */}
          <Box
            bg={sidebarBgColor}
            h={sidebarHeight}
            p={2}
            borderRadius={borderRadiusValue}
            boxShadow="base" // Optional: adds shadow for better separation
          >
            <VStack h="full" justify="space-between">
              {" "}
              {/* Stack for internal alignment */}
              <Box w="full">
                <Sidebar onSelectCategory={handleSelectCategory} />
              </Box>
              <ColorModeSwitcher justifySelf="flex-end" />
            </VStack>
          </Box>

          {/* Conditionally render the ExpandableList */}
          {selectedCategory && (
            <Box
              w={{ base: "full", md: "250px" }}
              bg={expandableListBgColor}
              h={sidebarHeight}
              overflowY="auto"
              borderRadius={borderRadiusValue}
              boxShadow="base" // Optional: adds shadow for better separation
            >
              <ExpandableList category={selectedCategory} />
            </Box>
          )}

          {/* Main content area for ChatList and NewChat */}
          <VStack flex="1" p={2} overflowY="auto">
            <Box w="full">
              <ChatList />
            </Box>
            {/* Add vertical margin to create space between ChatList and NewChat */}
            <Box w="full" mt={1}>
              <NewChat />
            </Box>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
