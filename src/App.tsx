import { useState } from 'react';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CardFeed } from './components/CardFeed';
import { MobileMenuModal } from './components/MobileMenuModal';

import './App.css';

const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');

const data = await response.json();

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Header onClick={() => setIsVisible(true)} />

      <main>
        <div className="menuDesktop">
          <Menu />
        </div>

        <MobileMenuModal onClose={() => setIsVisible(false)} isVisible={isVisible} isMobileMenu />

        <div className="cardFeedWrapper">
          <CardFeed data={data} />
        </div>
      </main>
    </>
  );
}

export default App;
