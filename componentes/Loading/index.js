import React from "react";
import { Image } from "react-native";

import LoadingGIF from '../../assets/loading.gif';
import styles from "../../estilos";

export default function Loading({isLoading}) {
    return (
        <>
        {
            isLoading ?
            <Image source={LoadingGIF} style={styles.Loading} />
            :
            <></>
        }
        </>
    )
}