import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {Box, Input, Button, VStack, Image, Text} from 'native-base';

// Import icon and image files
import itemIcon from '../../assets/grocery-compare-icon.png'; // Replace with actual path
import brandIcon from '../../assets/brandicon.png'; // Replace with actual path
import bottomImage from '../../assets/newimage2.png'; // Replace with actual path

type GroceryNavigatorScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'GroceryNavigator'
>;

type Props = {
  navigation: GroceryNavigatorScreenNavigationProp;
};

const GroceryNavigatorScreen: React.FC<Props> = ({navigation}) => {
  const [item, setItem] = useState('');
  const [brand, setBrand] = useState('');

  const handleSubmit = () => {
    if (item && brand) {
      navigation.navigate('GroceryLocation', {item, brand});
    }
  };

  return (
    <Box flex={1} p={4} backgroundColor="#D1E9F6">
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color="#4CB9E7"
        textAlign="center"
        mb={6}>
        Find Your Grocery Item
      </Text>
      <VStack space={4}>
        <Box
          flexDirection="row"
          alignItems="center"
          bg="#ffffff"
          borderRadius="md"
          p={2}
          shadow={2}>
          <Image source={itemIcon} alt="Item Icon" size={6} />
          <Input
            variant="outline"
            placeholder="Which grocery item to locate?"
            value={item}
            onChangeText={setItem}
            flex={1}
            ml={2}
            bg="white"
            borderRadius="md"
          />
        </Box>
        <Box
          flexDirection="row"
          alignItems="center"
          bg="#ffffff"
          borderRadius="md"
          p={2}
          shadow={2}>
          <Image source={brandIcon} alt="Brand Icon" size={6} />
          <Input
            variant="outline"
            placeholder="Which brand of that category?"
            value={brand}
            onChangeText={setBrand}
            flex={1}
            ml={2}
            bg="white"
            borderRadius="md"
          />
        </Box>
        <Button
          mt={4}
          bg="#00A9FF"
          _text={{color: '#ffffff', fontWeight: 'bold'}}
          onPress={handleSubmit}>
          Find Location
        </Button>
      </VStack>
      {/* Image section below fields */}
      <Box
        width="100%"
        height={200}
        mt={4}
        bg="white"
        justifyContent="center"
        alignItems="center">
        <Image
          source={bottomImage}
          alt="Bottom Section Image"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: '100%', height: '100%'}}
        />
      </Box>
    </Box>
  );
};

export default GroceryNavigatorScreen;
