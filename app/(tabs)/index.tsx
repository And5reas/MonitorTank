import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import ButtonsPower from '../../components/ButtonsPower'
import ButtonsRefresh from '../../components/ButtonsRefresh';
import TankAnimation from '../../components/TankAnimation';

export default function Tab() {

  const [progress, setProgress] = useState(0);

  const aumentarProgresso = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 5)); //quantidade a cada click
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de nível</Text>

      <View style={styles.tank}>
        <TankAnimation progress={progress} />
        <Button title="Aumentar Progresso" onPress={aumentarProgresso} />
      </View>

      <View style={styles.buttons}>
        <ButtonsPower
          title='Power'
          screen=""
        />
        <ButtonsPower
          title='Power'
          screen=""
        />
      </View>
      <View style={styles.refresh}>
        <ButtonsRefresh
          title='Refresh'
          screen=''
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
