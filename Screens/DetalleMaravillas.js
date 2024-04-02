import React from 'react';
import { View, StyleSheet,Text, Button, Image } from 'react-native';
const DetalleMaravillas = ({ route, navigation }) => {
const { tips } = route.params;
return (
<View style={styles.container}>
<Text style={styles.heading}>{tips.nombre}</Text>
<Image source={{ uri: tips.imagen }} style={styles.imagen} />
<Text style={styles.tipTitle}>Consejos para Viajar</Text>
<View style={styles.tipContainer}>
{tips.Consejos.map((tip, tipIndex) => (
<Text style={styles.tip} key={tipIndex}>{`${tipIndex + 1}.
${tip}`}</Text>
))}
</View>
<Button
title="Volver"
onPress={() => navigation.goBack()}
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
backgroundColor: '#fff',
},
heading: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
textAlign: 'center',
},
tipContainer: {
marginBottom: 20,
},
tipTitle: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 10,
},
tip: {
fontSize: 16,
marginBottom: 5,
},
imagen: {
width: '100%',
aspectRatio: 2, // Ajustar el aspecto de la bandera
resizeMode: 'cover', // Ajustar la imagen para cubrir toda el área
borderColor:'#000000'
},
});
export default DetalleMaravillas;