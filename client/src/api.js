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
    list(nameApi) {
      //return [];
      //throw new Error("Not found");
      return callApi(`/${nameApi}`);
    },
    getById(nameApi,id){      
      return callApi(`/${nameApi}/${id}`);
    },
    create(nameApi,usuario) {
      //throw new Error("500: Server error");
      return callApi(`/${nameApi}`, {
        method: "POST",
        body: JSON.stringify(usuario)
      });
    },
    read(nameApi,id) {
      return callApi(`/${nameApi}/${id}`);
    },
    update(nameApi,id,updates) {
      return callApi(`/${nameApi}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(nameApi,id) {
      return callApi(`/${nameApi}/${id}`, {
        method: "DELETE"
      });
    }
};

export default api;
