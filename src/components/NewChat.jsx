import React, { useRef, useState } from 'react';
import { Input, IconButton, Flex, useColorModeValue } from '@chakra-ui/react';
import { AiOutlineSend, AiOutlineFile, AiOutlineAudio } from 'react-icons/ai';

function NewChat(props) {
  const [message, setMessage] = useState(''); // Initialize an empty message
  const fileInputRef = useRef(null);

  // Define colors using useColorModeValue
  const inputBgColor = useColorModeValue('blue.50', 'gray.700'); // Adjust dark mode color as needed
  const inputTextColor = useColorModeValue('gray.700', 'white');
  const iconButtonBg = useColorModeValue('blue.200', 'gray.600'); // Example for the icon button bg in dark mode
  const iconColor = useColorModeValue('gray.500', 'white'); // Adjust icon color for dark mode

  // Inside NewChat component
  const [inputText, setInputText] = useState('');

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      props.onSendNewMessage(inputText, true); // true indicates it's a user message
      setInputText(''); 
    }
  };

    // Function to handle sending a new message
  const handleSend = () => {
    console.log('Sending message:', message);
    setMessage('');
  };

  // Function to handle "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      // Call the 'handleSend' function when the "Enter" key is pressed
      handleSend();
    }
  };

  // To-Do: Function to handle file input click
  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  // To-Do: Function to handle file selection
  const handleFileChange = (event) => {
    // Implement file send logic
  };

  // // To-Do: Function to handle voice input
  const handleVoiceInput = () => {
    // Implement voice input logic
  };

  return (
    <Flex
      p={4}
      bg={inputBgColor} 
      align="center"
      w="full"
      borderRadius="16px"
    >
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSendClick(); // Call the 'handleSendClick' function when Enter is pressed
          }
        }}
        placeholder="Type your message here..."
        size="lg" 
        mr={2}
        flex={1} 
        height="60px" 
        fontSize="lg"
        bg={inputBgColor} 
        color={inputTextColor} 
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
        bg={iconButtonBg} 
        color={iconColor} 
      />
      <IconButton
        icon={<AiOutlineAudio size="24px" />}
        onClick={handleVoiceInput}
        mr={2}
        size="lg"
        bg={iconButtonBg} 
        color={iconColor} 
      />
      <IconButton
        icon={<AiOutlineSend size="24px" />}
        colorScheme="blue"
        onClick={handleSendClick}
        size="lg"
        bg={iconButtonBg} 
        color={iconColor} 
      />
    </Flex>
  );
}

export default NewChat;
