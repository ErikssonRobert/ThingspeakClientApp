import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    headerText: {
        fontSize: 20,
        height: 40,
        textAlign: 'center'
    },
    button: {
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'center',
        width: '50%',
        height: 60,
        margin: 8,
        position: 'relative'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        width: '80%',
        textAlign: 'center',
        margin: 8,
        position: 'relative',
        alignSelf: 'center',
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10,
    }
});