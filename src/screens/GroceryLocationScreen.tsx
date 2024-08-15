import React from 'react';
import {Box, Text, VStack, Image, Center} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

// Import your image
import storeMapImage from '../../assets/store-map-placeholder.png';

type GroceryLocationScreenRouteProp = RouteProp<
  RootStackParamList,
  'GroceryLocation'
>;

type Props = {
  route: GroceryLocationScreenRouteProp;
};

const GroceryLocationScreen: React.FC<Props> = ({route}) => {
  const {item, brand} = route.params;

  // Generate random location details
  const latitude = (Math.random() * (90 - -90) + -90).toFixed(6);
  const longitude = (Math.random() * (180 - -180) + -180).toFixed(6);
  const shelfNumber = Math.floor(Math.random() * 20) + 1;
  const areaNumber = Math.floor(Math.random() * 10) + 1;
  const floor = Math.floor(Math.random() * 3) + 1;

  return (
    <Box flex={1} p={5} alignItems="center" backgroundColor="#D1E9F6">
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Location for {brand} {item}
      </Text>
      <Text mb={5}>Find your item in the store</Text>
      {/* Image dialog box */}
      <Center
        width="70%"
        height={210}
        mb={5}
        bg="#D1E9F6"
        borderRadius="md"
        shadow={2}
        overflow="hidden">
        <Image
          source={storeMapImage} // Use the imported image here
          alt="Store Map"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%', // Full width minus padding
            height: '100%', // Full height of the container
          }}
          resizeMode="contain"
        />
      </Center>
      <VStack space={2} alignItems="flex-start" w="full">
        <Text fontSize="lg" bg="white" p={2} borderRadius="md" shadow={9}>
          Coordinates: {latitude}, {longitude}
        </Text>
        <Text fontSize="lg" bg="white" p={2} borderRadius="md" shadow={6}>
          Shelf Number: {shelfNumber}
        </Text>
        <Text fontSize="lg" bg="white" p={2} borderRadius="md" shadow={3}>
          Area Number: {areaNumber}
        </Text>
        <Text fontSize="lg" bg="white" p={2} borderRadius="md" shadow={1}>
          Floor: {floor}
        </Text>
      </VStack>
    </Box>
  );
};

export default GroceryLocationScreen;
