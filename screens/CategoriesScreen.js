/* eslint-disable prettier/prettier */
import { CATEGORIES } from '../data/data';
import { FlatList } from 'react-native';
import React from 'react';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({ navigation }) {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) =>
                <CategoryGridTile
                    title={item.title}
                    color={item.color}
                    onPress={() => navigation.navigate('Meals', { categoryId: item.id })}
                />}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
