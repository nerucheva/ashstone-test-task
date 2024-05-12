import { useState, useEffect } from 'react';

import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { CardFeed } from './components/CardFeed';
import { MobileMenuModal } from './components/MobileMenuModal';

import { Post } from './components/Card';

import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [postsList, setPostsList] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://cloud.codesupply.co/endpoint/react/data.json');
        const data = await response.json();
        setPostsList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredCars = filterPosts(query, postsList);
      setPostsList(filteredCars);
    }, 300);

    return () => clearTimeout(Debounce);
  }, [query, postsList]);

  const filterPosts = (searchText: string, postsList: Post[]) => {
    if (!searchText) {
      return postsList;
    }
    return postsList.filter(({ title, text }) => title.toLowerCase().includes(searchText.toLowerCase()) || text.toLowerCase().includes(searchText.toLowerCase()));
  };

  return (
    <>
      <Header onClick={() => setIsVisible(true)} searchOnChange={(e) => setQuery(e.target.value)} />

      <main>
        <Menu />

        <MobileMenuModal onClose={() => setIsVisible(false)} isVisible={isVisible} />

        <h1 className="visuallyHidden">Home page</h1>

        <section className="cardFeedWrapper">
          <CardFeed data={postsList} />
        </section>
      </main>
    </>
  );
}

export default App;
