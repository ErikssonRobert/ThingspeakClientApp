import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
        backgroundColor: COLORS.BLUE
    },
    componentBox:{
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
        backgroundColor: COLORS.BLUE,
        borderColor: COLORS.RED,
        borderWidth: 2,
        borderRadius: 4,
    },
    addBox: {
        height: 200,
        width: '80%',
        borderWidth: 3,
        borderColor: COLORS.BROWN,
        borderRadius: 4,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '25%',
        backfaceVisibility: 'hidden',
        backgroundColor: COLORS.LIGHTBLUE
    }
});