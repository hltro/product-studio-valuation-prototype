import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  VStack,
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
  const borderRadiusValue = "16px";
  const boxShadowValue = useColorModeValue("base", "dark-lg");

  const handleSelectCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const sidebarHeight = "calc(100vh - 32px)";

  // Handle messages
  const [messages, setMessages] = useState([]);

  const handleNewMessage = (newMessageText, isUser) => {
    const newMessage = {
      id: messages.length + 1,
      text: newMessageText,
      isUser: isUser,
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex justify="center" align="center" h="100vh">
          {/* Sidebar with rounded corners */}
          <Box
            bg={sidebarBgColor}
            h={sidebarHeight}
            p={2}
            borderRadius={borderRadiusValue}
            boxShadow={boxShadowValue}
            m={2}
          >
            <VStack h="full" justify="space-between">
              <Sidebar onSelectCategory={handleSelectCategory} />
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
              boxShadow={boxShadowValue}
              m={2}
            >
              <ExpandableList category={selectedCategory} />
            </Box>
          )}

          {/* Main content area for ChatList and NewChat */}
          <Flex direction="column" flex="1" overflowY="auto" p={2}>
            <Box w="full" pt={8} pb={2} px={2}>
              <ChatList messages={messages} />
            </Box>
            <Box w="full" pt={2} pb={7} px={2}>
              <NewChat onSendNewMessage={handleNewMessage} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
