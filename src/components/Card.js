import React from "react";

function Card({onFavorite, imageUrl, price, title, onPlus}) {
const [isAdded, setIsAdded] = React.useState(false);
const [isFavorite, setIsFavorite] = React.useState(false)

const onClickPlus = () => {
    onPlus({ imageUrl, price, title});
    setIsAdded(!isAdded);
};

const onClickFavorite = () => {
    setIsFavorite(!isFavorite)
}


    return (
    <div className="card">
        <div className="favorite" onClick={onClickFavorite}>
            <img src={isFavorite ? "/img/liked.svg" : "/img/heart.svg"} alt="Unliked" />
        </div>
        <img className="ml-10" width={133} height={120} src={imageUrl} alt="Shirt"/>
            <h5>{title}</h5>
        <div className="d-flex justify-beetwen mt-20 align-center">
        <div>
            <p>Цена:</p>
            <b>{price} руб.</b>
        </div>
            <img className="plus ml-50" onClick={onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="plus"></img>
        </div>
    </div>
    );
}

export default Card;