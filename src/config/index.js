if (!process.env.REACT_APP_GIPHY_API_KEY) {
  throw new Error('Giphy API required. Set the environment variable "REACT_APP_GIPHY_API_KEY"');
}

export const REQUIRED_LIKES = 5;
export const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;