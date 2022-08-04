import React from 'react';
import product_image_img from '../../assets/product_image_img.jpg';

function ProductCard() {
  return (
    <div className="product_card">
        <div className="product_image_cover">
            <img src={product_image_img} alt="product pic" className="product_image" />
        </div>
        <div className="product_content">
            <p className="product_name">Favipiravir 400mg &#40;Fabiflu&#41; Tablets</p>
            <h2 className="product_price">Rs 1,775 <span className='slash'>/</span> <span className="stripe_text">stripe</span></h2>
            <p className="product_manufacturer">Glenmark Pharmaceutical Limited</p>
            <p className="product_manufacturer_address">Parvat Patiya, Surat, Gujrat</p>
        </div>
        <div className="product_contact">
            <h2 className="product_contact_supplier">
                <span className="pcs_icon" ><i class="fa-solid fa-paper-plane"></i></span>
                Contact Supplier
            </h2>
        </div>
        <div className="product_card_bottom"></div>
    </div>
  )
}

export default ProductCard;