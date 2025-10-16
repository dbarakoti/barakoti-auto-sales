import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const InventoryList = () => {
  const [inventoryList, setInventoryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const baseUrl = process.env.REACT_APP_API_URL;

  const searchQuery = new URLSearchParams(location.search).get('q') || '';

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `${baseUrl}/inventory/?q=${encodeURIComponent(searchQuery)}`
          : `${baseUrl}/inventory/`;

        const response = await axios.get(url);
        setInventoryList(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching inventory:', error);
        setError('Failed to load inventory. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchInventory();
  }, [baseUrl, searchQuery]);

  if (loading) return <p className="text-center-info mt-4">Loading inventory...</p>;
  if (error) return <p className="text-center text-danger mt-4">{error}</p>;

  return (
    <div className="container mt-4">
      {searchQuery && (
        <h5 className="text-center mb-4">
          Showing results for "<span className="fw-bold">{searchQuery}</span>"
        </h5>
      )}

      {inventoryList.length === 0 ? (
        <p className="text-center text-warning mt-5">
          No records found matching your search criteria. Please try again.
        </p>
      ) : (
        <div className="row">
          {inventoryList.map((inventory) => (
            <div
              className="col-md-4"
              key={inventory.id}
              onClick={() => navigate(`/inventory/${inventory.id}`)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card mb-4 shadow-sm">
                <img
                  src={inventory.image_url}
                  className="card-img-top"
                  alt={`${inventory.make} ${inventory.model}`}
                  style={{ maxHeight: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {inventory.year} {inventory.make} {inventory.model}{' '}
                    {inventory.trim}
                  </h5>
                  <p className="card-text">${inventory.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InventoryList;
