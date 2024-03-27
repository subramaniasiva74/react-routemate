import { Header, Footer } from './components/index.js';
import { AllRoutes } from './routes/AllRoutes.js';



import './App.css';

function App() {
  const user = true;


  return (
    <div className="App">
      <Header />
      <AllRoutes userStatus={user}/>
      <Footer />

    </div>
  );
}

export default App;
