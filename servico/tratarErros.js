export function trataErro(error, callback = null) {
    if(error.response)
      {
        if(error.response.status === 404) {
          callback !== null ?
            callback()
          :
          alert("Erro 404: Endpoint ou resultado não encontrado");
        } else if (error.response.status === 500) {
          alert("Erro interno no servidor. Tente novamente mais tarde.");
        } else {
          alert("Erro no serviço: "+ error.message);
        }
      } else {
        if(error.request)
        {
          if(error.code === 'ECONNABORTED') {
            alert("Erro de timeout: "+ error.message);
          } else {
            alert("Erro na requisição: "+ error.message);
          }
        } else {
          alert("Erro inesperado: "+ error.message);
        }
      }
}