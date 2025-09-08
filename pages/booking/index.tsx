import BookingForm from "@/components/common/booking/BookingForm";
import CancellationPolicy from "@/components/common/booking/CancellationPolicy";
import OrderSummary from "@/components/common/booking/OrderSummary";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-2 gap-6">
        <BookingForm />
        <CancellationPolicy />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}