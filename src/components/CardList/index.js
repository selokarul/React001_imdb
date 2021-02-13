import {Card} from "../Card/Card.index.js";
 import {StyledCardList} from "./CardList.style";

 export const CardList = ({movieList, baseImgUrl}) => {
   
     return (
         <StyledCardList>
            {movieList?.map((movie, index)=> 
            <Card 
                title={movie.title} 
                key={index}
                imgSrc={movie.poster_path ? baseImgUrl + movie.poster_path : baseImgUrl + "/aA5qHS0FbSXO8PxcxUIHbDrJyuh.jpg"}
                
            />)}
         </StyledCardList>
     )
 }