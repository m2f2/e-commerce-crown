import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, DirectoryItemContainer } from "./directory-item.styles";
// eslint-disable-next-line react/prop-types
const DirectoryItem = ({category}) => {
          // eslint-disable-next-line react/prop-types
          const {imageUrl, title, id, route} = category;
          const navigate = useNavigate();
          const onNavigateHandler =()=> navigate(route)
          return (
                    <DirectoryItemContainer key={id} onClick={onNavigateHandler}>
                                <BackgroundImage imageUrl={imageUrl} />
                                <Body>
                                  <h2>{title}</h2>
                                  <p>Shop Now</p>
                                </Body>
                    </DirectoryItemContainer>
                    
          )
}

export default DirectoryItem;