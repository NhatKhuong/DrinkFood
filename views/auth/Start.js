import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';

const images = [
  'https://images-gmi-pmc.edge-generalmills.com/0375270e-b1ea-47d5-9b24-8a0786322334.jpg',
  'https://www.tastingtable.com/img/gallery/20-different-types-of-coffee-explained/intro-1659544996.jpg',
  'https://thumbs.dreamstime.com/b/shipper-icons-cartoon-characters-flat-vector-shipper-icons-cartoon-characters-sketch-dynamic-design-vectors-stock-flat-vektor-flat-196917456.jpg',
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Start() {
  const [imgActive, setImgActive] = useState(0);

  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <StatusBar animated={true} backgroundColor="white" />
      </View>
      <View style={styles.container}>
        <View style={styles.wrap}>
          <ScrollView
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            horizontal
            style={styles.wrap}>
            {images.map((e, index) => (
              <Image
                key={e}
                resizeMode="stretch"
                style={styles.wrap}
                source={{ uri: e }}
              />
            ))}
          </ScrollView>
          <View style={styles.warpDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imgActive == index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 10,
            }}>
            All your favorites
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 10,
            }}>
            Choose your drink
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 25,
              padding: 10,
            }}>
            Free delivery offers
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn_start}>
          <Text style={{ color: 'white' }}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'black',
    // alignItems:'center',
    flex: 1,
  },
  btn_start: {
    backgroundColor: '#22a45d',
    width: '90%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  header: {
    flex: 0.05,
    backgroundColor: 'white',
  },
  container: {
    flex: 0.75,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  footer: {
    flex: 0.2,
    // backgroundColor:'red',
    alignItems: 'center',
  },
  warpDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
// Khoa
