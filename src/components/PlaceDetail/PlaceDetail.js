import React from 'react';
import {
  Modal,
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
          {/*  <Button title="delete" color="red" onPress={props.onItemDeleted} /> */}
          {/* After we add re vector icon we use this to creat our btn */}
          <TouchableOpacity onPress={props.onItemDeleted}>
            <View style={styles.deleteBtn}>
              <Icon size={30} name="ios-trash" color="red"></Icon>
            </View>
          </TouchableOpacity>
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
  deleteBtn: {
    alignItems: 'center',
  },
});

export default PlaceDetail;
