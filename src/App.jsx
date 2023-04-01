import useFetch from "./hooks/useFetch";

const App = () => {

const {data, loading, error}= useFetch("https://jsonplaceholder.typicode.com/users")
  if (loading) return <p>Cargando.....</p>
  if (error) return <p>{error}</p>
  return (
    <>
      <h1>UseFetch</h1>
      <ul>
          {data.map(
            (user) => (
              <li key={user.id}>{user.name}</li>
            )
          )}
          
      </ul>
    </>
  )
}
export default App;