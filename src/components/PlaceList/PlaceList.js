import React from 'react';
import {ScrollView, StyleSheet, FlatList} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
  /* const placesOutput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => props.onItemDeleted(i)}
    />
  )); */
  // return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;

  return (
    /**
     * we use flat list for dynamicaly growing lists, this only shows the items on screen
     * by scrolling it will show other items. ScrollView is good for list that we know the size
     * and in dynamic list it will cause performance issue
     */
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => (
        <ListItem
          placeName={info.item.value}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
});

export default placeList;
