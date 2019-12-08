import { GIPHY_API_KEY } from '../config';

export const giphyTranslatePhraseToGif = async (phrase, weirdness) => {
  const url = window.encodeURI('https://api.giphy.com/v1/gifs/translate' +
    `?api_key=${GIPHY_API_KEY}` +
    `&s=${phrase}` +
    `&weirdness=${weirdness}`);
  const response = await fetch(url);
  const data = await response.json();
  return data?.data?.images?.downsized?.url;
}
