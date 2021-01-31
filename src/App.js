import './App.css';
import Header from './components/Header/Header';
import Card from './Card/Card';
import cardItemsArr from './cardItemsArr';

function App() {
  return (
    <div className="App">

      <Header />

      <main className="Main-section">
        {cardItemsArr.map((item, index) => (
          <Card
            key={index} 
            {...item}
          />
        ))}
      </main>

    </div>
  );
}

export default App;
