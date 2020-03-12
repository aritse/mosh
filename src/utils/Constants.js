const prod = {
  API_URL: "https://moshsocial-api.herokuapp.com"
};

const dev = {
  API_URL: "http://localhost:8080"
};

const config = process.env.NODE_ENV === "development" ? dev : prod;

export default config;
