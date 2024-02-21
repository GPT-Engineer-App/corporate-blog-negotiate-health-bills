import React from "react";
import { Box, Container, Heading, Text, Image, List, ListItem, ListIcon, Button, VStack, HStack, Divider } from "@chakra-ui/react";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading as="h1" size="xl" textAlign="center">
            How to Negotiate Health Bills
          </Heading>
          <Text mt={4} textAlign="center" color="gray.600">
            A comprehensive guide for employees and HR professionals
          </Text>
        </Box>

        <Image borderRadius="md" src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYmlsbGluZ3xlbnwwfHx8fDE3MDg1NDQxODF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Healthcare billing" />

        <Box>
          <Heading as="h2" size="lg">
            Understanding Your Health Bill
          </Heading>
          <Text mt={4}>Before you can negotiate a health bill, it's important to understand the charges. Review your bill for any errors, and get a clear explanation of the services you're being billed for.</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">
            Negotiation Strategies
          </Heading>
          <List spacing={3} mt={4}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <strong>Communicate Early:</strong> Reach out to the billing department as soon as you receive your bill.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <strong>Be Informed:</strong> Research the average cost of the services you received.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <strong>Offer to Pay in Full:</strong> Sometimes, a lump-sum payment can lead to discounts.
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              <strong>Payment Plans:</strong> If you can't pay in full, ask if you can arrange a payment plan.
            </ListItem>
          </List>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">
            Resources and Assistance
          </Heading>
          <Text mt={4}>There are resources available to help you negotiate your health bills. Consider contacting a medical billing advocate or utilizing online resources for extra support.</Text>
          <HStack spacing={4} mt={4}>
            <Button leftIcon={<FaExternalLinkAlt />} colorScheme="teal">
              Find an Advocate
            </Button>
            <Button leftIcon={<FaExternalLinkAlt />} colorScheme="teal">
              Online Resources
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
