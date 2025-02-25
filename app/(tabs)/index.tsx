import { View, Text, StyleSheet } from 'react-native';
import ButtonsPower from '../../components/ButtonsPower'
import ButtonsRefresh from '../../components/ButtonsRefresh';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de nível</Text>
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
      <View>
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 420
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
});
