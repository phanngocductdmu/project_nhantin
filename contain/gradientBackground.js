import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBackground = ({
  children,
  colors = ['#11998e', '#38ef7d'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[styles.gradientBackground, style]}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },
});

export default GradientBackground;
