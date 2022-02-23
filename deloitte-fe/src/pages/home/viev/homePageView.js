/* eslint-disable */
import React from 'react';
import HomePageContainer from '../container/homePageContainer';
import { Breadcrumb, DiscountCard, ProductCard } from '../../../components'
import { categories } from '../../../data/product';
import Category from '../../../assets/images/category.png';
import SelectedCategory from '../../../assets/images/selectedCategory.png';
import Discount1 from '../../../assets/images/discount1.png';
import Discount2 from '../../../assets/images/discount2.png';
import Discount3 from '../../../assets/images/discount3.png';
import '../style/homePageStyles.scss'

const HomePage = () => {
return(
    <HomePageContainer>
    {({ products, categoryId, changeCategoryId }) => {
        console.log(products, "homee")
    return(
        <>
        {/* <Breadcrumb /> */}
            {/* <div>
                <img alt="logo" className="logo-category" src={Category} />
                <span className="logo-category-text">Kategoriler</span>
            </div>
            <div className="categories">
                {categories.map((category, index) => {
                return (
                    <div key={`${index}-${category}`} className="categories-button">
                        <button onClick={() => changeCategoryId(category.categoryId)} className={`category-button ${category.categoryId === categoryId && "activeted"}`}>
                            <span>{category.category}</span>
                        </button> 
                    </div>
                )})}
            </div> */}
            {/* <div>
                <img alt="logo" className="logo-selected-category" src={SelectedCategory} />
                <span className="logo-selected-category-text">{categories &&  categories.filter(category => category.categoryId === categoryId)[0].category}</span>
            </div> */}
            <div className="product-container">
                {products.length > 0 && products.map((product, index) => <ProductCard key={index} product={product} />)}
                {products.length <= 0 && <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: 40}}>Aramanıza uygun ürün bulunmamaktadır</div>}
            </div>
            {/* <div className="divider" />
            <div className="discount-container">
                <DiscountCard img={Discount1} text="75 TL Üzerine Teslimat Ücreti Bizden" buttonText="Detaylı Bilgi" bgColor="#FFEAE8" />
                <DiscountCard img={Discount2} text="Hediye Kategorisi için Sepette %15 İndirim" buttonText="Hediye Ürünleri" bgColor="#E8F1FF" />
                <DiscountCard img={Discount3} text="Kırtasiye Kategorisi için Sepette %15 İndirim" buttonText="Detaylı Bilgi" bgColor="#E2F7E1" />
            </div>     */}
        </>
      )}}
    </HomePageContainer>
);
}
export default HomePage;
