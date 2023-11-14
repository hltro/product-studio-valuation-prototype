import React, { useRef } from 'react';
import { Input, IconButton, Flex, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineFile, AiOutlineAudio } from 'react-icons/ai';

function NewChat() {
  const fileInputRef = useRef(null);

  // Define colors using useColorModeValue
  const inputBgColor = useColorModeValue('blue.50', 'gray.700'); // Adjust dark mode color as needed
  const inputTextColor = useColorModeValue('gray.700', 'white');
  const iconButtonBg = useColorModeValue('blue.200', 'gray.600'); // Example for the icon button bg in dark mode
  const iconColor = useColorModeValue('gray.500', 'white'); // Adjust icon color for dark mode

  // To-Do: Function to handle sending a new message or starting a new chat
  const handleSend = () => {
    // Implement sending message logic
  };

  // To-Do: Function to handle file input click
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // To-Do: Function to handle file selection
  const handleFileChange = (event) => {
    // Implement file send logic
  };

  // To-Do: Function to handle voice input
  const handleVoiceInput = () => {
    // Implement voice input logic
  };

  return (
    <Flex
      p={4}
      bg={inputBgColor} // Use the color mode value for background
      align="center"
      w="full"
      borderRadius="16px"
    >
      <Input
        placeholder="Type your message here..."
        size="lg" 
        mr={2}
        flex={1} 
        height="60px" 
        fontSize="lg"
        bg={inputBgColor} // Use the color mode value for input background
        color={inputTextColor} // Use the color mode value for text color
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
        bg={iconButtonBg} // Use the color mode value for icon button background
        color={iconColor} // Icon color
      />
      <IconButton
        icon={<AiOutlineAudio size="24px" />}
        onClick={handleVoiceInput}
        mr={2}
        size="lg"
        bg={iconButtonBg} // Use the color mode value for icon button background
        color={iconColor} // Icon color
      />
      <IconButton
        icon={<AiOutlineSend size="24px" />}
        colorScheme="blue"
        onClick={handleSend}
        size="lg"
        bg={iconButtonBg} // Use the color mode value for icon button background
        color={iconColor} // Icon color
      />
    </Flex>
  );
}

export default NewChat;
