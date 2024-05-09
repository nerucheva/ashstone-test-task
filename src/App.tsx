// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CardFeed } from './components/CardFeed';

import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header onClose={() => console.log('!')} />

      <main>
        <div className="menuDesktop">
          <Menu />
        </div>

        {/* <Menu isMobile onClick={() => console.log('!')} /> */}

        <div className="cardFeedWrapper">
          <CardFeed />
        </div>
      </main>
    </>
  );
}

export default App;
