import axios from "axios";
import { BUSCA_UFS, LISTA_UFS } from "../variaveis_globais/endpoints";
import { trataErro } from "./tratarErros";

export function servico_retornaUFs(setListaUFs, setIsLoading) {
    setIsLoading(true);

    axios.get(LISTA_UFS,{
        timeout: 30000
      }
    ).then((response) => {
      setListaUFs(response.data);
      setIsLoading(false)
    }).catch((error) => {
      setIsLoading(false)
      trataErro(error);
    })
}

export function servico_buscaUFs(termo, setListaUFs, setIsLoading) {
    if(termo === "") {
        setListaUFs(null);
        return;
    }

    setIsLoading(true);

    axios.get(BUSCA_UFS+termo, {
    timeout: 30000
    }).then((response) => {
        setListaUFs(response.data);
        setIsLoading(false);
    }).catch((error) => {
        setIsLoading(false);
        trataErro(error, () => {setListaUFs(null)});
    })
}