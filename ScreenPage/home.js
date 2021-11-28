
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
import ImagedCarouselCard from "react-native-imaged-carousel-card";
import Carousel from 'react-native-snap-carousel';
import { SearchBar } from 'react-native-elements';



const Home = (): Node => {
    // const isDarkMode = useColorScheme() === 'dark';
    _renderItem = ({item, index}) => {
        return (
            <View>
                <ImagedCarouselCard
                    height={200}
                    width={200}
                    shadowColor="#051934"
                    text ={''}
                    source={{
                    uri:
                        item.image
                    }}
                    style={{ marginBottom: 10 }}
                />
            <Text style={{ paddingLeft:15, fontWeight:'bold', }}>{item.text}</Text>
            <Text style={{ paddingLeft:15, paddingRight:15, fontSize: 7, color: 'grey' }}>{item.description}</Text>
            
            </View>
        );
    };

    _renderMassage = ({item, index}) => {
        return (
            <View>
                <ImagedCarouselCard
                    height={200}
                    width={200}
                    shadowColor="#051934"
                    text ={''}
                    source={{
                    uri:
                        item.image
                    }}
                    style={{ marginBottom: 10 }}
                />
            <Text style={{ paddingLeft:15, fontWeight:'bold', }}>{item.text}</Text>
            <Text style={{ paddingLeft:15, paddingRight:15, fontSize: 7, color: 'grey' }}>{item.description}</Text>
            <Text style={{ paddingLeft:15, paddingRight:15, fontSize: 10, marginTop: 7 }}>{item.price}</Text>
            
            </View>
        );
    };

let destinasi = {
    activeIndex:0,
    carouselItems: [
    {
        image:"https://images.unsplash.com/photo-1637927145286-5aa465fcadcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
        text: "Text 1",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla"
    },
    {
        image:"https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Text 2",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla"
    },
    {
        image:"https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1410&q=80",
        text: "Text 3",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla"
    },
    {
        image:"https://images.unsplash.com/photo-1530735606451-8f5f13955328?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Text 4",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla"
    },
  ]
};

let massage = {
    activeIndex:0,
    carouselItems: [
    {
        image:"https://images.unsplash.com/photo-1630595632518-8217c0bceb8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Text 1",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla",
        price: 'IDR 250.000'
    },
    {
        image:"https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text: "Text 2",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla",
        price: 'IDR 320.000'
    },
    {
        image:"https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "Text 3",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla",
        price: 'IDR 280.000'
    },
    {
        image:"https://images.unsplash.com/photo-1579894333786-1044a30ccd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "Text 4",
        description: "Lorem ipsum bla bla bla bla bla Lorem ipsum bla bla bla bla bla",
        price: 'IDR 420.000'
    },
  ]
};

let pic = {
    uri: 'https://www.daarulilmi.or.id/template/daarulilmi/assets/img/user2-160x160.jpg'
    };
    return (
      <ScrollView style={{ flex: 1, height: 100, }} >
        <View style={styles.sectionContainer}>
            
            <Image source={pic} style={{width: 50, height: 50, top: 68, borderRadius: 50}}/>
            <Text style={{ position: 'absolute', left: 100, top: 79, color: 'white', fontWeight:'bold' }}>Sudirmansyah</Text>
            <Text style={{ position: 'absolute', left: 100, top: 97, color: 'white', fontSize: 10 }}>KantongKu: IDR 10.000.000</Text>
        </View>
        <View style={styles.SectionMenu}>
            <View style={[styles.sectionTitle, styles.shadowBox]}>
                <View style={{flexDirection:'row', flexWrap:'wrap',}}>
                    <View style={{ marginLeft: 8, marginRight: 8, alignItems: 'center', }}>
                        <Image source={require('../assets/icon/airplan.png')} style={{width:45, height: 45}}/>
                        <Text style={{ fontSize: 8 }}>Penerbangan</Text>
                    </View>
                    <View style={{ marginLeft: 8, marginRight: 8, alignItems: 'center', }}>
                        <Image source={require('../assets/icon/train.png')} style={{width:45, height: 45}}/>
                        <Text style={{ fontSize: 8 }}>Kereta</Text>
                    </View>
                    <View style={{ marginLeft: 8, marginRight: 8, alignItems: 'center', }}>
                        <Image source={require('../assets/icon/cruiser.png')} style={{width:45, height: 45}}/>
                        <Text style={{ fontSize: 8 }}>Kapal</Text>
                    </View>
                    <View style={{ marginLeft: 8, marginRight: 8, alignItems: 'center', }}>
                        <Image source={require('../assets/icon/hotel.png')} style={{width:45, height: 45 }}/>
                        <Text style={{ fontSize: 8 }}>Hotel</Text>
                    </View>
                    <View style={{ marginLeft: 8, marginRight: 8, alignItems: 'center', }}>
                        <Image source={require('../assets/icon/car.png')} style={{width:45, height: 45 }}/>
                        <Text style={{ fontSize: 8 }}>Sewa Mobil</Text>
                    </View>
                </View>
            </View>
        </View>
        {/* <View style={styles.sectionContainer}>
            <Text>Test</Text>
        </View> */}
        <View style={{ marginTop: 70, alignItems: 'center', }}>
            <ImagedCarouselCard
                height={200}
                width={'96%'}
                shadowColor="#051934"
                text ={"10 Tempat Destinasi Yang Wajib Kamu Kunjungi"}
                source={{
                uri:
                    'https://images.unsplash.com/photo-1556807044-eaf2e0eecb6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                }}
            />
        </View>
        <View style={{ marginTop: 30, }}>
            <Text style={{ marginLeft:10, marginRight:10, fontWeight: 'bold', fontSize:15 }}>Rekomendasi Destinasi</Text>
            <Text style={{ marginLeft:10, marginRight:10, marginBottom:20, fontSize:10, color: 'grey' }}>Temui rekomendasi destinasi untuk menjadi bagian dari perjalananmu</Text>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={destinasi.carouselItems}
                renderItem={this._renderItem}
                sliderWidth={390}
                itemWidth={200}
                windowSize={2}
                loop = {true}
                />
        </View>
            

        <View style={{ marginTop: 30, marginBottom:30}}>
            <Text style={{ marginLeft:10, marginRight:10, fontWeight: 'bold', fontSize:15 }}>Lelah dan penat ini obatnya</Text>
            <Text style={{ marginLeft:10, marginRight:10, marginBottom:20, fontSize:10, color: 'grey' }}>Yuk, liburan seu dekat rumah! Mau ke tempat bermain atau klinik kecantikan, bebas!</Text>
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={massage.carouselItems}
                renderItem={this._renderMassage}
                sliderWidth={390}
                itemWidth={200}
                windowSize={2}
                loop = {true}
                />
        </View>
        
        {/* <View style={{ marginTop: 30,alignItems: 'center', }}>
            <View style={[styles.sectionTitle, styles.articleList]}>
                <Text>Test</Text>
            </View>
        </View> */}
      </ScrollView>
      
    );

  };


const styles = StyleSheet.create({
    sectionContainer: {
        // position: 'absolute',
        backgroundColor: "#0F2C67",
        height: 220,
        // paddingTop: 70,
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
        // width: '96%',
        backgroundColor: "#fff",
        borderRadius: 20,
        alignItems: 'center',
        
    },
    SectionMenu :  {
    // position: 'relative',
        // width: 200,
        backgroundColor: 'white',
        position: 'absolute',
        top: 150,
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

  export default Home;
  