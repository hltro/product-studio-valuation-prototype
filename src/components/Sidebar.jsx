import React from 'react';
import {
  Box,
  VStack,
  Button,
  useColorModeValue,
  Text,
  Heading
} from '@chakra-ui/react';
import { BiConversation } from 'react-icons/bi';
import { DiGoogleAnalytics } from 'react-icons/di';
import { AiOutlineCalculator,AiTwotoneSetting } from 'react-icons/ai';

function Sidebar() {
  const sidebarBgColor = useColorModeValue('gray.100', 'gray.700');
  const sidebarTextColor = useColorModeValue('gray.600', 'gray.200');

  const iconSize = '24px';

  return (
    <Box
      bg={sidebarBgColor}
      w={{ base: 'full', md: '250px' }} 
      px={4}
      py={5}
      h="full"
      color={sidebarTextColor}
    >
      <VStack spacing={4} align="stretch">
        <Heading size="xl" mb={2}> 
          Valuation Chatbot
        </Heading>
        <Text fontSize="20px" color="#f0ab3c" fontWeight='bold'> 
          CA Ventures
        </Text>
        {/* Menu Items */}
        <Button
          variant="ghost"
          leftIcon={<BiConversation size={iconSize} />}
          justifyContent="flex-start"
          iconSpacing={4}
          size="lg" 
        >
          Past Chats
        </Button>
        <Button
          variant="ghost"
          leftIcon={<AiOutlineCalculator size={iconSize} />}
          justifyContent="flex-start"
          iconSpacing={4}
          size="lg" 
        >
          Valuation Models
        </Button>
        <Button
          variant="ghost"
          leftIcon={<DiGoogleAnalytics size={iconSize} />}
          justifyContent="flex-start"
          iconSpacing={4}
          size="lg" 
        >
          Analytics
        </Button>
        <Button
          variant="ghost"
          leftIcon={<AiTwotoneSetting size={iconSize} />}
          justifyContent="flex-start"
          iconSpacing={4}
          size="lg" 
        >
          Setting
        </Button>
      </VStack>
    </Box>
  );
}

export default Sidebar;
