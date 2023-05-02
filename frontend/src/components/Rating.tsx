import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface Props {
  value: number;
  text: string;
}

export function Rating({ value, text }: Props) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(<FaStar />);
    } else if (value % 1 !== 0) {
      stars.push(<FaStarHalfAlt />);
    } else {
      stars.push(<FaRegStar />);
    }
  }

  return (
    <div className="rating">
      <span>{stars}</span>
      <span className="rating-text">{text && text}</span>
    </div>
  );
}
