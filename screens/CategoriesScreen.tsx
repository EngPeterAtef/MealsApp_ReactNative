/* eslint-disable prettier/prettier */
import { CATEGORIES } from '../data/data';
import { FlatList } from 'react-native';
import React from 'react';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <CategoryGridTile title={item.title} color={item.color} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;
