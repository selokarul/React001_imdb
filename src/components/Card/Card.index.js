import {StyledCardWrapper, StyledCardText, StyledMovieImage} from "./Card.style"; 

export const Card = ({title, imgSrc}) => {
    return(
        <StyledCardWrapper>
            <StyledMovieImage src={imgSrc}/>
            <StyledCardText>{title}</StyledCardText>
        </StyledCardWrapper>

    );
}; 