import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Box, Input, Button, Text, Icon, VStack} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

type BreadStockScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BreadStock'
>;

type Props = {
  navigation: BreadStockScreenNavigationProp;
};

export interface UserInput {
  slicesPerDay: number;
  daysToConsume: number;
  avgPrice: number;
}

const BreadStockScreen: React.FC<Props> = ({navigation}) => {
  const [slicesPerDay, setSlicesPerDay] = useState('');
  const [daysToConsume, setDaysToConsume] = useState('');
  const [avgPrice, setAvgPrice] = useState('');

  const handleSubmit = () => {
    const userInput: UserInput = {
      slicesPerDay: parseInt(slicesPerDay, 10),
      daysToConsume: parseInt(daysToConsume, 10),
      avgPrice: parseFloat(avgPrice),
    };
    navigation.navigate('Chatbot', {userInput});
  };

  return (
    <Box flex={1} p={4} backgroundColor="#f0f0f0">
      <ScrollView>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="#0071ce"
          textAlign="center"
          mb={6}>
          Bread Stock Calculator
        </Text>
        <VStack space={4}>
          <Box
            flexDirection="row"
            alignItems="center"
            bg="#ffffff"
            borderRadius="md"
            p={2}
            shadow={2}>
            <Icon name="bread-slice" size={24} color="#0071ce" />
            <Input
              variant="outline"
              placeholder="Slices consumed per day"
              keyboardType="numeric"
              value={slicesPerDay}
              onChangeText={setSlicesPerDay}
              flex={1}
              ml={2}
            />
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            bg="#ffffff"
            borderRadius="md"
            p={2}
            shadow={2}>
            <Icon name="calendar-range" size={24} color="#0071ce" />
            <Input
              variant="outline"
              placeholder="Days to consume stock"
              keyboardType="numeric"
              value={daysToConsume}
              onChangeText={setDaysToConsume}
              flex={1}
              ml={2}
            />
          </Box>
          <Box
            flexDirection="row"
            alignItems="center"
            bg="#ffffff"
            borderRadius="md"
            p={2}
            shadow={2}>
            <Icon name="currency-usd" size={24} color="#0071ce" />
            <Input
              variant="outline"
              placeholder="Average purchase price ($)"
              keyboardType="numeric"
              value={avgPrice}
              onChangeText={setAvgPrice}
              flex={1}
              ml={2}
            />
          </Box>
          <Button
            mt={4}
            bg="#0071ce"
            _text={{color: '#ffffff', fontWeight: 'bold'}}
            onPress={handleSubmit}>
            Calculate
          </Button>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default BreadStockScreen;
