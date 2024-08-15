import React from 'react';
import {ScrollView} from 'react-native';
import {Text, VStack, Card, Box} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type GroceryCompareResultScreenRouteProp = RouteProp<
  RootStackParamList,
  'GroceryCompareResult'
>;

type Props = {
  route: GroceryCompareResultScreenRouteProp;
};

const GroceryCompareResultScreen: React.FC<Props> = ({route}) => {
  const {item, type} = route.params;

  // Placeholder comparison data
  const comparisonData = [
    {
      brand: 'Britannia',
      price: '$2.99',
      weight: '400g',
      ingredients: 'Whole Wheat Flour, Water, Yeast, Salt',
    },
    {
      brand: 'Harvest',
      price: '$3.49',
      weight: '450g',
      ingredients: 'Whole Wheat Flour, Water, Yeast, Salt, Sugar',
    },
  ];

  return (
    <Box flex={1} p={5} backgroundColor="#f0f0f0">
      <ScrollView>
        <Text fontSize="2xl" fontWeight="bold" mb={5} textAlign="center">
          {`Comparing ${type} ${item}`}
        </Text>
        <VStack space={4}>
          {comparisonData.map((brand, index) => (
            <Card key={index} p={4} mb={4} borderRadius="md" shadow={2}>
              <VStack space={2}>
                <Text fontSize="lg" fontWeight="bold">
                  {brand.brand}
                </Text>
                <Text>Price: {brand.price}</Text>
                <Text>Weight: {brand.weight}</Text>
                <Text>Ingredients: {brand.ingredients}</Text>
              </VStack>
            </Card>
          ))}
          <Text italic mt={5}>
            Note: Key differences would be highlighted here. This space is left
            for manual addition of specific comparisons.
          </Text>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default GroceryCompareResultScreen;
