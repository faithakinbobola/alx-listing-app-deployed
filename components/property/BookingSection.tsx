const BookingSection: React.FC<{ price: number }> = ({ price }) => {
    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="mb-4"><span className="font-extrabold">${price}</span> <span className="text-tertiary">/night</span></h3>
            <hr />
            <div className="mt-4">
                <label className="font-bold">Check in</label>
                <input type="date" className="border text-tertiary rounded-md p-2 w-full mt-2" />
            </div>

            <div className="mt-4">
                <label className="font-bold">Check out</label>
                <input type="date" className="border text-tertiary rounded-md p-2 w-full mt-2" />
            </div>

            {/* Total payment */}
            <div className="mt-4">
                <div className="flex justify-between mb-3">
                    <p className="text-tertiary font-bold">${price} x 7 nights</p>
                    <p><strong>${price * 7}</strong></p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-tertiary font-bold">Weekly discounts</p>
                    <p><strong>-$88</strong></p>
                </div>
                <div className="flex justify-between mb-3">
                    <p className="text-tertiary font-bold">Service fee</p>
                    <p><strong>$33</strong></p>
                </div>
                <hr />
                <div className="flex justify-between my-3">
                    <p className="text-tertiary">Total payment: </p>
                    <p className="text-primary"><strong>${price * 7 + 50}</strong></p>
                </div>
            </div>

            {/* Reserve Button */}
            <button className="mt-4 bg-primary w-full text-white py-2 px-4 rounded-md">
                Reserve now
            </button>
        </div>
    )
}

export default BookingSection;