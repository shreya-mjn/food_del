// Filename: TableBooking.js
import  { useState } from 'react';
import './BookTable.css';
import { useNavigate,Link } from 'react-router-dom';



const BookTable = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [tableNo, setTableNo] = useState(''); // N
    // const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        // e.preventDefault();
        // const validationErrors = validateForm();
        // if (Object.keys(validationErrors).length > 0) {
        //   setErrors(validationErrors);
        // } else {
        //   setErrors({});
        //   navigate("/order"); // Navigate only when the form is valid
        // }
        console.log(`Booking made for ${guests} guests on ${date} at ${time} for Table No: ${tableNo}`);
    };

    return (
        <div className="booking-wrapper" id="Booking">
            <h2 className='book'>Booking Section</h2>
            <div className="booking-container">
                <h2>Book a Table</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">Date:</label>
                        <input
                            type="date"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <input
                            type="time"
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Number of Guests:</label>
                        {/* <input
                            type="select"
                            id="guests"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                            min="1"
                            required
                        /> */}
                        <select className='gues'>
                            <option>1</option>
                            <option>2</option>
                            <option>4</option>
                            <option>6</option>
                        </select>
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="tableNo">Table No:</label>
                        {/* <input
                        className='table-no'
                            type="text"
                            id="tableNo"
                            value={tableNo}
                            onChange={(e) => setTableNo(e.target.value)}
                            required
                        /> 
                        <select>
                            <option>ANy</option>
                            <option>ANy</option>
                            <option>ANy</option>
                        </select>
                    </div> */}
                    <Link to="/order">
                    <button type="submit"  >Book Now</button>
                    </Link>
                </form>
            </div>
            
        </div>
    );
};

export default BookTable;