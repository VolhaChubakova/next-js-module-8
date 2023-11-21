export default async function getData() {
  const res = await fetch(`http://localhost:4000/movies`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}