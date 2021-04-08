import './App.css';
import ComponentRouter from './components/ComponentRouter.js'

const styleSheet = `
html, body {
  background-color: #EAFAF1 !important;
},
}
`

function App() {
  return (
    <>
    <style>
    {styleSheet}
  </style>
    <ComponentRouter style={{ backgroundColor: '#fffeee' }} />
    </>
  );
}

export default App;
