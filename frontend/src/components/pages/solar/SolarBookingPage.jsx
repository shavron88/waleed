import { useState } from "react";
import "./SolarBookingPage.css"; // apni styling file

const SolarBookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    product: "",
    Amount: "",
    quantity: 1,
    fridge: "",
    motor: "",
    ac: "",
    fan: "",
    lights: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // input change handle karne ka function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form submit handle karne ka function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Placed:", formData);
    setSubmitted(true);
  };

  return (
    <div className="booking-container">
      <h2 className="title">Solar Panel Booking</h2>

      {submitted ? (
        <div className="success-message">
          <h3>✅ Booking Placed Successfully!</h3>
          <p>
            Thank you for choosing our solar solutions. Our team will contact
            you shortly.
          </p>
        </div>
      ) : (
        <form className="booking-form" onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="+92-300-0000000"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Delivery Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter delivery address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>

          {/* Solar Product */}
          <div className="form-group">
            <label>Choose Solar Product</label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">Select a Solar Product</option>
              <option>Solar Panel 250W</option>
              <option>Solar Panel 500W</option>
              <option>Solar Inverter</option>
              <option>Installation Service</option>
              <option>Battery Pack</option>

            </select>
          </div>
                    <div className="form-group">
            <label>Amount</label>
            <select
              name="Amount"
              value={formData.Amount}
              onChange={handleChange}
              required
            >
              <option value="">Select a Solar amount</option>
              <option>Solar Panel 250W      (Amount: 13,000 Pkr)</option>
              <option>Solar Panel 500W      (Amount: 30,000 Pkr) </option>
              <option>Solar Inverter        (Amount: 100,000 Pkr)</option>
              <option>Installation Service  (Amount: 60,000 Pkr)</option>
              <option>Battery Pack          (Amount: 70,000 Pkr)</option>

            </select>
          </div>
                      <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
          <h3 className="subtitle">Select Appliance Wattages</h3>

          {/* Appliances Dropdowns */}
          <div className="form-group">
            <label>Fridge Watt</label>
            <select
              name="fridge"
              value={formData.fridge}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>100W</option>
              <option>200W</option>
              <option>300W</option>
            </select>
          </div>

          <div className="form-group">
            <label>Water Motor Watt</label>
            <select
              name="motor"
              value={formData.motor}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>300W</option>
              <option>500W</option>
              <option>800W</option>
            </select>
          </div>

          <div className="form-group">
            <label>AC Watt</label>
            <select
              name="ac"
              value={formData.ac}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>1000W</option>
              <option>1500W</option>
              <option>2000W</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fan Watt</label>
            <select
              name="fan"
              value={formData.fan}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>50W</option>
              <option>75W</option>
              <option>100W</option>
            </select>
          </div>

          <div className="form-group">
            <label>Lights Watt</label>
            <select
              name="lights"
              value={formData.lights}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option>10W</option>
              <option>20W</option>
              <option>40W</option>
            </select>
          </div>

          {/* Notes */}
          <div className="form-group">
            <label>Special Instructions</label>
            <textarea
              name="notes"
              placeholder="Any special instructions?"
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Book Order
          </button>
        </form>
      )}
    </div>
  );
};

export default SolarBookingPage;
