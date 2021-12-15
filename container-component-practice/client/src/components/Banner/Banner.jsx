import './Banner.css';
import { classNames, getPublicAsset } from 'utils';
import { A11yHidden } from 'components';

/* -------------------------------------------------------------------------- */

export function Banner({
  as: Comp,
  url,
  width,
  height,
  className,
  style,
  children,
  ...restProps
}) {
  const bannerStyles = {
    margin: 0,
    width,
    height,
    background: `url(${getPublicAsset(url)}) no-repeat center center / cover`,
  };

  return (
    <Comp
      data-testid="banner"
      className={classNames('banner', className)}
      style={{
        ...bannerStyles,
        ...style,
      }}
      {...restProps}
    >
      <A11yHidden>{children}</A11yHidden>
    </Comp>
  );
}

Banner.defaultProps = {
  as: 'figure',
  width: 187,
  height: 400,
};
