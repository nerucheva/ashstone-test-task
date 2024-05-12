import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CardFeed } from './components/CardFeed';
import { MobileMenuModal } from './components/MobileMenuModal';

import { Post } from './components/Card';

import './App.css';

const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');

const filterPosts = (searchText: string, postsList: Post[]) => {
  if (!searchText) {
    return postsList;
  }
  return postsList.filter(({ title, text }) => title.toLowerCase().includes(searchText.toLowerCase()) || text.toLowerCase().includes(searchText.toLowerCase()));
};

const data = await response.json();

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const [query, setQuery] = useState('');
  const [postsList, setPostsList] = useState(data);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterPosts(query, data);
      setPostsList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [query]);

  return (
    <>
      <Header onClick={() => setIsVisible(true)} searchOnChange={(e) => setQuery(e.target.value)} />

      <main>
        <Menu />

        <MobileMenuModal onClose={() => setIsVisible(false)} isVisible={isVisible} />

        <div className="cardFeedWrapper">
          <CardFeed data={postsList} />
        </div>
      </main>
    </>
  );
}

export default App;
