import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import timelineItems from './timelineItems';
import Timeline from './components/Timeline';
import './index.css';

const App = () => {
  const [items, setItems] = useState(timelineItems);
  const onEditItem = (itemId, text) => {
    setItems(
      items.map(item => (item.id === itemId ? { ...item, name: text } : item))
    )
  }

  return (
    <div>
      <h2>Timeline {'\u2728'}</h2>
      <h3>We have {items.length} items</h3>
      <p>You can edit the name of events inline and save it by pressing the Enter key</p>
      <Timeline events={items} onEditItem={onEditItem} />
    </div>
  )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
