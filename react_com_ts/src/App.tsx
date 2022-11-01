import FirstComponent from "./components/FirstComponent"

function App() {

  // variáveis 

  const name: string = "Halister"
  const age: number = 32
  const isWorking: boolean = false

  // funções

  const userGreeting = (name: string): string => `Olá ${name}`

  return (
    <div className="App">
      <h1> TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          Está trabalhando
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
      <FirstComponent />
    </div>
  );
}

export default App;
