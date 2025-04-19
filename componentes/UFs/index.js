import React from "react";

import styles from "../../estilos"
import {Text, View, ScrollView} from "react-native";

export default function ListagemUFs({listaUFs}) {
    return (
        <>
        {
            (listaUFs !== null) ?
            <ScrollView>
            {

            listaUFs.map((uf) => (
                <View style={styles.ItemLista} key={uf.id}>
                    <Text style={styles.TextoLista}>{uf.nome}</Text>
                </View>
            ))

            }
            </ScrollView>
        :
            <></>
        }
        </>
    )
}