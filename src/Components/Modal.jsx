import React, { useState } from "react";
import { InputAdornment, IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";  // Import useNavigate

const Modal = ({ show, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: Check if all fields are filled
    if (!cardNumber || !expDate || !cvc || !nameOnCard || !country || !saveInfo) {
      setError('Please fill all the fields and accept the terms.');
      return;
    }

    // Save data to local storage
    const cardDetails = {
      cardNumber,
      expDate,
      cvc,
      nameOnCard,
      country,
      saveInfo
    };

    localStorage.setItem('cardDetails', JSON.stringify(cardDetails));
    alert('Card added successfully!');
    
    onClose();  // Close modal after submission
    navigate('/ticket');  // Redirect to the ticket page after submission
  };

  return (
    !show ? null : (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 w-[400px] rounded-lg shadow-lg relative">
          
          {/* Close button at the top-right */}
          <IconButton 
            aria-label="close"
            className="absolute top-2 right-2"
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>

          <h2 className="text-lg font-semibold mb-4">Add a new card</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <TextField
                label="Card Number"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CreditCardIcon />
                    </InputAdornment>
                  ),
                }}
                className="w-full"
              />
            </div>

            <div className="flex justify-between mb-4">
              <TextField
                label="Exp Date"
                id="expDate"
                value={expDate}
                onChange={(e) => setExpDate(e.target.value)}
                size="small"
                className="w-[140px]" 
              />
              <TextField
                label="CVC"
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                size="small"
                className="w-[140px]" 
              />
            </div>

            <div className="mb-4">
              <TextField
                label="Name on Card"
                id="nameOnCard"
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
                size="small"
                className="w-full"
              />
            </div>

            <div className="mb-4">
              <FormControl size="small" fullWidth>
                <InputLabel id="country-label">Country or Region</InputLabel>
                <Select
                  labelId="country-label"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <MenuItem value="United States">United States</MenuItem>
                  <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                  <MenuItem value="Canada">Canada</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="flex items-center mb-4">
              <Checkbox
                checked={saveInfo}
                onChange={(e) => setSaveInfo(e.target.checked)}
              />
              <p className="text-sm font-thin ml-2">
                Securely save my information for 1-click checkout
              </p>
            </div>

            {/* Error message if validation fails */}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <button type="submit" className="bg-[#8DD3BB] p-2 text-black w-full my-2 rounded-md">
              Add Card
            </button>

            <p className="text-xs font-thin my-2 text-center">
              By confirming your subscription, you allow the Outdoor In Crowd Limited 
              to charge your card for this payment in the future in accordance with their terms. 
              You can cancel your subscription at any time.
            </p>
          </form>
        </div>
      </div>
    )
  );
};

export default Modal;
