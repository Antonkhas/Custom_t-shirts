import React from 'react';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer';

const items = [
  {title: 'Обидеть Настю может каждый', price: 3999, imageUrl: "/img/shirt/1.jpg"},
  {title: 'Я не грустный, я трезвый', price: 2999, imageUrl: "/img/shirt/14.jpg"},
  {title: 'Футболка: Вику надо обнимать', price: 3999, imageUrl: "/img/shirt/4.jpg"},
  {title: 'Футболка унисекс: потекшая краска', price: 4999, imageUrl: "/img/shirt/5.jpg"},

];

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setsearchValue] = React.useState();
  const [cartOpened, setCartOpened] = React.useState(false);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }
  
  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setsearchValue(event.target.value);
  }
  
  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer items= {cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex aling-center justify-between mb-40">
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Примеры футболок'}</h1>
          <div className="search-block d-flex">
            <img className="mt-10" width={18} height={18} src="/img/search.png" alt="Search" />
            <input onChange={onChangeSearchInput} placeholder="Поиск ..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
          .filter((item) => item.title.toLowerCase().includes(searchValue))
          .map((item) => (
            <Card
              key={item.title}
              title = {item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
