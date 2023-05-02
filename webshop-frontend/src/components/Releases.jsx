import styled from "styled-components";
import React, { useState, useEffect } from "react";
import Release from "./Release";
import { mobile } from "../responsive";

const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  padding-left: 11vw;
  padding-right: 11vw;
  padding-bottom: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid #ffa1ff;
  ${mobile({ padding: "10px" })}
`;

const Releases = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:3000/releases");
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {loading && <div>Adatok betöltése folyamatban...</div>}
      {error && (
        <div>{`Probléma történt az adatok betöltésével. - ${error}`}</div>
      )}

      <Container>
        {data &&
          data.slice(0, 8).map((item) => <Release key={item.id} item={item} />)}
      </Container>
    </div>
  );
};

export default Releases;
