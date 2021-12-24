import styles from './SkSection.module.css';
import { useState, useEffect } from 'react';
import { SkHeading, SkLoading, SkSectionCard } from 'components';
import { getSkCards } from 'api';
// import { delay } from 'utils';

interface SkSectionProps {
  cards: SectionItem[];
}

export function SkSection(props: SkSectionProps) {
  // isLoading
  const [isLoading, setIsLoading] = useState(true);
  // error
  const [error, setError] = useState(null);
  // success
  const [cards, setCards] = useState([]);

  // 사이드 이펙트 관리
  // 네트워크 통신
  // 통신 상태에 따라 상태 업데이트
  // - 로딩 중인지?
  // - 오류가 발생했는지?
  // - 성공해서 데이터를 업데이트 할건지?
  useEffect(() => {
    // promise 활용
    // delay(2000).then(() => {
    //   getSkCards()
    //     .then(({ gateway }) => setCards(gateway))
    //     .catch((error) => setError(error))
    //     .finally(() => setIsLoading(false));
    // });
    //
    // getSkCards()
    //   .then(({ gateway }) => setCards(gateway))
    //   .catch((error) => setError(error))
    //   .finally(() => setIsLoading(false));

    // async 함수 활용
    const fetchData = async () => {
      try {
        const { gateway } = await getSkCards();
        setCards(gateway);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };

    fetchData();
    // delay().then(() => fetchData());
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
