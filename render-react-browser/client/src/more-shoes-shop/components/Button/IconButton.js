const { React } = window;

const getIconShapePath = (shape) =>
  shape === 'hambuger'
    ? 'M8 9H22V11H8V9ZM8 14H22V16H8V14ZM22 19H8V21H22V19Z'
    : 'M19.0173 11.0014H21H22V12.0014V21.0005V22.0005H21H9H8V21.0005V12.0014V11.0014H9H10.9829C11.4261 9.27523 12.9926 7.99948 14.8571 7.99948H15.1431C17.0076 7.99948 18.5741 9.27523 19.0173 11.0014ZM16.8752 10.9991H13.125C13.4708 10.4015 14.117 9.99948 14.8571 9.99948H15.1431C15.8832 9.99948 16.5294 10.4015 16.8752 10.9991ZM10 20.0005V13.0014H20V20.0005H10Z';

export function IconButton({ type, shape, label, color }) {
  return (
    <button type={type} className="IconButton" aria-label={label}>
      <svg width={30} height={30} viewBox="0 0 30 30" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d={getIconShapePath(shape)}
          fill={color}
        />
      </svg>
    </button>
  );
}

IconButton.defaultProps = {
  type: 'button',
  shape: 'hambuger',
  label: '메뉴 열기',
  color: '#242CF8',
};
