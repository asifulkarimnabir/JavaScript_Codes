const API_KEY = "d528cf1c04a8473e8f3172d1b7de1515";
const url = "https://newsapi.org/v2/everything?q=";
window.addEventListener("load", () => fetchNews("Bangladesh"));
async function fetchNews(query) {
  const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
  const data = await res.json();
  console.log(data);
}
