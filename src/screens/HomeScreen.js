import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {

  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('ImageScreen')}
      />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Square screen"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text screen"
        onPress={() => navigation.navigate('Text')}
      />  
      <Button
        title="Go to BOX"
        onPress={() => navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  }
});

export default HomeScreen;
