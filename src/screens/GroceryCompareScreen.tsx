import React, {useState} from 'react';
import {Box, Input, Button, Text, VStack} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

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
    <Box flex={1} p={5} justifyContent="center">
      <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="center">
        Compare Grocery Items
      </Text>
      <VStack space={4}>
        <Input
          placeholder="Grocery Item (e.g., Bread)"
          value={item}
          onChangeText={setItem}
          variant="outline"
        />
        <Input
          placeholder="Type (e.g., Whole Wheat)"
          value={type}
          onChangeText={setType}
          variant="outline"
        />
        <Button
          onPress={handleCompare}
          isDisabled={!item || !type}
          colorScheme="primary">
          Compare
        </Button>
      </VStack>
    </Box>
  );
};

export default GroceryCompareScreen;
