import { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from "styled-components";
import {mobile} from "../responsive"
const Button = styled.button`
  padding: 8px;
  border: 2px solid #ffa1ff;
  border-radius: 100px;
  background-color: #4a4a4a;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #2d2d2d;
  }
  color: white;
  ${mobile({marginLeft:"90px"})}
  
`;

const LikeButton = ({ userId, productId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3000/like/user/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLiked(data.some((like) => like.productId === productId));
      })
      .catch((error) => console.error("Error fetching like status:", error));
  }, [userId, productId]);

  const handleLikeClick = () => {
    if (isLiked) {
      fetch(`http://localhost:3000/like/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLiked(false);
          console.log("Unliked item:", data);
        })
        .catch((error) => console.error("Error unliking item:", error));
    } else {
      fetch("http://localhost:3000/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          productId: productId,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLiked(true);
          console.log("Liked item:", data);
        })
        .catch((error) => console.error("Error liking item:", error));
    }
  };

  return (
    <Button onClick={handleLikeClick}>
      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </Button>
  );
};

export default LikeButton;
