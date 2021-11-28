
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialIcons";
import { Icon } from 'react-native-elements'



const Flight = (): Node => {
    return (
      <View style={{ flex: 1, height: 100, }} >
        <View style={styles.sectionContainer}>
            
        <Icon
  name='g-translate'
  color='#00aced' />
        </View>
        <View style={styles.SectionMenu}>
            <View style={[styles.sectionTitle]}>
                <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                    
                </View>
            </View>
        </View>
      </View>
      
    );

  };


const styles = StyleSheet.create({
    sectionContainer: {
        // position: 'absolute',
        backgroundColor: "#0F2C67",
        height: 130,
        paddingTop: 30,
        paddingLeft: 40,
        paddingRight: 40,
    // justifyContent: 'center',
    // alignItems: 'center',
      
    },
    sectionTitle: {
        // flex: 1,
        // justifyContent: "space-between",
        // position: 'absolute',
        // // borderWidth: 4,
        // marginTop: 100,
        // top: 20,
        height: 110,
        paddingTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 30,
        width: '100%',
        backgroundColor: "#fff",
        alignItems: 'center',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        
    },
    SectionMenu :  {
    // position: 'relative',
        // width: 200,
        backgroundColor: 'white',
        position: 'absolute',
        top: 80,
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
        flex: 1,
    },
    shadowBox : {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,

        elevation: 18,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    articleList: {
        borderRadius:10, 
        width: '95%', 
        height:80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
  });

  export default Flight;
  