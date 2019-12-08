import types from './types';

const giphyLike = (payload) => ({
  type: types.GIPHY_LIKE,
  payload
});

const giphyUnlike = (payload) => ({
  type: types.GIPHY_UNLIKE,
  payload
});

export default {
  giphyLike,
  giphyUnlike,
};
