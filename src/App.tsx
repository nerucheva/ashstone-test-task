import { useState, useEffect } from 'react';

import { Header } from 'src/components/Header';
import { Menu } from 'src/components/Menu';
import { CardFeed } from 'src/components/CardFeed';
import { MobileMenuModal } from 'src/components/MobileMenuModal';
import { Post } from 'src/components/Card';

import './App.css';

export const App: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [postsList, setPostsList] = useState<Post[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://cloud.codesupply.co/endpoint/react/data.json',
          { signal },
        );

        const data = await response.json();

        setPostsList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  const filteredPosts = query
    ? postsList.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.text.toLowerCase().includes(query.toLowerCase()),
      )
    : postsList;

  return (
    <>
      <Header
        onClick={() => setIsVisible(true)}
        searchOnChange={(e) => setQuery(e.target.value)}
      />
      <main>
        <Menu />
        <MobileMenuModal
          onClose={() => setIsVisible(false)}
          isVisible={isVisible}
        />
        <h1 className="visuallyHidden">Home page</h1>
        <section className="cardFeedWrapper">
          <CardFeed data={filteredPosts} />
        </section>
      </main>
    </>
  );
};
