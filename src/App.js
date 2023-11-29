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
  const sidebarBgColor = useColorModeValue("gray.100", "gray.700");
  const expandableListBgColor = useColorModeValue("white", "gray.800");
  const borderRadiusValue = "16px";
  const boxShadowValue = useColorModeValue("base", "dark-lg");
  const sidebarHeight = "calc(100vh - 32px)";

  // Handle category selection
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  // Handle messages
  const [messages, setMessages] = useState([]);

  const handleNewMessage = async (newMessageText, isUser) => {
    if (isUser) {
      // Send the user's message to the backend and await the response
      try {
        const response = await fetch("http://localhost:5000/get_llm_answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: newMessageText }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();

        // Assuming responseData contains the AI's reply in a field named 'reply'
        const aiReply = responseData.reply;

        // Add the AI's reply to the messages state
        setMessages([
          ...messages,
          { id: messages.length + 1, text: aiReply, isUser: false },
        ]);
      } catch (error) {
        console.error("Failed to fetch AI response:", error);
      }
    }

    // Add the user's message to the messages state
    setMessages([
      ...messages,
      { id: messages.length + 1, text: newMessageText, isUser },
    ]);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Flex justify="center" align="center" h="100vh">
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
