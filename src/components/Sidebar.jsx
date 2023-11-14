import React from 'react';
import {
  Box,
  VStack,
  Button,
  Heading,
  Text,
  Divider,
  Badge,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import { BiConversation } from 'react-icons/bi';
import { AiOutlineCalculator, AiTwotoneSetting, AiOutlineSearch } from 'react-icons/ai';

function Sidebar({ onSelectCategory }) {
  const sidebarBgColor = useColorModeValue('gray.100', 'gray.700');
  const sidebarTextColor = useColorModeValue('gray.600', 'gray.200');
  const dividerColor = useColorModeValue('gray.200', 'gray.600');
  const hoverBgColor = useColorModeValue('gray.300', 'gray.500');
  const badgeBgColor = useColorModeValue('green.500', 'green.200');
  const badgeTextColor = useColorModeValue('white', 'gray.800');

  const iconSize = '28px';
  const fontSize = '18px'; 
  const badgeFontSize = '1em'; 

  // Mock numbers for demonstration purposes
  const pastChatsCount = 5;
  const valuationModelsCount = 3;

  const menuItems = [
    { icon: BiConversation, text: 'Past Chats', count: pastChatsCount },
    { icon: AiOutlineCalculator, text: 'Valuation Models', count: valuationModelsCount },
    { icon: AiOutlineSearch, text: 'Search' },
    { icon: AiTwotoneSetting, text: 'Setting' },
  ];

  return (
    <Box
      bg={sidebarBgColor}
      w={{ base: 'full', md: '300px' }}
      px={4}
      py={5}
      h="full"
      color={sidebarTextColor}
    >
      <VStack spacing={4} align="stretch">
        <Heading size="2xl" mb={2}>Valuation Chatbot</Heading>
        <Text fontSize="xl" color="f0ab3c" fontWeight='bold'>CA Ventures</Text>
        <Divider my={4} borderColor={dividerColor} />
        {/* Menu Items */}
        {menuItems.map((item, index) => (
          <Button
            key={index} // Ensure unique keys for list items
            variant="ghost"
            justifyContent="flex-start"
            iconSpacing={4}
            size="lg"
            fontSize={fontSize}
            _hover={{ bg: hoverBgColor }}
            w="full"
            onClick={() => onSelectCategory(item.text)}
            rightIcon={
              item.count !== undefined ? (
                <Badge 
                  bg={badgeBgColor}
                  color={badgeTextColor}
                  ml={1} 
                  sx={{ fontSize: badgeFontSize }}
                >
                  {item.count}
                </Badge>
              ) : null
            }
          >
            <HStack>
              <Box as={item.icon} size={iconSize} color={sidebarTextColor} />
              <Text flex={1}>{item.text}</Text>
            </HStack>
          </Button>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
