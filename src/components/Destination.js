import "./DestinationStyles.css";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1> Popular Destinations</h1>
      <p>Tours give you the Opportunity to travel</p>
      <DestinationData
        className="first-des"
        heading="Bali, Indonesia"
        text=" Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller offshore islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the southeast"
        img1="https://cdn.audleytravel.com/2478/1770/79/16027396-pura-ulun-danu-bratan-bali.jpg"
        img2="https://balidave.com/wp-content/uploads/2022/11/best-hotel-bali.jpeg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Swiss Alp, Switzerland"
        text=" The Alpine region of Switzerland, conventionally referred to as the
      Swiss Alps, represents a major natural feature of the country and
      is, along with the Swiss Plateau and the Swiss portion of the Jura
      Mountains, one of its three main physiographic regions"
        img1="https://media.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Fexplore%2FDepositphotos_66016481_S.jpg?w=480&auto=format%2Ccompress&fit=max"
        img2="https://lp-cms-production.imgix.net/2024-04/LPT0115-001.jpg?w=600&h=400"
      />
    </div>
  );
};
export default Destination;
