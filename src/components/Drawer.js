function Drawer({onClose, items =[]}) {
    return (
        <div className="overlay">
        <div className="drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина  
        <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Close" />
        </h2>

        <div className="items">  
          {items.map((obj) => (
                  <div className="cartItem d-flex aligh-center mb-20">
                  <img className="mr-20" width={70} height={70}  src={obj.imageUrl} alt="Shirt" /> 
                  <div className="mr-20">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
                ))}
        </div>

        <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого: </span>
            <div></div>
            <b>21 497 руб.</b>
          </li>
          <li>
            <span>Налог 5%</span>
            <div></div>
            <b>1 484 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить заказ</button>
        </div>
      </div>
    </div>
    );
}

export default Drawer