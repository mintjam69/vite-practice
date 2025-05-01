export function saveInLS(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
