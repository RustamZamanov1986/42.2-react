import "./styles.css";

function AnimalCard({ animalData }) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalData.name}</h3>
      <div>{animalData.species}</div>
      <img src={animalData.image} alt={animalData.name} />
    </div>
  );
}

export default AnimalCard;