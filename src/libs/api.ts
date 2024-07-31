export async function getResponse() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}
