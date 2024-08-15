import React from 'react';
import {StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../App';
import FoodIcon from '../components/FoodIcon';
import {View, Text, Image} from 'react-native';
import {Surface} from 'react-native-paper';

// Import your icon images
import stockAssistantIcon from '../../assets/stock-assistant-icon.png';
import groceryCompareIcon from '../../assets/grocery-compare-icon.png';
import groceryNavigatorIcon from '../../assets/grocery-navigator-icon.png';
// Import your new image
import exampleImage from '../../assets/example-image.png';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <Surface style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconWrapper}>
          <FoodIcon
            source={groceryCompareIcon}
            onPress={() => navigation.navigate('GroceryCompare')}
          />
          <Text style={styles.iconText}>Grocery Compare</Text>
        </View>
        <View style={styles.iconWrapper}>
          <FoodIcon
            source={groceryNavigatorIcon}
            onPress={() => navigation.navigate('GroceryNavigator')}
          />
          <Text style={styles.iconText}>Grocery Navigator</Text>
        </View>
        <View style={styles.iconWrapper}>
          <FoodIcon
            source={stockAssistantIcon}
            onPress={() => navigation.navigate('StockAssistant')}
          />
          <Text style={styles.iconText}>Stock Assistant</Text>
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={exampleImage}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#1e3a8a', // dark blue color
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
