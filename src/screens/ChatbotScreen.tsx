import React from 'react';
import {ScrollView} from 'react-native';
import {
  Input,
  Button,
  Card,
  Text,
  VStack,
  Box,
  Image,
  Center,
} from 'native-base';
import {getBreadRecommendation} from '../api/huggingFaceApi';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import chatbotImage from '../../assets/newimage3.png';

// Define your RootStackParamList type
type RootStackParamList = {
  Chatbot: {
    userInput: {slicesPerDay: number; daysToConsume: number; avgPrice: number};
  };
  ChatbotResponse: {response: string};
};

type ChatbotScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Chatbot'
>;
type ChatbotScreenRouteProp = RouteProp<RootStackParamList, 'Chatbot'>;

type Props = {
  navigation: ChatbotScreenNavigationProp;
  route: ChatbotScreenRouteProp;
};

const ChatbotScreen: React.FC<Props> = ({navigation, route}) => {
  const {slicesPerDay, daysToConsume, avgPrice} = route.params.userInput;

  const handleSubmit = async () => {
    try {
      const result = await getBreadRecommendation(
        slicesPerDay,
        daysToConsume,
        avgPrice,
      );
      navigation.navigate('ChatbotResponse', {response: result});
    } catch (error) {
      navigation.navigate('ChatbotResponse', {
        response: 'An error occurred while processing your request.',
      });
    }
  };

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <ScrollView style={{backgroundColor: '#D1E9F6'}}>
      <Center p={4}>
        <Card
          p={6}
          mb={4}
          borderRadius="xl"
          shadow={4}
          bg="#D1E9F6"
          width="100%">
          <VStack space={5}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              textAlign="center"
              color="#378CE7">
              Confirm Your Input
            </Text>
            <Input
              value={slicesPerDay.toString()}
              isReadOnly
              variant="filled"
              placeholder="Daily bread slices"
              bg="white"
              borderRadius="lg"
              fontSize="md"
            />
            <Input
              value={daysToConsume.toString()}
              isReadOnly
              variant="filled"
              placeholder="Days to stock"
              bg="white"
              borderRadius="lg"
              fontSize="md"
            />
            <Input
              value={avgPrice.toString()}
              isReadOnly
              variant="filled"
              placeholder="Average price ($)"
              bg="white"
              borderRadius="lg"
              fontSize="md"
            />
            <Button
              mt={4}
              bg="#00A9FF"
              _text={{color: '#ffffff', fontWeight: 'bold'}}
              onPress={handleSubmit}>
              Get Recommendation
            </Button>
          </VStack>
        </Card>
      </Center>
      <Box width="100%" height={400} mt={4} bg="gray.300">
        <Image
          source={chatbotImage}
          alt="Chatbot Image"
          resizeMode="cover"
          width="100%"
          height="100%"
        />
      </Box>
    </ScrollView>
  );
};

export default ChatbotScreen;
