/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
// import Category from '../models/category';


function CategoryGridTile(cat: any): JSX.Element {
    return (
        <View style={[styles.gridItem]}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                android_ripple={{ color: '#ccc' }}>
                <View style={[styles.innerContainer, { backgroundColor: cat.color }]}>
                    <Text style={styles.title}>{cat.title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,//to make sure that the item takes all the available space
        margin: 15,
        height: 150,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 4,//for android
        shadowColor: 'black',//for ios
        shadowOpacity: 0.26,//for ios
        shadowOffset: { width: 0, height: 2 },//for ios
        shadowRadius: 10,//for ios
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',//for android
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 16,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'right',
        color: 'black',
    },
});

export default CategoryGridTile;
