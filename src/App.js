import React from "react";
import { ChakraProvider, Box, Flex, theme, VStack } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import ChatList from "./components/ChatList";
import NewChat from "./components/NewChat";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex h="100vh" position="relative">
          {" "}
          {/* Sidebar */}
          <VStack width="20%" minW="250px" spacing={4} align="stretch">
            <Sidebar />
            <Box position="absolute" bottom="0" left="12" p={12}>
              <ColorModeSwitcher justifySelf="flex-start" />
            </Box>
          </VStack>
          {/* Main content area */}
          <Flex direction="column" flex="1" p={3} overflowY="auto">
            {/* Chat List */}
            <Box flex="1" overflowY="auto">
              <ChatList />
            </Box>
            {/* New Chat Input Area */}
            <NewChat />
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
