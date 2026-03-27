import useTheme from '@/hooks/useTheme';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

const settings = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <View>
      <TouchableOpacity onPress={toggleDarkMode}>CORES</TouchableOpacity>
    </View>
  )
}

export default settings