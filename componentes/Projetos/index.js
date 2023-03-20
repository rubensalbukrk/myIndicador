import React from 'react';
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export default function Projetos() {
 return (

    <ScrollView style={styles.container1} showsHorizontalScrollIndicator={false} horizontal={true} >
                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                    <AntDesign name="customerservice" size={24} color="black" />
                    <Text style={styles.labelButton}>Suporte</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                    <AntDesign name="creditcard" size={24} color="black" />
                    <Text style={styles.labelButton}>Cartões</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                    <AntDesign name="barschart" size={24} color="black" />
                    <Text style={styles.labelButton}>Status</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                    <AntDesign name="mail" size={24} color="black" />
                    <Text style={styles.labelButton}>Email</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.actionButton}>
                    <View style={styles.areaButton}>
                    <AntDesign name="link" size={24} color="black" />
                    <Text style={styles.labelButton}>Compartilhar</Text>
                    </View>
                </TouchableOpacity>
    </ScrollView>
   
  )
}
const styles = StyleSheet.create({
    container1: {
        maxHeight: 70,
        marginBottom: 14,
        paddingEnd: 14,
        paddingStart: 14,

    },
    areaButton: {
        background: '#fff',
        width: 60,
        heigth: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    labelButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 50,
    }
  });