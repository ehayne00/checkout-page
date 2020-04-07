const get = (url) => 
 fetch(url)
 .then((resp) => resp.json());


const post = (url, data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());


 export default { get, post }
