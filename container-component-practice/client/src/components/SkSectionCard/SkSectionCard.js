import styles from './SkSectionCard.module.css';
import { exact, string } from 'prop-types';

export function SkSectionCard() {
  return (
    <article className={styles.component} aria-labelledby="gateway-03">
      <a href="http://sk.com/ko/careers/careers.jsp" title="채용으로 이동">
        <h3 id="gateway-03" className={styles.title}>
          사람이 자원인 나라
          <br />그 사람을 키우는 SK
        </h3>
        <div className={styles.linkText}>
          <span>채용</span> 바로가기
        </div>
      </a>
    </article>
  );
}

// SkSectionCard.propTypes = {
//   item: exact({
//     id: string,
//   }),
// };
