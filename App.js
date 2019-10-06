import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
} from './src/store/actions/index';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
//static import image
//import PlaceImage from './src/assets/1.png';
class App extends Component {
  //Omitted after using redux
  /* state = {
    places: [],
    selectedPlace: null,
  }; */

  placeAddedHandler = placeName => {
    /*  this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: placeName,
          //Static import image
          //image: PlaceImage,
          image: {
            uri:
              'https://bigmemes.funnyjunk.com/pictures/A+beautiful+scene_30057c_7120462.jpg',
          },
        }),
      };
    });*/
    this.props.onAddPlace(placeName);
  };
  placeDeleteHandler = () => {
    /* this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    }); */
    this.props.onDeletePlace();
  };
  modalClosedHandler = () => {
    /* this.setState({
      selectedPlace: null,
    }); */
    this.props.onDeselectPlace();
  };
  placeSelectedHandler = key => {
    /* this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        }),
      };
    }); */
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          //changed after redux
          //selectedPlace={this.state.selectedPlace}
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeleteHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          //places={this.state.places}
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddPlace: value => {
      dispatch(addPlace(value));
    },
    onDeletePlace: () => {
      dispatch(deletePlace());
    },
    onSelectPlace: key => {
      dispatch(selectPlace(key));
    },
    onDeselectPlace: () => {
      dispatch(deselectPlace());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
