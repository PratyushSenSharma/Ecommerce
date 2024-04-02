import React from 'react'
import "../styles/cart.scss"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
export const Cart = () => {
  const data=[
    {
        id:1,
        img:"https://www.jiomart.com/images/product/original/rvd87un8dr/blissink-naruto-gojo-satoru-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rvd87un8dr-0-202305131237.jpg?im=Resize=(600,750)",
        img2:"https://www.jiomart.com/images/product/original/rvd87un8dr/blissink-naruto-gojo-satoru-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rvd87un8dr-1-202305131237.jpg?im=Resize=(75,94)",
        title:"Gojo Satoru T-shirt",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorem quasi vitae ea voluptatem nesciunt quo, magni repudiandae earum sed accusantium deserunt nulla dicta minima architecto, excepturi natus illo labore.",
       isNew:true,
        oldPrice:700,
        price:650,
    },
    {
        id:2,
        img:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14992396-1195102247581628.jpg",
        img2:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14992396-1875102247656034.jpg",
        title:"Kamado Tanjiro T-shirt",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolorem quasi vitae ea voluptatem nesciunt quo, magni repudiandae earum sed accusantium deserunt nulla dicta minima architecto, excepturi natus illo labore.",
        isNew:true,
        oldPrice:700,
        price:650,
    },]
  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item=>(
          <div className="item" key={item.id}>
            <img src={item.img} alt=''/>
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0,100)}</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlineOutlinedIcon className='delete'/>
          </div>
        ))}
        <div className="total">
        <span>SUBTOTAL</span>
        <span>$300</span>
        </div>
        <button>CHECKOUT</button>
        <div className="reset">RESET CART</div>
    </div>
  )
}
