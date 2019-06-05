import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
    containerSingle: {
        alignSelf: 'center',
        height: 100,
        width: '98%',
        backgroundColor: COLORS.BROWN,
        borderWidth: 2,
        borderColor: COLORS.DARKBROWN,
        borderRadius: 4,
        padding: 6,
        marginTop: 6
    },
    containerGraph: {
        alignSelf: 'center',
        height: 220,
        width: '98%',
        backgroundColor: COLORS.BROWN,
        borderWidth: 2,
        borderColor: COLORS.DARKBROWN,
        borderRadius: 4,
        padding: 6,
        marginTop: 6
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.ORANGE
    },
    value: {
        position: 'absolute',
        alignSelf: 'center',
        right: 26,
        bottom: 16,
        fontSize: 48,
        color: COLORS.ORANGE,
        fontWeight: 'bold'
    },
    date: {
        color: COLORS.ORANGE,
        position: 'absolute',
        bottom: 4,
        left: 4,
    },
    loadingSmall: {
        alignSelf: 'center',
        marginTop: 24,
        transform: [{ scale: 2 }]
    },
    deleteBtnTxt: {
        fontSize: 22,
        color: COLORS.BLUE,
    },
    button: {
        width: '50%',
        height: 30,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: COLORS.BROWN,
        backgroundColor: COLORS.RED,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
});