export interface IHeroComponent {
  sampleTextProp: string;
}

const HeroComponent: React.FC<IHeroComponent> = () => {
  return (
    <div className="bg-blue-300">
      <span>This is a hero Section</span>
    </div>
  );
};

export default HeroComponent;
