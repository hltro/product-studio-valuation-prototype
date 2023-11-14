import React from 'react';
import { Box, Flex, Text, useColorModeValue, VStack } from '@chakra-ui/react';

// Mock data to display messages
const messages = [
  { id: 1, text: 'How do I make an HTTP request in Javascript?', isUser: true },
  { id: 2, text: 'You can use the fetch API or XMLHttpRequest for making HTTP requests.', isUser: false },
  { id: 1, text: 'How do I make an HTTP request in Javascript?', isUser: true },
  { id: 2, text: 'You can use the fetch API or XMLHttpRequest for making HTTP requests.', isUser: false },
  { id: 1, text: 'How do I make an HTTP request in Javascript?', isUser: true },
  { id: 2, text: 'You can use the fetch API or XMLHttpRequest for making HTTP requests.', isUser: false },
];

function ChatList() {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Darker background for dark mode
  const userMessageColor = useColorModeValue('blue.600', 'blue.300'); // Lighter blue for dark mode
  const appMessageColor = useColorModeValue('gray.200', 'gray.600'); // Darker gray for app messages in dark mode
  const userTextColor = useColorModeValue('white', 'gray.50'); // White text for user in light mode
  const appTextColor = useColorModeValue('gray.700', 'gray.50'); // Very light text for dark mode

  return (
    <VStack
      bg={bgColor}
      p={4}
      height="calc(100vh - 120px)"
      overflowY="auto"
      spacing={4}
      align="stretch"
    >
      {messages.map((message) => (
        <Flex
          key={message.id}
          justifyContent={message.isUser ? 'flex-end' : 'flex-start'}
          w="full"
        >
          <Box
            bg={message.isUser ? userMessageColor : appMessageColor}
            color={message.isUser ? userTextColor : appTextColor} 
            p={3}
            borderRadius="lg"
            maxW="70%"
          >
            <Text>{message.text}</Text>
          </Box>
        </Flex>
      ))}
    </VStack>
  );
}

export default ChatList;