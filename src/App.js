import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  theme,
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

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex h="100vh">
          {/* Sidebar */}
          <Box bg={sidebarBgColor} p={3} h="full">
            <Sidebar onSelectCategory={handleSelectCategory} />
            <Box mt="auto" p={4}>
              <ColorModeSwitcher justifySelf="flex-start" />
            </Box>
          </Box>

          {/* ExpandableList */}
          {selectedCategory && (
            <Box
              w={{ base: "full", md: "250px" }}
              bg={expandableListBgColor}
              p={4}
              h="full"
              overflowY="auto"
            >
              <ExpandableList category={selectedCategory} />
            </Box>
          )}

          {/* Main content area for ChatList and NewChat */}
          <Flex direction="column" flex="1" p={3} overflowY="auto">
            <ChatList />
            <NewChat />
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
