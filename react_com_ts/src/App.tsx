import { createContext } from "react"
import Destructuring, {Category} from "./components/Destructuring"
import FirstComponent from "./components/FirstComponent"
import SecondComponent from "./components/SecondComponent"
import State from "./components/State"

interface IAppContext {
  language: string,
  framework: string,
  projects: number
}

const contextValue: IAppContext = {
  language: 'JavaScript',
  framework: 'Express',
  projects: 5
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // variáveis 

  const name: string = "Halister"
  const age: number = 32
  const isWorking: boolean = false

  // funções

  const userGreeting = (name: string): string => `Olá ${name}`

  // type 

  type textOrNull = string | null
  type fixed = 'isso' | 'ou' | 'aquilo'

  const myText: textOrNull = 'Tem algum texto aqui';
  const mySecondText: textOrNull = null;
  const testeFixed: fixed = 'isso'

  // context 

  

  return (
   <AppContext.Provider value={contextValue}>

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
      <SecondComponent name="Segundo" />
      <Destructuring 
      title="Primeiro post"
      content="some content"
      comentsQty={10}
      tags={['ts', 'js']} 
      category={Category.TS}
      />
      <State />
      {myText && (<p>Tem algum texto aqui</p>)}
      {mySecondText && (<p>Tem algum texto aqui</p>)}
    </div>
  </AppContext.Provider>
  );
}

export default App;

