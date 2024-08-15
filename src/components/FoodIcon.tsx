// src/components/FoodIcon.tsx
import React from 'react';
import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {TouchableRipple, Surface} from 'react-native-paper';

interface FoodIconProps {
  source: ImageSourcePropType;
  onPress: () => void;
}

const FoodIcon: React.FC<FoodIconProps> = ({source, onPress}) => {
  return (
    <TouchableRipple onPress={onPress} style={styles.touchable}>
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
  },
  icon: {
    width: 60,
    height: 60,
  },
});

export default FoodIcon;
