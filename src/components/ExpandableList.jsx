import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';

// Placeholder data for past chats and valuation models
const pastChatsData = [
  { id: 1, title: 'Chat 1', summary: 'Summary of chat 1' },
  { id: 2, title: 'Chat 2', summary: 'Summary of chat 2' },
];
const valuationModelsData = [
  { id: 1, title: 'Model 1', summary: 'Summary of model 1' },
  { id: 2, title: 'Model 2', summary: 'Summary of model 2' },
];

function ExpandableList({ category }) {
  const data = category === 'Past Chats' ? pastChatsData : valuationModelsData;
  const listBgColor = useColorModeValue('white', 'gray.700');
  const hoverBgColor = useColorModeValue('gray.100', 'gray.600');

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {category}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} bg={listBgColor}>
          <List spacing={4}>
            {data.map(item => (
              <ListItem 
                key={item.id} 
                p={2} 
                _hover={{ bg: hoverBgColor }}
                cursor="pointer"
              >
                <Box fontWeight="bold">{item.title}</Box>
                <Box fontSize="sm">{item.summary}</Box>
              </ListItem>
            ))}
          </List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default ExpandableList;
