import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Definição dos tipos das props do componente
interface ButtonsPowerProps {
    title: string;
    screen: Function;
}

const ButtonsPower: React.FC<ButtonsPowerProps> = ({ title, screen }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={() => screen}>
            <View>
                <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
                    {title}
                </Text>
            </View>
                <Ionicons name="power" size={40} color="white"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#008CBA",
        paddingHorizontal: 10,
        marginVertical: 8, //top e baixo
        borderRadius: 15,
        width: 150,
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 10
    },
    title: {
        fontSize: 20,
        color: "#fff",
        flexWrap: "wrap",
        marginBottom: 10,
    },
});

export default ButtonsPower;
