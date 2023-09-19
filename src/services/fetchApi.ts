const URL_API = 'https://servicodados.ibge.gov.br/api/v3/noticias/';

export async function fetchApi() {
  const response = await fetch(URL_API);
  const data = await response.json();
  return data;
}