import React from 'react';
import { Box, Input, Button, Flex } from '@chakra-ui/react';

function NewChat() {
  // Function to handle sending a new message or starting a new chat
  const handleSend = () => {
    // Implement sending message logic
  };

  return (
    <Flex p={4} bg="blue.50">
      <Input
        placeholder="Type your message here..."
        mr={2}
      />
      <Button colorScheme="blue" onClick={handleSend}>Send</Button>
    </Flex>
  );
}

export default NewChat;
