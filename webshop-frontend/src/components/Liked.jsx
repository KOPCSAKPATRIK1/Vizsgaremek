import styled from "styled-components";
import { useState, useEffect } from "react";
import Release from "./Release";
import { mobile } from "../responsive";
import LikedItem from "./LikedItem";
import LogoutButton from "./LogoutButton";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  padding-left: 11vw;
  padding-right: 11vw;
  padding-bottom: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 900px;
  ${mobile({ padding: "10px" })}
`;

const Text = styled.div`
  margin-top: 100px;
  color: white;
  text-align: center;
  font-size: 40px;
  text-shadow: 0px 0px 10px black;
  font-weight: bold;
`;

const Liked = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userId = JSON.parse(localStorage.getItem("user")).id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://localhost:3000/like/user/${userId}`
        );
        if (!response.ok) {
          throw new Error(`This is an HTTP error: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setError(null);
      } catch (err) {
        console.log(err);
        setError("Something went wrong while fetching data.");
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  console.log(data);
  return (
    <div>
      <Text>Kedvenc termékeid:</Text>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <Container>
          {data.map((item) => (
            <LikedItem key={item.id} item={item} />
          ))}
        </Container>
      )}
    </div>
  );
};

export default Liked;
