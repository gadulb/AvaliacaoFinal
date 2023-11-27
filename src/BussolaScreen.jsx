import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import MyHeader from './components/MyHeader';
import { Gyroscope, Magnetometer, LightSensor } from 'expo-sensors';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'; // Import MapView and Marker
import { ScrollView } from 'react-native';

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
        width: 480,
        height: 480,
      },
      boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
  });


 
const BussolaScreen = ({ navigation }) => {
  const [giroscopio, setGiroscopio] = useState({});
  const [magnetometro, setMagnetometro] = useState({});
  const [orientacao, setOrientacao] = useState('Retrato');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [location, setLocation] = useState(null);

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

    const magnetometerSubscription = Magnetometer.addListener(
      magnetometroListener
    );
    const lightSensorSubscription = LightSensor.addListener(
      luminosidadeListener
    );
 
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
        setCor('blue');
      } else {
        setOrientacao('Orientação retrato');
        setCor('white');
      }
    }
  };
 
  const updateDirection = (data) => {
    // Calcular a direção baseada nos dados do magnetômetro
    // Este é um exemplo simples e pode precisar de ajustes dependendo do dispositivo
    const angle = Math.atan2(data.y, data.x) * (180 / Math.PI);
    let compassDirection = '';
 
    if (angle >= 45 && angle < 135) {
      compassDirection = 'Sul';
      setBackgroundColor('red')
    } else if (angle >= 135 || angle < -135) {
      compassDirection = 'Oeste';
      setBackgroundColor('green')
    } else if (angle >= -135 && angle < -45) {
      compassDirection = 'Norte';
      setBackgroundColor('blue')
    } else {
      compassDirection = 'Leste';
      setBackgroundColor('yellow')

    }
 
    setOrientacao(`Direção: ${compassDirection}`);
  };
 
  return (
<View>
<MyHeader title={'Bússola'} />
<ScrollView>
<View style={{ alignItems: 'center', backgroundColor }}>
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
              style={styles.map}
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
                

<Button
        title={'VOLTAR AO MENU'}
        onPress={() => navigation.navigate('MenuScreen')}
      />
</ScrollView>
</View>
  );
};
 
export default BussolaScreen;