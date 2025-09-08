import axios from "axios";
import { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    }
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookings}`, formData);
      console.log(response.data);
      alert("Booking confirmed!");
    } catch {
      setError("Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold">Contact Detail</h2>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>First Name</label>
            <input 
              type="text" 
              className="border p-2 w-full mt-2"
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
            />
          </div>
          <div>
            <label>Last Name</label>
            <input 
              type="text" 
              className="border p-2 w-full mt-2"
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Email</label>
            <input 
              type="email" 
              className="border p-2 w-full mt-2" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input 
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} 
            />
          </div>
        </div>

        {/* Payment Information */}
        <h2 className="text-xl font-semibold mt-6">Pay with</h2>
        <div className="mt-4">
          <label>Card Number</label>
          <input
            type="text"
            className="border p-2 w-full mt-2"
            value={formData.cardNumber}
              onChange={(e) => setFormData({...formData, cardNumber: e.target.value})} 
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Expiration Date</label>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.expirationDate}
              onChange={(e) => setFormData({...formData, expirationDate: e.target.value})} 
              />
          </div>
          <div>
            <label>CVV</label>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.cvv}
              onChange={(e) => setFormData({...formData, cvv: e.target.value})} 
            />
          </div>
        </div>

        {/* Billing Address */}
        <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
        <div className="mt-4">
          <label>Street Address</label>
          <input
            type="text"
            className="border p-2 w-full mt-2"
            value={formData.billingAddress.street}
            onChange={(e) => setFormData({...formData, billingAddress: {...formData.billingAddress, street: e.target.value}})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>City</label>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.billingAddress.city}
              onChange={(e) => setFormData({...formData, billingAddress: {...formData.billingAddress, city: e.target.value}})}
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.billingAddress.state}
              onChange={(e) => setFormData({...formData, billingAddress: {...formData.billingAddress, state: e.target.value}})}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label>Zip Code</label>
            <input
              type="text" 
              className="border p-2 w-full mt-2"value={formData.billingAddress.zipCode}
            onChange={(e) => setFormData({...formData, billingAddress: {...formData.billingAddress, zipCode: e.target.value}})}
          />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              className="border p-2 w-full mt-2"
              value={formData.billingAddress.country}
              onChange={(e) => setFormData({...formData, billingAddress: {...formData.billingAddress, country: e.target.value}})}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
          {loading ? "Processing..." : "Confirm & Pay"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default BookingForm;