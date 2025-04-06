import { View, Text, StyleSheet, Button } from 'react-native';
import { useState, useEffect } from 'react';
import ButtonsPower from '../../components/ButtonsPower'
import ButtonsRefresh from '../../components/ButtonsRefresh';
import TankAnimation from '../../components/TankAnimation';
import { connectMqtt,  publishMessage, disconnectMqtt} from '../../services/mqttService'

export default function Tab() {

  const [tankLevel, setTankLevel] = useState(0);
  const [auto, setAuto] = useState(true);
  const [autoText, setAutoText] = useState("Automático Ativado");

  useEffect(() => {
    connectMqtt(setTankLevel);

    return () => {
      disconnectMqtt();
    }
  }, []);

  // function startControl() {
  //   connectMqtt(setTankLevel);
  // }

  // function stopControl() {
  //   disconnectMqtt();
  // }

  function testeMotor() {
    publishMessage('toggleBomba');
  }

  function testeSolenoide() {
    publishMessage('toggleSolenoide');
  }

  function toggleAuto() {
    if (auto) {
      setAutoText("Automático Desativado");
    } else { 
      setAutoText("Automático Ativado");
    }
    publishMessage('toggleAuto');
    setAuto(!auto);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de nível</Text>

      <View style={styles.tank}>
        <TankAnimation progress={tankLevel} />
      </View>

      {/* <View style={styles.buttons}>
        <ButtonsPower
          title='Start'
          screen={startControl} 
        />
        <ButtonsPower
          title='Stop'
          screen={stopControl} 
        />
      </View> */}
      <View style={styles.buttons2}>
        <ButtonsPower
          title='Motor'
          screen={testeMotor} 
        />
        <ButtonsPower
          title='Solenoide'
          screen={testeSolenoide} 
        />
      </View>
      <View style={styles.refresh}>
        <ButtonsRefresh
          title={autoText}
          screen={toggleAuto}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 110
  },
  buttons2: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 110 // 215
  },
  refresh: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    position: 'absolute',
    top: 10
  },
  tank: {
    position: 'absolute',
    top: 150
  },
});
