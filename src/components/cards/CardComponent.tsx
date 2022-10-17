import styles from './CardComponent.module.css';

export interface ICardComponent {
  sampleTextProp: string;
}

const CardComponent: React.FC<ICardComponent> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default CardComponent;
