import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { StyleSheet, TextInput, Text, View, Image, Button, TouchableOpacity, ImageBackground, ScrollView, } from 'react-native';
import { MotiView, motify, MotiText } from 'moti';
import { AntDesign } from '@expo/vector-icons';
import Perfil from './componentes/Perfil/Index';
import Menus from './componentes/Menus/index';


function Home(){
  const [Locked, SetLikeState] = useState(!Locked);
  const [text, setText] = useState('');


  return (
    <ImageBackground
      source={require('./imgs/back.gif')}
      style={{ width: '100%', height: '100%' }}
    >  
      <MotiView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        from={{
          translateY: -150,
          opacity: 0,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{
          type: "timing",
          duration: 800,
          delay: 300,
        }}

      >
        <View style={{marginTop: 80, paddingEnd: 14}}>
        <Menus />
        </View>
        

        <Image style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 100,
          marginTop: 50,
          height: 100,
          borderRadius: 50
        }}
          source={{
            uri: `https://github.com/rubensalbukrk.png`
          }} />
      </MotiView>
      {/******LOGIN*******/}
      <View style={styles.login}>
        <MotiText
          style={{ textAlignVertical: 'center', textAlign: 'center', color: '#fff',fontSize: 40, paddingBottom: 10, justifyContent: 'center', alignItems: 'center'}}
          from={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
          }}
          transition={{
            type: 'timing',
            duration: 800,
            delay: 300,
          }}
        >Olá {text}, bem vindo !
        </MotiText>
        
        <Text style={{ textAlign: 'right', color: '#fff' }}>Usuário:</Text>
        <TextInput
          style={{backgroundColor: '#fff', fontSize: 30, opacity: 0.3, borderRadius: 10, textAlign: 'center', width: 200, height: 40 }}
          placeholder="Seu nome"
          onChangeText={newText => setText(newText)}
          defaultValue={text} />
        <Text style={{ color: '#fff' }}>Senha:</Text>
        {/* SENHA */}
        <View style={{ flex: 1, flexDirection: 'row', maxHeight: 80}}>
        <TextInput id='textID'
          style={{backgroundColor: '#fff', opacity: 0.3, fontSize: 30, borderRadius: 10, textAlign: 'center', width: 150, height: 40 }}
          secureTextEntry={true}
          placeholder="*****" />
          
        {/**TESTANDO FUNÇÃO */}
        <TouchableOpacity style={{paddingTOp: 15}} onPress={() => SetLikeState(!Locked)}>
          {Locked && <AntDesign name="lock1" size={50} color="black" /> && alert('Show')}
          {!Locked && <AntDesign name="unlock" size={50} color="black" /> && alert('Hidden')}
        </TouchableOpacity>
        </View>


        <MotiView
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          from={{
            translateY: -140,
            opacity: 0,
          }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{
            type: "timing",
            duration: 800,
            delay: 300,
          }}
        >
          <Button style={{ width: 40, height: 20 }}
            title="Verificar"
            onPress={(Perfil) => App() } />
        </MotiView>  

      </View>


     <StatusBar style='auto' />       
    </ImageBackground>
  )     
};

export default function App() {

  return (
    <View style={styles.homePage}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({

  homePage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  login: {
    flex: 1,
    width: '100%',
    height: 100,
    marginBotton: 200,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
