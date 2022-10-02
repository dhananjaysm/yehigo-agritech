import styles from './CardComponent.module.css';

export interface ICardComponent {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const CardComponent: React.FC<ICardComponent> = ({
  author,
  body,
  tag,
  time,
  title,
}) => {
  return <div className={styles.container}>{body}</div>;
};

export default CardComponent;
