import styles from './SkSectionCard.module.css';
import { Fragment } from 'react';
import { shape, exact, string, arrayOf } from 'prop-types';
import { getPublicAsset } from 'utils';

export function SkSectionCard({
  item: { id, title, link, cover },
  ...restProps
}) {
  const coverStyle = {
    background: `url(${getPublicAsset(
      `gateway/${cover}`
    )}) no-repeat left top / cover`,
  };

  return (
    <article className={styles.component} aria-labelledby={id} {...restProps}>
      <a
        href={link.href}
        title={`${link.text}${link.cheon} 이동`}
        style={coverStyle}
      >
        <h3 id={id} className={styles.title}>
          {title.map((content, index) => (
            <Fragment key={content}>
              {content}
              {index < title.length - 1 && <br />}
            </Fragment>
          ))}
        </h3>
        <div className={styles.linkText}>
          <span>{link.text}</span> 바로가기
        </div>
      </a>
    </article>
  );
}

SkSectionCard.propTypes = {
  item: shape({
    id: string,
    titie: arrayOf(string),
    link: exact({
      text: string,
      cheon: string,
      href: string,
    }),
    cover: string,
  }),
};
