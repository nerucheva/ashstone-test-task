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
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

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
    const debounce = setTimeout(() => {
      const filteredPosts = postsList.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()) || post.text.toLowerCase().includes(query.toLowerCase()));
      setFilteredPosts(filteredPosts);
    }, 300);

    return () => clearTimeout(debounce);
  }, [query, postsList]);

  return (
    <>
      <Header onClick={() => setIsVisible(true)} searchOnChange={(e) => setQuery(e.target.value)} />
      <main>
        <Menu />
        <MobileMenuModal onClose={() => setIsVisible(false)} isVisible={isVisible} />
        <h1 className="visuallyHidden">Home page</h1>
        <section className="cardFeedWrapper">
          <CardFeed data={filteredPosts} />
        </section>
      </main>
    </>
  );
}

export default App;
