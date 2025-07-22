import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const navigate = useNavigate();
  const baseUrl = process.env.REACT_APP_API_URL;


  /*
  useEffect(() => {
    axios.get('REACT_APP_API_URL/inventory/')
      .then(response => setInventoryList(response.data))
      .catch(error => console.error('Error fetching inventory:', error));
  }, []);
*/
  useEffect(() => {
  axios.get(`${baseUrl}/inventory/`)
    .then(response => {
      console.log("Fetched inventory:", response.data); // <-- Add this
      setInventoryList(response.data);
    })
    .catch(error => console.error('Error fetching inventory:', error));
}, [baseUrl]);


  return (
    <div className="row">
      {inventoryList.map(inventory => (
        <div
          className="col-md-4"
          key={inventory.id}
          onClick={() => navigate(`/inventory/${inventory.id}`)}
          style={{ cursor: 'pointer' }}
        >
          <div className="card mb-4">
            <img
              src={inventory.image_url}
              className="card-img-top"
              alt={`${inventory.make} ${inventory.model}`}
              style={{ maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{inventory.year} {inventory.make} {inventory.model} {inventory.trim}</h5>
              <p className="card-text">${inventory.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
