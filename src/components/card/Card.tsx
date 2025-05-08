import './style.css';

interface Props {
  card: {
    id: number;
  };
}

const Card = ({ card }: Props) => {
  return (
    <li className="card">
      Card {card.id}
    </li>
  )
}

export default Card;
