import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const larguraTela = Dimensions.get('window').width;
const alturaTela = Dimensions.get('window').height;

const styles = StyleSheet.create({
    Container: {
        flexGrow: 1,
        marginTop: 20
    },
    ItemLista: {
        width: '100%',
        heigth: '40px',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginTop: 5,
        backgroundColor: '#2F99EB'
    },
    TextoLista: {
        color: 'white'
    },
    BotaoLista: {
        width: '100%',
    },
    Loading: {
        position: 'absolute',
        top: (alturaTela / 2) - 60,
        left: (larguraTela / 2) - 60,
        width: 120,
        height: 120,
    },
    InputBusca: {
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 5,
        paddingVertical: 5,
        paddingHorizontal: 5
    }
})

export default styles;