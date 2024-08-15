import React from 'react';
import {ScrollView} from 'react-native';
import {Box, Card, Text} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../App';

type ChatbotResponseScreenRouteProp = RouteProp<
  RootStackParamList,
  'ChatbotResponse'
>;

type Props = {
  route: ChatbotResponseScreenRouteProp;
};

const ChatbotResponseScreen: React.FC<Props> = ({route}) => {
  const {response} = route.params;

  return (
    <Box flex={1} p={4} backgroundColor="#f0f0f0">
      <ScrollView>
        <Card p={4} mb={4} borderRadius="md" shadow={2}>
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            Recommendation
          </Text>
          <Text fontSize="md">{response}</Text>
        </Card>
      </ScrollView>
    </Box>
  );
};

export default ChatbotResponseScreen;
