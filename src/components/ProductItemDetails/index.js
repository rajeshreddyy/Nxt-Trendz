// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FiMinusSquare, FiPlusSquare} from 'react-icons/fi'

import Header from '../Header'

import './index.css'

class ProductItemDetails extends Component {
  state = {productDetails: {}, isLoading: true, quantity: 1}

  componentDidMount() {
    this.getProductItemDetails()
  }

  getTheUpadtedSImilarProducts = similarProducts =>
    similarProducts.map(eachSimilarProduct => ({
      id: eachSimilarProduct.id,
      imageUrl: eachSimilarProduct.image_url,
      availability: eachSimilarProduct.availability,
      brand: eachSimilarProduct.brand,
      description: eachSimilarProduct.description,
      price: eachSimilarProduct.price,
      rating: eachSimilarProduct.rating,
      style: eachSimilarProduct.style,
      title: eachSimilarProduct.title,
      totalReviews: eachSimilarProduct.total_reviews,
    }))

  updateTheProductDetails = productDetails => {
    const updatedDetails = {
      id: productDetails.id,
      imageUrl: productDetails.image_url,
      availability: productDetails.availability,
      brand: productDetails.brand,
      description: productDetails.description,
      price: productDetails.price,
      rating: productDetails.rating,
      similarProducts: [
        ...this.getTheUpadtedSImilarProducts(productDetails.similar_products),
      ],
      style: productDetails.style,
      title: productDetails.title,
      totalReviews: productDetails.total_reviews,
    }
    this.setState({productDetails: updatedDetails, isLoading: false})
  }

  getProductItemDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')

    const {match} = this.props
    const {params} = match
    const {id} = params

    const productDetailsApiUrl = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(productDetailsApiUrl, options)
    const data = await response.json()
    this.updateTheProductDetails(data)
  }

  renderLoader = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  decreaseQuatity = () => {
    this.setState(prevState => ({quantity: prevState.quantity - 1}))
  }

  increaseQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderSilmilarProducts = similarProducts => {
    console.log(similarProducts)
    return (
      <div className="similar-products-container">
        <h1 className="similar-products-heading">Similar Products</h1>
        <ul className="similar-products-list">
          {similarProducts.map(eachProduct => {
            const {id, imageUrl, title, brand, price, rating} = eachProduct
            return (
              <li className="similar-product-item" key={id}>
                <img className="similar-product-item-img" src={imageUrl} />
                <h1 className="similar-product-item-name"> {title} </h1>
                <p className="similar-product-item-brand">{`by ${brand}`}</p>
                <div className="price-rating-container">
                  <p className="similar-product-item-brand">{`Rs ${price}/-`}</p>
                  <div className="product-rating-container">
                    <p className="product-rating"> {rating}</p>
                    <img
                      alt="star"
                      className="star-img"
                      src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  renderProductDetails = () => {
    const {productDetails, quantity} = this.state
    const {
      imageUrl,
      title,
      price,
      rating,
      totalReviews,
      description,
      availability,
      brand,
    } = productDetails

    return (
      <div className="product-details-container">
        <img className="product-img" src={imageUrl} />
        <div className="product-text-details">
          <h1 className="title">{title}</h1>
          <p className="product-price">{`Rs ${price}`}</p>

          <div className="rating-reviews-container">
            <div className="product-rating-container">
              <p className="product-rating">{rating}</p>
              <img
                alt="star"
                className="star-img"
                src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              />
            </div>

            <p className="product-reviews">{`${totalReviews} Reviews`}</p>
          </div>

          <p className="product-description">{description}</p>
          <p className="product-availability">
            Available: <span className="availability">{availability} </span>
          </p>
          <p className="product-brand">
            Brand: <span className="brand-name"> {brand} </span>
          </p>

          <div className="quantity-container">
            <FiMinusSquare onClick={this.decreaseQuatity} />
            <p className="quantity">{quantity}</p>
            <FiPlusSquare onClick={this.increaseQuantity} />
          </div>

          <button className="add-to-cart-btn">ADD TO CART</button>
        </div>
      </div>
    )
  }

  renderProductItemDetails = () => {
    const {productDetails} = this.state
    const {similarProducts} = productDetails

    return (
      <>
        {this.renderProductDetails()}

        {this.renderSilmilarProducts(similarProducts)}
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    console.log(this.state)

    return (
      <div className="product-item-container">
        <Header />
        <div className="product-details-section">
          {isLoading ? this.renderLoader() : this.renderProductItemDetails()}
        </div>
      </div>
    )
  }
}

export default ProductItemDetails
