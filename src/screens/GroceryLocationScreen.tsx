import React from 'react';
import {Image, Dimensions} from 'react-native';
import {Box, Text, VStack} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

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
  const shelfNumber = Math.floor(Math.random() * 100) + 1;
  const areaNumber = Math.floor(Math.random() * 10) + 1;
  const floor = Math.floor(Math.random() * 3) + 1;

  return (
    <Box flex={1} p={5} alignItems="center">
      <Text fontSize="2xl" fontWeight="bold" mb={5}>
        Location for {brand} {item}
      </Text>
      <Text mb={5}>Harvest bread stock</Text>
      <Image
        source={require('../../assets/store-map-placeholder.png')} // Update this path to your actual image
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: Dimensions.get('window').width - 40, // Full width minus padding
          height: 200, // Adjust this value as needed
          marginBottom: 20,
        }}
        resizeMode="contain"
      />
      <VStack space={2} alignItems="flex-start" w="full">
        <Text fontSize="lg">
          Coordinates: {latitude}, {longitude}
        </Text>
        <Text fontSize="lg">Shelf Number: {shelfNumber}</Text>
        <Text fontSize="lg">Area Number: {areaNumber}</Text>
        <Text fontSize="lg">Floor: {floor}</Text>
      </VStack>
    </Box>
  );
};

export default GroceryLocationScreen;
