import { useState } from 'react';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CardFeed } from './components/CardFeed';
import { MobileMenuModal } from './components/MobileMenuModal';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={isVisible ? 'noOverflow' : undefined}>
      <Header onClick={() => setIsVisible(true)} />

      <main>
        <div className="menuDesktop">
          <Menu />
        </div>

        <MobileMenuModal onClose={() => setIsVisible(false)} isVisible={isVisible} />

        <div className="cardFeedWrapper">
          <CardFeed />
        </div>
      </main>
    </div>
  );
}

export default App;
