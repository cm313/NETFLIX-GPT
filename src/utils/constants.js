export const BG_IMG_URL= "https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_small.jpg"

export const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer '+ process.env.REACT_APP_TMDB_KEY
  }
};

export const IMG_CDN_URL= "https://image.tmdb.org/t/p/w300/";

export const GEMINI_API_KEY=process.env.REACT_APP_GEMINI_API_KEY;
