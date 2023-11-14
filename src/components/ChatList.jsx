import React from 'react';
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { AiOutlineMessage } from 'react-icons/ai';

// Mock data as placeholders to display chat messages
const chats = [
  { id: 1, title: 'Lorem ipsum', summary: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', time: 'Just now' },
  { id: 2, title: 'Lorem ipsum', summary: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', time: '2 Min ago' },
  { id: 3, title: 'Lorem ipsum', summary: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', time: '1 Day ago' },
];

function ChatList() {
  const chatBgColor = useColorModeValue('gray.100', 'gray.700');
  const chatTextColor = useColorModeValue('gray.600', 'gray.200');
  const iconSize = '24px'; 
  const textSize = 'md'; 
  const summarySize = 'sm'; 
  const timeSize = 'sm'; 

  return (
    <Box bg={chatBgColor} w="full" p={4} color={chatTextColor} overflowY="auto">
      <List spacing={6}> 
        {chats.map((chat) => (
          <ListItem key={chat.id} p={3} >
            <ListIcon>
              <AiOutlineMessage size={iconSize} color="green.500" />
            </ListIcon>
            <Box pl={3}> 
              <Text fontWeight="bold" fontSize={textSize}>{chat.title}</Text>
              <Text fontSize={summarySize}>{chat.summary}</Text>
              <Text fontSize={timeSize} color="gray.500">{chat.time}</Text>
            </Box>
            <Divider my={4} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default ChatList;
