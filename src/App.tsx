import React from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-6">
          <Card style={{ width: "18rem" }}>
            <div className="card-img-top" style={{ backgroundColor: '#808080', color: '#ffffff', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>Image cap</div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className="btn btn-primary">Go somewhere</button>
            </div>
          </Card>
        </div>
        <div className="col-md-6">
          <Card style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <button className="btn btn-primary">Go somewhere</button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
