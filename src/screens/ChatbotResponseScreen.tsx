import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box, Card, Text, Image, VStack, Center} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import bottomImage from '../../assets/response2.png';

// Define RootStackParamList type
type RootStackParamList = {
  ChatbotResponse: {response: string};
};

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
    <Box flex={1} bg="#D1E9F6">
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <VStack space={4} flex={1}>
          <Card p={6} borderRadius="xl" shadow={4} bg="white">
            <VStack space={3}>
              <Text fontSize="2xl" fontWeight="bold" color="#378CE7">
                Recommendation
              </Text>
              <Text fontSize="md" color="#333333">
                {response}
              </Text>
            </VStack>
          </Card>
          <Center
            flex={1}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            mt={4}>
            <Image
              source={bottomImage}
              alt="Bottom Section Image"
              width="100%"
              height="100%"
              resizeMode="cover"
            />
          </Center>
        </VStack>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 16,
    flexGrow: 1,
  },
});

export default ChatbotResponseScreen;
