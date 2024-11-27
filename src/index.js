import React from 'react';
import { createRoot } from 'react-dom/client';
import timelineItems from './timelineItems';
import Timeline from './components/Timeline';

const App = () => (
  <div>
    <h2>Timeline {'\u2728'}</h2>
    <h3>We have {timelineItems.length} items</h3>
    <Timeline events={timelineItems} />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
