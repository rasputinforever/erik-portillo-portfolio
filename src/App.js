import './App.css';
import ComponentRouter from './components/ComponentRouter.js'

const styleSheet = `
html, body {
  background-color: #fff2ff !important;
  padding-top: 50px;
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
