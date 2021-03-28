import './App.scss';
import Header from './componentes/Header/Header';
import Hero from './componentes/Hero/Hero';
import About from './componentes/About/About';
import Products from './componentes/Products/Products';
import Services from './componentes/Services/Services';


const App =() => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
    </div>
  );
}

export default App;
