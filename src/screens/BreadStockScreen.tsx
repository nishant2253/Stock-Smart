import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Box, Input, Button, Text, VStack, Image} from 'native-base';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';

// Import icon and image files
import slicesIcon from '../../assets/slicesicon.png';
import daysIcon from '../../assets/daysicon.png';
import priceIcon from '../../assets/priceicon.png';
import bottomImage from '../../assets/newimage2.png';

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
    <Box flex={1} p={4} backgroundColor="#D1E9F6">
      <ScrollView>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="#4CB9E7"
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
            <Image source={slicesIcon} alt="Slices Icon" size={6} />
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
            <Image source={daysIcon} alt="Days Icon" size={6} />
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
            <Image source={priceIcon} alt="Price Icon" size={6} />
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
            bg="#00A9FF"
            _text={{color: '#ffffff', fontWeight: 'bold'}}
            onPress={handleSubmit}>
            Calculate
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
      </ScrollView>
    </Box>
  );
};

export default BreadStockScreen;
