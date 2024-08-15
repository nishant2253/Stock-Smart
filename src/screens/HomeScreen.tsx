import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import FoodIcon from '../components/FoodIcon';
import {Box, HStack, VStack, Center, Text} from 'native-base';

// Import your icon images
import stockAssistantIcon from '../../assets/stock-assistant-icon.png';
import groceryCompareIcon from '../../assets/grocery-compare-icon.png';
import groceryNavigatorIcon from '../../assets/grocery-navigator-icon.png';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Box flex={1} bg="coolGray.100" safeArea p={5}>
      <Center flex={1}>
        <VStack space={8} alignItems="center">
          <HStack space={6} justifyContent="center" flexWrap="wrap">
            <VStack alignItems="center">
              <FoodIcon
                source={stockAssistantIcon}
                onPress={() => navigation.navigate('StockAssistant')}
              />
              <Text mt={2} fontWeight="bold">
                Stock Assistant
              </Text>
            </VStack>
            <VStack alignItems="center">
              <FoodIcon
                source={groceryCompareIcon}
                onPress={() => navigation.navigate('GroceryCompare')}
              />
              <Text mt={2} fontWeight="bold">
                Grocery Compare
              </Text>
            </VStack>
            <VStack alignItems="center">
              <FoodIcon
                source={groceryNavigatorIcon}
                onPress={() => navigation.navigate('GroceryNavigator')}
              />
              <Text mt={2} fontWeight="bold">
                Grocery Navigator
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default HomeScreen;
