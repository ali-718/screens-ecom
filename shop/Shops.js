import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    SafeAreaView, ScrollView
} from "react-native";
import { Header, Body, Left, Right,Icon } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from 'react-native-vector-icons/Feather'
export default class Signup extends React.Component {


    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>

                <ScrollView >
                    <Header
                        style={{
                            paddingTop:10,
                            backgroundColor: '#1f425e', height: 100,
                            elevation: this.props.elevation, justifyContent: "center", paddingBottom: 15
                        }}
                    >
                        <Left style={{ flex: 1 }}>
                            <TouchableOpacity
                                style={{ width: "20%", height: "100%", justifyContent: "center" }}
                             

                            >
                                <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", }}>
                                <Icon
              style={{ fontSize: 25,color:"white" }}
              active
              name="bars"
              type="AntDesign"
            />
                                </View>

                            </TouchableOpacity>
                        </Left>

                        <Body
                            style={

                                {
                                    flex: 1, alignItems: "center"
                                }
                            }
                        >
                            <Text style={{ color: 'white', fontSize: 18 }}> SHOP </Text>
                        </Body>

                        <Right style={{ flex: 1, justifyContent: "center" }}>

                            <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#31516a', position: 'absolute', alignItems: "center", justifyContent: "center", right: 5, top: -18 }}>

                                <Feather name={"shopping-cart"} size={17} color={'white'} />
                            </View>
                            <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#31516a', position: 'absolute', alignItems: "center", justifyContent: "center", right: 54, top: -18 }}>

                                <Feather name={"heart"} size={17} color={'white'} />

                            </View>


                        </Right>
                    </Header>

                    <View style={{ height: 50, position: 'absolute', top: 80, width: '93%', backgroundColor: 'white', alignSelf: "center", borderWidth: 1, flexDirection: 'row', borderRadius: 5, elevation: 1, alignItems: "center", borderColor: '#dfdfdf' }}>

                        <View style={{ width: 60, borderRightWidth: 1, height: 30, alignItems: "center", justifyContent: "center", borderColor: '#dfdfdf' }}>
                            <Feather name={"search"} size={17} color={'#7d7d7d'}
                            />
                        </View>

                        <TextInput
                            placeholder="search"
                            style={{ marginLeft: 10, }}
                            placeholderTextColor="#7d7d7d"
                        />



                    </View>

                    <View style={{ height: 40, }} >

                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center" }} >
                        <Text style={{ width: '85%', color: '#3e5a6d', fontWeight: 'bold', fontSize: 15 }}> Clothes</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 15 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2 }} >

                        <TouchableOpacity style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <View style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company2.jpg')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </View>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </TouchableOpacity>

                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>



                    </View>


                    {/* 
            Shoes View */}


                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", marginTop: 5 }} >
                        <Text style={{ width: '85%', color: '#3e5a6d', fontWeight: 'bold', fontSize: 15 }}> Shoes</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 13 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2 }} >

                        <TouchableOpacity style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <View style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company2.jpg')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </View>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </TouchableOpacity>

                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>



                    </View>


                    {/* 
                JEWELLARY VIEW */}

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", marginTop: 5 }} >
                        <Text style={{ width: '85%', color: '#3e5a6d', fontWeight: 'bold', fontSize: 15 }}> Jewellary and accessories</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 13 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2 }} >

                        <TouchableOpacity style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <View style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company2.jpg')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </View>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </TouchableOpacity>

                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>



                    </View>



                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        // borderBottomColor: "#000",
        backgroundColor: "white",
        alignSelf: "center",
        width: "90%",
        borderRadius: 15,
        elevation: 1
    }
});

