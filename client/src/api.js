const BASE_URL = "http://localhost:4000";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 50, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
    list(nombre) {
      //return [];
      //throw new Error("Not found");
      return callApi(`/${nombre}`);
    },
    create(nombre,usuario) {
      //throw new Error("500: Server error");
      return callApi(`/${nombre}`, {
        method: "POST",
        body: JSON.stringify(usuario)
      });
    },
    read(nombre,id) {
      return callApi(`/${nombre}/${id}`);
    },
    update(nombre,id,updates) {
      return callApi(`/${nombre}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(nombre,id) {
      return callApi(`/${nombre}/${id}`, {
        method: "DELETE"
      });
    }
};

export default api;
