import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 8,
        marginTop: 16
    },
    addBox: {
        height: 200,
        width: '80%',
        borderWidth: 2,
        borderColor: '#696969',
        borderRadius: 4,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: '15%',
        backfaceVisibility: 'hidden',
    }
});