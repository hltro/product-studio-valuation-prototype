import React from 'react';
import { Box, Flex, Text, useColorModeValue, HStack, VStack, Avatar } from '@chakra-ui/react';

// Mock data to display messages
const messages = [
  { id: 1, text: 'How do I evaluate a commercial real estate property?', isUser: true },
  { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ', isUser: false },
  { id: 3, text: 'How do I evaluate a commercial real estate property?', isUser: true },
  { id: 4, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', isUser: false },
];

function ChatList() {
  const bgColor = useColorModeValue('gray.100', 'gray.800'); // Darker background for dark mode
  const userMessageColor = useColorModeValue('blue.600', 'blue.300'); // Lighter blue for dark mode
  const appMessageColor = useColorModeValue('gray.200', 'gray.600'); // Darker gray for app messages in dark mode
  const userTextColor = useColorModeValue('white', 'gray.50'); // White text for user in light mode
  const appTextColor = useColorModeValue('gray.700', 'gray.50'); // Very light text for dark mode
  const realEstateAgentName = 'Real Estate Agent Alina';
  const chatbotName = 'Valuation Assistant';

  return (
    <VStack
      bg={bgColor}
      p={4}
      height="calc(100vh - 120px)"
      overflowY="auto"
      spacing={4}
      align="stretch"
      borderRadius="16px"
    >
      {messages.map((message, index) => (
        <Box key={index} w="full">
          <Flex
            direction="column"
            alignItems={message.isUser ? 'flex-end' : 'flex-start'}
            mb={2}
          >
            <Box
              bg={message.isUser ? userMessageColor : appMessageColor}
              color={message.isUser ? userTextColor : appTextColor}
              p={3}
              borderRadius="lg"
              maxW="70%"
            >
              <Text textAlign="left">{message.text}</Text>
            </Box>
          </Flex>
          <HStack spacing={2} justifyContent={message.isUser ? 'flex-end' : 'flex-start'}>
            <Avatar
              name={message.isUser ? realEstateAgentName : chatbotName}
              src={message.isUser ? 'path_to_user_avatar' : 'path_to_chatbot_avatar'}
              size="sm"
            />
            <Text fontSize="sm" fontWeight="medium">
              {message.isUser ? realEstateAgentName : chatbotName}
            </Text>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
}


export default ChatList;