import React, { useRef } from 'react';
import { Input, IconButton, Flex, useToast } from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineFile, AiOutlineAudio } from 'react-icons/ai';

function NewChat() {
  const toast = useToast();
  const fileInputRef = useRef(null);

  // To-Do: Function to handle sending a new message or starting a new chat
  const handleSend = () => {
    // To-Do: Implement sending message logic
    // toast({
    //   title: 'Message sent.',
    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    // });
  };

  // To-Do: Function to handle file input click
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // To-Do: Function to handle file selection
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // To-Do: Implement file send logic
      // toast({
      //   title: 'File selected.',
      //   description: files[0].name,
      //   status: 'info',
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  // To-Do: Function to handle voice input
  const handleVoiceInput = () => {
    // Implement voice input logic
  };

  return (
    <Flex
      p={4}
      bg="blue.50"
      align="center"
      w="full"
    >
      <Input
        placeholder="Type your message here..."
        size="lg" 
        mr={2}
        flex={1} 
        height="60px" 
        fontSize="lg" 
      />
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={handleFileChange}
      />
      <IconButton
        icon={<AiOutlineFile size="24px" />}
        onClick={handleFileClick}
        mr={2}
        size="lg"
      />
      <IconButton
        icon={<AiOutlineAudio size="24px" />}
        onClick={handleVoiceInput}
        mr={2}
        size="lg"
      />
      <IconButton
        icon={<AiOutlineSend size="24px" />}
        colorScheme="blue"
        onClick={handleSend}
        size="lg"
      />
    </Flex>
  );
}

export default NewChat;
