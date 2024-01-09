import "./category-item.styles.scss";
// eslint-disable-next-line react/prop-types
const CategoryItem = ({category}) => {
          // eslint-disable-next-line react/prop-types
          const {imageUrl, title, id} = category;
          return (
                    <div key={id} className="category-container">
                                <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
                                <div className="category-body-container">
                                  <h2>{title}</h2>
                                  <p>Shop Now</p>
                                </div>
                    </div>
                    
          )
}

export default CategoryItem;