import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet, Text } from "react-native";

interface TankAnimationProps {
    progress: number; 
}

const TankAnimation: React.FC<TankAnimationProps> = ({ progress }) => {
    const animatedValue1 = useRef(new Animated.Value(0)).current;
    const animatedValue2 = useRef(new Animated.Value(100)).current;

    useEffect(() => {
        Animated.timing(animatedValue1, {
            toValue: progress,
            duration: 500,
            useNativeDriver: false,
        }).start();

        Animated.timing(animatedValue2, {
            toValue: 100 - progress,
            duration: 500,
            useNativeDriver: false,
        }).start();
    }, [progress]);

    const heightInterpolate1 = animatedValue1.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });

    const heightInterpolate2 = animatedValue2.interpolate({
        inputRange: [0, 100],
        outputRange: ["0%", "100%"],
    });

    return (
        <View style={styles.container}>
            {/* Segunda barra (inversa da primeira) */}
            <View style={styles.progressBackground}>
                <Animated.View style={[styles.progressFill2, { height: heightInterpolate2 }]} />
                <Text style={styles.textprogress}>{100 - progress}%</Text>
            </View>
            {/* Primeira barra */}
            <View style={styles.progressBackground}>
                <Animated.View style={[styles.progressFill1, { height: heightInterpolate1 }]} />
                <Text style={styles.textprogress}>{progress}%</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 10, 
        marginBottom: 10
    },
    progressBackground: {
        width: 150,
        height: 180,
        backgroundColor: "#ddd",
        borderRadius: 5,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "#555",
    },
    progressFill1: {
        width: "100%",
        backgroundColor: "#1ca8ff", 
        position: "absolute",
        bottom: 0,
    },
    progressFill2: {
        width: "100%",
        backgroundColor: "#1ca8ff", 
        position: "absolute",
        bottom: 0,
    },
    textprogress: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
});

export default TankAnimation;
