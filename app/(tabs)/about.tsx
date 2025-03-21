import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';

export default function Tab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
          <Text style={styles.title}>Monitor Tank</Text>
          <Text style={styles.text}>
            Texto de exemplo. Nosso aplicativo foi desenvolvido para monitorar o nível de água em um tanque em tempo real. Utilizando um sensor de nível,
            ele exibe a porcentagem atual do reservatório e permite o controle automático ou manual da bomba d’água. Com isso, garantimos
            uma gestão eficiente do abastecimento, evitando desperdícios e garantindo que nunca falte água.
          </Text>
          <Text style={styles.subtitle}>Integrantes</Text>
          <View style={styles.profileContainer}>
            <View style={styles.profileContainer}>
              <View style={styles.profileItem}>
                <Image style={styles.profile} source={require('../../assets/images/andreas.jpeg')} />
                <Text style={styles.profileText}>Andreas Porcel - 216590</Text>
              </View>

              <View style={styles.profileItem}>
                <Image style={styles.profile} source={require('../../assets/images/fabricio.jpeg')} />
                <Text style={styles.profileText}>Fabricio Andrade - 215446</Text>
              </View>

              <View style={styles.profileItem}>
                <Image style={styles.profile} source={require('../../assets/images/juliana.jpeg')} />
                <Text style={styles.profileText}>Juliana Pallin - 214707</Text>
              </View>

              <View style={styles.profileItem}>
                <Image style={styles.profile} source={require('../../assets/images/lucas.jpeg')} />
                <Text style={styles.profileText}>Lucas Barbosa - 214636</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 400,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 420
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    alignSelf: 'center'
  },
  text: {
    fontSize: 15,
    marginHorizontal: 5
  },
  profileContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 10
  },
  profileItem: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 10,

  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});