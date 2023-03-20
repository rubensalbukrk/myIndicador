import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
  import { StatusBar } from 'expo-status-bar';
  import { React, useState, Component } from 'react';
  import { StyleSheet, TextInput, Text, View, Image, Button, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
  import { MotiView, motify, MotiText, MotiScrollView } from 'moti';
  import { AntDesign } from '@expo/vector-icons';

export default function Perfils(){
 return(
  <View style={styles.container}>
    <ScrollView 
    showsVerticalScrollIndicator={false}>
      <MotiText style={{color: '#fff', fontSize: 20, fontStyle: 'italic'}}
      >PERFIL</MotiText>
      <MotiScrollView>
        <Button title='Menu' onPress={() => alert('Pagina Menu')}></Button>
        <Button title='Meus dados' onPress={() => alert('Pagina Menu')}></Button>
        <Button title='Cartões' onPress={() => alert('Pagina de cartões')}></Button>
        <Button title='Movimentos' onPress={() => alert('Pagina de Movimentos')}></Button>
        <Button title='Alterar plano' onPress={() => alert('Pagina de alteração!')}></Button>
      </MotiScrollView>
    </ScrollView>
  </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 50,
    marginStart: 100,
    marginLeft: 30,
    marginTop: 100,

  },

});