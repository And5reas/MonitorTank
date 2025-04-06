import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

// Definição dos tipos das props do componente
interface ButtonsRefreshProps {
    title: string;
    screen: Function;
}

const ButtonsRefresh: React.FC<ButtonsRefreshProps> = ({ title, screen }) => {

    return (
        <TouchableOpacity style={styles.button} onPress={() => screen()}>
            <View>
                <Text style={styles.title} numberOfLines={2} adjustsFontSizeToFit>
                    {title}
                </Text>
            </View>
                <Ionicons name="refresh" size={40} color="white"/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#008CBA",
        paddingHorizontal: 10,
        marginVertical: 8, //top e baixo
        borderRadius: 15,
        width: 310,
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

export default ButtonsRefresh;
