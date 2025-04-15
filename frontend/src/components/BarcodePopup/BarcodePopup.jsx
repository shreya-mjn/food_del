import  { useState } from "react";
import "./BarcodePopup.css";
import { assets } from "../../assets/assets";

const BarcodePopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't re



 

  return (
    <div className="popup-overlay">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <img
        src= {assets.Barcode} // Replace with your barcode image path or URL 
        alt="Scan to Pay"
        className="barcode-img"
      />
      <p>Scan this code to pay via UPI</p>
      <h6>Please Click on Proceed to Pay After Payment</h6>
    </div>
  </div>
);
};

export default BarcodePopup;
