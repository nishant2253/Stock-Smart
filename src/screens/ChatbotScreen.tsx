import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {Input, Button, Card, Text, VStack, Box} from 'native-base';
import {getBreadRecommendation} from '../api/huggingFaceApi';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import {RouteProp} from '@react-navigation/native';

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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    setLoading(true);
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
    setLoading(false);
  };

  return (
    <Box flex={1} p={4} backgroundColor="#f0f0f0">
      <ScrollView>
        <Card p={4} mb={4} borderRadius="md" shadow={2}>
          <VStack space={4}>
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Confirm Your Input
            </Text>
            <Input
              value={slicesPerDay.toString()}
              isReadOnly
              variant="outline"
              placeholder="Daily bread slices"
            />
            <Input
              value={daysToConsume.toString()}
              isReadOnly
              variant="outline"
              placeholder="Days to stock"
            />
            <Input
              value={avgPrice.toString()}
              isReadOnly
              variant="outline"
              placeholder="Average price ($)"
            />
            <Button
              onPress={handleSubmit}
              isLoading={loading}
              colorScheme="primary">
              Get Recommendation
            </Button>
          </VStack>
        </Card>
      </ScrollView>
    </Box>
  );
};

export default ChatbotScreen;
