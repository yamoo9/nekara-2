import './Emoji.css';
import { getPublicAsset } from 'utils';

export default function Emoji({ image, label }) {
  return (
    <figure className="emoji">
      <img src={getPublicAsset(image)} alt={label} title={label} />
    </figure>
  );
}
