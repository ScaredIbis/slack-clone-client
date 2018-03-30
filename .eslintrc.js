module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "rules": {
    "react/jsx-filename-extension": 0,
    "no-underscore-dangle": 0
  },
  "globals": {
    "document": 1,
    "window": 1
  },
  "parser": "babel-eslint"
};
