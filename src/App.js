import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([])

  const handleAddItem = function (item) {
    setItems(items => [...items, item])
  }

  const handleDeleteItem = function (id) {
    setItems(items => items.filter(item => item.id !== id))
  }

  const handleToggleItem = function (id) {
    setItems(items.map(item => item.id === id ? { ...item, packed: !item.packed } : item))
  }

  const handleClearList = function () {
    const confirmed = window.confirm('Are you sure you want to delete all items?')
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem} 
        onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}


