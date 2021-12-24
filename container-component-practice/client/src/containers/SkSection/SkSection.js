import styles from './SkSection.module.css';
import { useState, useEffect } from 'react';
import { SkHeading, SkLoading, SkSectionCard } from 'components';
import { getSkCards } from 'api';

export function SkSection() {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  // error
  const [error, setError] = useState(null);
  // success
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getSkCards()
      .then(({ gateway }) => {
        setCards(gateway);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <SkLoading />;
  }

  if (error) {
    return <div role="alert">{error.message}</div>;
  }

  return (
    <section className={styles.component}>
      <SkHeading as="h2" className={styles.title}>
        gateway
      </SkHeading>
      {cards.length > 0 && (
        <div className={styles.list}>
          {cards.map((cardItem) => (
            <SkSectionCard key={cardItem.id} item={cardItem} />
          ))}
        </div>
      )}
    </section>
  );
}
