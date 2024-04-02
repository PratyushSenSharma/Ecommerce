import React from 'react';
import "../styles/categories.scss";
import{Link} from "react-router-dom";

const Categories = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/06dfe6190520157.Y3JvcCwzNDkyLDI3MzIsMzQ1LDA.jpg"/>
                    <button>
                        <Link className="link" to="/products/1">T-Shirts</Link>
                    </button>
                </div>
                <div className="row">
                <img src="https://m.media-amazon.com/images/I/7120jyHfeSL.jpg"/>
                    <button>
                        <Link className="link" to="/products/1">Action Figures</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://peeekaboo.in/cdn/shop/files/OnePiece.jpg?v=1686311876&width=1946"/>
                    <button>
                        <Link className="link" to="/products/1">Posters</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://m.media-amazon.com/images/I/81D7JSIO52L.jpg"/>
                    <button>
                        <Link className="link" to="/products/1">Stickers</Link>
                    </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                        <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/key-chain/u/b/k/anime-trinket-keychain-keyrings-beautiful-jewelry-car-bags-original-imagkfcyuymfhnwe.jpeg?q=90&crop=false"/>
                    <button>
                        <Link className="link" to="/products/1">Key Rings</Link>
                    </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                <img src="https://i.pinimg.com/736x/a7/16/37/a716373855d9633c26d6a49dd3ed9b05.jpg"/>
                    <button>
                        <Link className="link" to="/products/1">Manga</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories