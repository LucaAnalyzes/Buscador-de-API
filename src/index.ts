// Importe o Axios no início do seu arquivo
import axios, { AxiosResponse } from 'axios';
//Essa importação diz ao TypeScript que você deseja usar o Axios e também especifica que você quer 
//importar o tipo AxiosResponse para lidar com a resposta da API.

async function fetchData() {
    //A URL da API da CoinGecko e o nome da criptomoeda desejado são definidos como constantes na função.
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/list?include_platform=true';
    const nomeDesejado = 'Ethereum';

  try {
    //A função usa o Axios para fazer uma requisição à API da CoinGecko e aguarda a resposta.
    const response: AxiosResponse<any[]> = await axios.get(apiUrl);

    if (Array.isArray(response.data)) {
      // Encontre o objeto correspondente ao nome desejado
      //A função verifica se a resposta contém um array e, em seguida, procura pela criptomoeda desejada dentro desse array.
      const criptoMoeda = response.data.find(item => item.name.toLowerCase() === nomeDesejado.toLowerCase());

      if (criptoMoeda) {
        // Se encontrado, extraia o symbol
        const symbol = criptoMoeda.symbol;
        console.log(`O símbolo para ${nomeDesejado} é: ${symbol}`);
      } else {
        console.log(`Não foi possível encontrar a criptomoeda com o nome ${nomeDesejado}.`);
      }
    } else {
      console.log('A resposta não contém um array válido.');
    }
  } catch (error:any) {
    console.error('Erro ao obter dados da API:', error.message);
  }
};

// Chame fetchData quando o DOM estiver completamente carregado
fetchData();