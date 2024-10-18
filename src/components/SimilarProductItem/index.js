import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {imageUrl, title, authour, price, rating} = productDetails

  return (
    <li>
      <div>
        <img src={imageUrl} alt={`similar product ${title}`} />
      </div>
      <h1>{title}</h1>
      <p>{authour}</p>
      <div>
        <p>Rs {price}</p>
        <p>{rating}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/star-img.png"
          alt="star"
        />
      </div>
    </li>
  )
}

export default SimilarProductItem
