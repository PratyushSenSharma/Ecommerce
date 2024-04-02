import React from 'react'
import "../styles/list.scss"
import  Card  from './Card.jsx'
const List = () => {
    const data=[
        {
            id:1,
            img:"https://www.jiomart.com/images/product/original/rvd87un8dr/blissink-naruto-gojo-satoru-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rvd87un8dr-0-202305131237.jpg?im=Resize=(600,750)",
            img2:"https://www.jiomart.com/images/product/original/rvd87un8dr/blissink-naruto-gojo-satoru-front-and-back-printed-black-cotton-tshirt-for-men-product-images-rvd87un8dr-1-202305131237.jpg?im=Resize=(75,94)",
            title:"Gojo Satoru T-shirt",
            isNew:true,
            oldPrice:700,
            price:650,
        },
        {
            id:2,
            img:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14992396-1195102247581628.jpg",
            img2:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/14992396-1875102247656034.jpg",
            title:"Kamado Tanjiro T-shirt",
            isNew:true,
            oldPrice:700,
            price:650,
        },
        {
            id:3,
            img:"https://rukminim2.flixcart.com/image/416/416/xif0q/action-figure/y/k/t/6-demon-slayer-anime-action-figure-20-cm-for-home-decors-office-original-imagzh8jbhz9mnmn.jpeg?q=70&crop=false",
            img2:"https://rukminim2.flixcart.com/image/416/416/xif0q/action-figure/r/x/b/6-demon-slayer-anime-action-figure-20-cm-for-home-decors-office-original-imagzh8jwm8q6tt3.jpeg?q=70&crop=false",
            title:"Rengoku Action Figure",
            isNew:false,
            oldPrice:700,
            price:650,
        },
        {
            id:4,
            img:"https://m.media-amazon.com/images/I/61EbfCSC1-L._AC_UF1000,1000_QL80_.jpg",
            img2:"https://image.made-in-china.com/2f0j00vIzcJCPKkSbu/Factory-Supply-Uchiha-Itachi-Naruto-Japanese-Action-Figure-Toys-Wholesale-Anime-Figure.webp",
            title:"Itachi Uchiha Action Figure",
            isNew:false,
            oldPrice:700,
            price:650,
        },
        {
            id:5,
            img:"https://m.media-amazon.com/images/I/61SbZeyi3AL._AC_SL1500_.jpg",
            img2:"https://m.media-amazon.com/images/I/715p1MvfxZL._AC_SL1500_.jpg",
            title:"Itadori Yuji Poster",
            isNew:false,
            oldPrice:700,
            price:650,
        },


    ]
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List