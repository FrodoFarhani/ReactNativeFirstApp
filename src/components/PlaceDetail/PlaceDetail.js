import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;
  if (props.selectedPlace) {
    modalContent = (
      <View>
        {/* for network images we should set width and height, they wont be shown ever without them */}
        <Image source={props.selectedPlace.image} style={styles.modalimage} />
        <Text style={styles.placeName}>{props.selectedPlace.value}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="delete" color="red" onPress={props.onItemDeleted} />
          <Button title="close" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  modalimage: {
    width: '100%',
    height: '70%',
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
  },
});

export default PlaceDetail;
