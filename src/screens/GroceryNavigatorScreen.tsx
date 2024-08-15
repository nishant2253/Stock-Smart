import React, {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {Box, Input, Button, VStack} from 'native-base';

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
    <Box flex={1} p={5} justifyContent="center">
      <VStack space={4}>
        <Input
          placeholder="Which grocery item to locate?"
          value={item}
          onChangeText={setItem}
          variant="outline"
        />
        <Input
          placeholder="Which brand of that category?"
          value={brand}
          onChangeText={setBrand}
          variant="outline"
        />
        <Button onPress={handleSubmit} mt={2} colorScheme="primary">
          Find Location
        </Button>
      </VStack>
    </Box>
  );
};

export default GroceryNavigatorScreen;
