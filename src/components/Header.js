function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="./img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">T-shirt shop</h3>
            <p className="opacity-5">Футболки на заказ</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img width={18} height={18} src="./img/car.png" alt="logo" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={22} height={22} src="./img/user.png" alt="logo" />
          </li>
        </ul>
      </header>
    );
}

export default Header