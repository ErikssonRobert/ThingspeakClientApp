import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        height: 40,
        textAlign: 'center',
        marginTop: 16,
        color: COLORS.ORANGE
    },
    button: {
        width: '50%',
        height: 50,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: COLORS.BROWN,
        backgroundColor: COLORS.RED,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        height: 40,
        borderColor: COLORS.RED,
        backgroundColor: COLORS.ORANGE,
        color: COLORS.BROWN,
        borderWidth: 2,
        width: '80%',
        textAlign: 'center',
        margin: 8,
        position: 'relative',
        alignSelf: 'center',
        fontSize: 18,
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: COLORS.BROWN,
        backgroundColor: COLORS.RED,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 10,
        right: 10,
    },
    picker: {
        height: 40,
        borderColor: COLORS.BROWN,
        color: COLORS.ORANGE,
        borderWidth: 2,
        width: '60%',
        margin: 8,
        position: 'relative',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 22,
        color: COLORS.BLUE,
    },
    loadingBig: {
        position: 'absolute',
        alignSelf: 'center',
        marginTop: '50%',
        transform: [{ scale: 3 }],
    }
});