import "./styles.css";
import thanosImage from "../assets/thanos.JPG";

function ProfileCard() {
  return (
    <div className="Container">
      <div className="Profile-Card">
        <h3>Profile Card</h3>
        <img src={thanosImage} alt="Avatar" className="Profile-Card-Image" />
        <h4>Θάνος</h4>
        <h5> &#60; Powerful Titan &#62; &#128187;</h5>
        <p className="font-size">
          Thanos is the main antagonist of the Infinity Saga of the Marvel
          Cinematic Universe. He was a powerful Titan from the planet Titan and
          a member of the species of the same name. He collected the Infinity
          Stones to complete the Infinity Gauntlet and use it to wipe out half
          of all living beings in the universe, because in his opinion all
          civilizations would destroy themselves over time if overpopulation was
          not stopped. Thanos commanded the armies of the Chitauri and Outriders
          as well as the Black Order.
        </p>
      </div>
    </div>
  );
}
export default ProfileCard;
