const apiKey = process.env.REACT_APP_UNSPLASH_API_KEY;

// get photos from API to render photos when page initially loads
export async function unsplashInitialLoad() {
  return await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=california&per_page=20`
  ).then(resp => resp.json());
}

// get photos from search input
export async function photoSearchApiCall(searchInput) {
  return await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${apiKey}&query=${searchInput}`
  ).then(resp => {
    return resp.json();
  });
}
