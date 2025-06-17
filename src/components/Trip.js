import "./TripStyles.css";
import TripData from "../components/TripData";
const Trip = () => {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover new destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDZwg_HWoTb1jeI-gZis3iuvbSgofSdnzArreXEG_PkyysyskJPr4a1WqEBO5_9uqg-D4&usqp=CAU"
          heading="Trip in Indonesia"
          text="Indonesia is famous for its diverse natural landscapes, rich cultural heritage, and abundant natural resources. It's known for beautiful beaches (like Bali), stunning volcanoes, unique wildlife (like Komodo dragons), and vast rainforests. Culturally, it's renowned for traditional arts like batik and Wayang Kulit, and for its diverse ethnic groups and languages. "
        />
        <TripData
          image="https://images.pexels.com/photos/908055/pexels-photo-908055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          heading="Trip in Malaysia"
          text="Malaysia is famous for its diverse culture, delicious cuisine, stunning natural landscapes, and bustling cities. It's a melting pot of Malay, Chinese, Indian, and indigenous influences, offering a unique blend of traditions, festivals, and architectural styles.  "
        />
        <TripData
          image="https://images.pexels.com/photos/358229/pexels-photo-358229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          heading="Trip in Thailand"
          text="Thailand is famous for its stunning beaches and islands, ornate temples, vibrant street food scene, rich cultural heritage, and unique experiences like floating markets and full moon parties. It's a popular destination for tourists seeking a mix of relaxation, adventure, and cultural immersion.  "
        />
      </div>
    </div>
  );
};
export default Trip;
