import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {FaShareAlt, FaPrint} from 'react-icons/fa';


const InventoryDetails = () => {
    const {id} = useParams();
    const [inventory, setInventory] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/inventory/${id}/`)
            .then(response => {
                setInventory(response.data);
                setSelectedImage(response.data.image_url); // Set initial main image
            })
            .catch(error => console.error('Error fetching inventory details:', error));
    }, [id]);

    if (!inventory) return <p>Loading...</p>;

    const interiorImages = inventory.images?.filter(img => img.image_type === 'interior') || [];
    const exteriorImages = inventory.images?.filter(img => img.image_type === 'exterior') || [];
    const allImages = [{image_url: inventory.image_url, image_type: 'Main'}, ...exteriorImages, ...interiorImages];

    return (
        <div className="container mt-4">

            {/* === Banner Ribbon === */}
            <div
                className="d-flex align-items-center justify-content-between p-3 mb-4"
                style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    border: '1px solid #ddd'
                }}
            >
                {/* Icons Left */}
                <div className="d-flex align-items-center gap-3">
                    <FaShareAlt style={{cursor: 'pointer'}} title="Share"/>
                    <FaPrint style={{cursor: 'pointer'}} title="Print"/>
                </div>

                {/* Center Info */}
                <div className="text-center flex-grow-1">
                    <h4 className="mb-0">
                        {inventory.year} {inventory.make} {inventory.model} {inventory.trim}
                    </h4>
                </div>

                {/* Spacer for symmetry */}
                <div style={{width: '2rem'}}></div>
            </div>

            {/* === Image + Thumbnails === */}
            <div className="row">
                <div className="col-md-8 mb-4">
                    <div style={{display: 'flex', height: '400px'}}>
                        <img
                            src={selectedImage}
                            alt="Selected"
                            className="rounded shadow-sm"
                            style={{
                                width: '70%',
                                objectFit: 'cover',
                                borderRadius: '8px'
                            }}
                        />

                        {/* Thumbnails */}
                        <div
                            className="ms-3"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                overflowY: 'auto',
                                height: '100%',
                                width: '30%'
                            }}
                        >
                            {allImages.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.image_url}
                                    alt={img.image_type}
                                    onClick={() => setSelectedImage(img.image_url)}
                                    className="img-thumbnail"
                                    style={{
                                        width: '100%',
                                        height: '75px',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                        border: selectedImage === img.image_url ? '2px solid #007bff' : '1px solid #ccc'
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* === Call to Action + Vehicle Info === */}
            <div
                className="row mt-3 p-4"
                style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '10px',
                    border: '1px solid #ddd'
                }}
            >
                {/* Left CTA Buttons */}
                <div className="col-md-4 d-flex flex-column justify-content-center gap-3">
                    <button className="btn btn-success w-100">
                        📞 Call the dealership
                    </button>
                    <button className="btn btn-outline-primary w-100">
                        💰 Apply for financing
                    </button>
                </div>

                {/* Right Vehicle Info */}
                <div className="col-md-8">
                    <p><strong>Price:</strong> ${inventory.price}</p>
                    <p><strong>Mileage:</strong> {inventory.mileage} miles</p>
                    <p><strong>Fuel Efficiency:</strong> {inventory.fuel_efficiency}</p>
                    <p><strong>Drivetrain:</strong> {inventory.drivetrain}</p>
                    <p><strong>Exterior Color:</strong> {inventory.exterior_color}</p>
                    <p><strong>VIN:</strong> {inventory.vin}</p>
                    <p><strong>Carfax Available:</strong> {inventory.has_carfax ? 'Yes' : 'No'}</p>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;
