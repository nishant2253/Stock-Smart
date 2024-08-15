import React, {useState} from 'react';
import {Box, Input, Button, Text, VStack, Image, Center} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

// Import your image
import compareImage from '../../assets/compare-room.png';

type GroceryCompareScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroceryCompare'
>;

type Props = {
  navigation: GroceryCompareScreenNavigationProp;
};

const GroceryCompareScreen: React.FC<Props> = ({navigation}) => {
  const [item, setItem] = useState('');
  const [type, setType] = useState('');

  const handleCompare = () => {
    if (item && type) {
      navigation.navigate('GroceryCompareResult', {item, type});
    }
  };

  return (
    <Box flex={1} p={5} backgroundColor="#D1E9F6">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        mb={5}
        textAlign="center"
        color="#2B6CB0">
        Compare Grocery Items
      </Text>
      <VStack space={4} mb={5}>
        <Box bg="white" borderRadius="md" shadow={2} p={2}>
          <Input
            placeholder="Grocery Item (e.g., Bread)"
            value={item}
            onChangeText={setItem}
            variant="outline"
            fontSize="md"
          />
        </Box>
        <Box bg="white" borderRadius="md" shadow={2} p={2}>
          <Input
            placeholder="Type (e.g., Whole Wheat)"
            value={type}
            onChangeText={setType}
            variant="outline"
            fontSize="md"
          />
        </Box>
        <Button
          mt={4}
          bg="#00A9FF"
          _text={{color: '#ffffff', fontWeight: 'bold'}}
          onPress={handleCompare}
          isDisabled={!item || !type}
          colorScheme="primary">
          Compare
        </Button>
      </VStack>
      {/* Image section below the input fields */}
      <Center flex={1} bg="white" borderRadius="md" shadow={2} mt={5} mb={5}>
        <Image
          source={compareImage} // Use the imported image here
          alt="Comparison Image"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '100%', // Full width of the container
            height: '100%', // Full height of the container
          }}
          resizeMode="cover"
        />
      </Center>
    </Box>
  );
};

export default GroceryCompareScreen;
