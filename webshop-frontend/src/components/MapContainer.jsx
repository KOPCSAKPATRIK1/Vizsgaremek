import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styled from "styled-components";

const Container = styled.div`
  border: 4px solid  #ffa1ff;
 box-shadow: 0px 0px 10px black;
 margin-bottom: 20px;
`;

const MapContainer = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 47.50536563534431,
    lng: 19.088878539708436,
  };

  return (
    <Container>
      <LoadScript googleMapsApiKey="AIzaSyCIpj1Jhq1wy6qd1HQUW1StPYiodf45Xq8">
        <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={defaultCenter}>
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    </Container>
  );
};

export default MapContainer;
