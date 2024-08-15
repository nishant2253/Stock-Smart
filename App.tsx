import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {NativeBaseProvider, extendTheme} from 'native-base';
import HomeScreen from './src/screens/HomeScreen';
import ChatbotScreen from './src/screens/ChatbotScreen';
import BreadStockScreen, {UserInput} from './src/screens/BreadStockScreen';
import ChatbotResponseScreen from './src/screens/ChatbotResponseScreen';
import GroceryCompareScreen from './src/screens/GroceryCompareScreen';
import GroceryCompareResultScreen from './src/screens/GroceryCompareResultScreen';
import GroceryNavigatorScreen from './src/screens/GroceryNavigatorScreen';
import GroceryLocationScreen from './src/screens/GroceryLocationScreen';

export type RootStackParamList = {
  Home: undefined;
  StockAssistant: undefined;
  BreadStock: undefined;
  Chatbot: {userInput: UserInput};
  ChatbotResponse: {response: string};
  GroceryCompare: undefined;
  GroceryCompareResult: {item: string; type: string};
  GroceryNavigator: undefined;
  GroceryLocation: {item: string; brand: string};
};

const Stack = createStackNavigator<RootStackParamList>();

const paperTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00A9FF', // Walmart blue
    accent: '#ffc220', // Walmart yellow
  },
};

const nativeBaseTheme = extendTheme({
  colors: {
    primary: {
      500: '#00A9FF', // Walmart blue
    },
    secondary: {
      500: '#ffc220', // Walmart yellow
    },
  },
});

const App: React.FC = () => {
  return (
    <NativeBaseProvider theme={nativeBaseTheme}>
      <PaperProvider theme={paperTheme}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: paperTheme.colors.primary,
              },
              headerTintColor: '#FBF9F1',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Walmart Assistant'}}
            />
            <Stack.Screen
              name="StockAssistant"
              component={BreadStockScreen}
              options={{title: 'Stock Assistant'}}
            />
            <Stack.Screen
              name="BreadStock"
              component={BreadStockScreen}
              options={{title: 'Bread Stock'}}
            />
            <Stack.Screen
              name="Chatbot"
              component={ChatbotScreen}
              options={{title: 'Stock Assistant'}}
            />
            <Stack.Screen
              name="ChatbotResponse"
              component={ChatbotResponseScreen}
              options={{title: 'Assistant Response'}}
            />
            <Stack.Screen
              name="GroceryCompare"
              component={GroceryCompareScreen}
              options={{title: 'Grocery Compare'}}
            />
            <Stack.Screen
              name="GroceryCompareResult"
              component={GroceryCompareResultScreen}
              options={{title: 'Compare Results'}}
            />
            <Stack.Screen
              name="GroceryNavigator"
              component={GroceryNavigatorScreen}
              options={{title: 'Grocery Navigator'}}
            />
            <Stack.Screen
              name="GroceryLocation"
              component={GroceryLocationScreen}
              options={{title: 'Item Location'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
  );
};

export default App;
