// src/components/FoodIcon.tsx
import React, {useState} from 'react';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {TouchableRipple, Surface} from 'react-native-paper';
import {useTheme} from 'react-native-paper';

interface FoodIconProps {
  source: ImageSourcePropType;
  onPress: () => void;
}

const FoodIcon: React.FC<FoodIconProps> = ({source, onPress}) => {
  const [isPressed, setIsPressed] = useState(false);
  const theme = useTheme();

  const pressedColor = '#ADD8E6'; // Light blue color

  return (
    <TouchableRipple
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      rippleColor={theme.colors.primary}
      style={[
        styles.touchable,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          backgroundColor: isPressed ? pressedColor : 'transparent', // Transparent background when not pressed
        },
      ]}>
      <Surface style={styles.surface}>
        <Image source={source} style={styles.icon} />
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 12,
    overflow: 'hidden',
    margin: 8,
  },
  surface: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    backgroundColor: 'transparent',
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default FoodIcon;
