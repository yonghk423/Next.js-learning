const API_KEY = "4c5d0a3408a359c4fa9760f4856529bc";

module.exports = {
  reactStrictMode: true,
  
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    }]
  }
}

