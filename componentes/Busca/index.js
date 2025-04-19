import styles from "../../estilos"
import {Button, TextInput} from "react-native";

export default function Busca({mostraBotao, retornaListaUFs, buscaUFs}) {

    return (
        <>
            <TextInput style={styles.InputBusca} onChangeText={(termo) => buscaUFs(termo)} />
        {
            mostraBotao ?
            <Button style={styles.BotaoLista} onPress={retornaListaUFs} title="Listar UFs" />
            :
            <></>
        }
        </>
    )
}