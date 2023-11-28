import React, { useState, useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import MyHeader from './components/MyHeader';
import { Gyroscope, Magnetometer, LightSensor } from 'expo-sensors';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapcont: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  map: {
    width: 309,
    height: 309,
    alignSelf: 'center',
    margin: 30,
    borderWidth: 5,
    borderColor: '#00D3F5',
    borderRadius: 5,
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#00D3F5",
    width: 120,
    alignSelf: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

const BussolaScreen = ({ navigation }) => {
  const [giroscopio, setGiroscopio] = useState({});
  const [magnetometro, setMagnetometro] = useState({});
  const [orientacao, setOrientacao] = useState('Retrato');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [location, setLocation] = useState(null);
  const [imageStyle, setImageStyle] = useState({
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Não tem permissão');
        return;
      }

      let info = await Location.getCurrentPositionAsync({});
      console.log(info);
      setLocation(info);
    })();
  }, []);

  useEffect(() => {
    const magnetometerSubscription = Magnetometer.addListener(magnetometroListener);
    const lightSensorSubscription = LightSensor.addListener(luminosidadeListener);

    return () => {
      magnetometerSubscription.remove();
      lightSensorSubscription.remove();
    };
  }, []);

  const giroscopioListener = (data) => {
    setGiroscopio(data);
    determineOrientacao(data);
  };

  const magnetometroListener = (data) => {
    setMagnetometro(data);
    updateDirection(data);
  };

  const luminosidadeListener = (data) => {
    setLuminosidade(data);
  };

  const determineOrientacao = (gData) => {
    if (gData) {
      const { z } = gData;
      if (z >= 1 || z <= -1) {
        setOrientacao('Orientação inclinada');
        setBackgroundColor('blue');
      } else {
        setOrientacao('Orientação retrato');
        setBackgroundColor('white');
      }
    }
  };

  const updateDirection = (data) => {
    const angle = Math.atan2(data.y, data.x) * (180 / Math.PI);
    let compassDirection = '';

    if (angle >= 45 && angle < 135) {
      compassDirection = 'Sul';
      setBackgroundColor('#E03FD5');
      setImageStyle({
        width: 200,
        height: 100,
        resizeMode: 'stretch',
        marginVertical: 20,
      });
    } else if (angle >= 135 || angle < -135) {
      compassDirection = 'Oeste';
      setBackgroundColor('#70E03F');
      setImageStyle({
        width: 100,
        height: 200,
        resizeMode: 'cover',
        marginVertical: 20,
      });
    } else if (angle >= -135 && angle < -45) {
      compassDirection = 'Norte';
      setBackgroundColor('#E0346A');
      setImageStyle({
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginVertical: 20,
      });
    } else {
      compassDirection = 'Leste';
      setBackgroundColor('#E0BD36');
      setImageStyle({
        width: 150,
        height: 150,
        resizeMode: 'contain',
        marginVertical: 20,
      });
    }

    setOrientacao(`Direção: ${compassDirection}`);
  };

  return (
    <View>
      <MyHeader title={'Bússola'} />
      <ScrollView>
        <View style={{ alignItems: 'center', backgroundColor, borderWidth: 5, borderColor: '#00D3F5' }}>
          <Text style={styles.boldText}>Bússola com pontos cardeais</Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Magnetômetro: {'\n'}
            x: {magnetometro.x} {'\n'}
            y: {magnetometro.y} {'\n'}
            z: {magnetometro.z} {'\n'}
          </Text>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>{orientacao}</Text>
        </View>

        {location && (
          <MapView
            style={[styles.map, { borderWidth: 5, borderColor: 'black' }]}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Onde eu to"
              description="Aqui é o lugar"
            />
          </MapView>
        )}

        {/* Adicione a imagem aqui */}
        <Image
          style={imageStyle}
          source={require('../assets/img/miku_leek.webp')}
        />

        <Button
          style={styles.button}
          labelStyle={styles.buttonText}
          mode="contained"
          onPress={() => navigation.navigate("MenuScreen")}
        >
          VOLTAR
        </Button>
      </ScrollView>
    </View>
  );
};

export default BussolaScreen;
