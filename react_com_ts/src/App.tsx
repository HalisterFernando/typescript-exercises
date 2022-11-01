

function App() {

  // variáveis 

  const name: string = "Halister"
  const age: number = 32
  const isWorking: boolean = false

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
    </div>
  );
}

export default App;
