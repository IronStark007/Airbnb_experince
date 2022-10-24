import { useRef } from 'react';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import CategoryFilterTablet from './components/CategoryFilterTablet/CategoryFilterTablet';
import Header from './components/Header/Header';
import ThisWeek from './components/ThisWeek/ThisWeek';
import TopSellers from './components/TopSellers/TopSellers';

function App() {
  const menuRef = useRef();
  const closeMenu = (e) => {
    e.stopPropagation();
    menuRef.current.style.display = "none";
  }
  return (
    <div className="App" onClick={closeMenu}>
      <Header menuRef={menuRef} />
      <ThisWeek />
      <CategoryFilter />
      <CategoryFilterTablet />
      <TopSellers />
    </div>
  );
}

export default App;
