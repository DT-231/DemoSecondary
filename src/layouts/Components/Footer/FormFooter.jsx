function FormFooter() {
    return (
        <form className="px-4">
            <div className="lg:w-xl   w-full border-2 bg-white border-gray-300  shadow-sm mb-5">
                <label htmlFor="nameInput" className="block px-3 pt-2 text-lg font-medium text-gray-700">
                    Bạn :
                </label>
                <input
                    id="nameInput"
                    type="text"
                    placeholder="Nhập tên của bạn..."
                    className="w-full px-3 py-2 border-t border-gray-300 
                   placeholder-gray-400 text-gray-900 outline-none"
                />
            </div>
            <div className="lg:w-xl  w-full border-2 bg-white border-gray-300  shadow-sm mb-5">
                <label htmlFor="EmailInput" className="block px-3 pt-2 text-lg font-medium text-gray-700  ">
                    Email :
                </label>
                <input
                    id="EmailInput"
                    type="text"
                    placeholder="Nhập email của bạn...."
                    className="w-full px-3 py-2 border-t border-gray-300 
                   placeholder-gray-400 text-gray-900  outline-none"
                />
            </div>
            <div className="lg:w-xl  w-full border-2 bg-white border-gray-300  shadow-sm mb-5">
                <label htmlFor="PhoneNumberInput" className="block px-3 pt-2 text-lg font-medium text-gray-700  ">
                    Điện thoại :
                </label>
                <input
                    id="PhoneNumberInput"
                    type="text"
                    placeholder="Nhập số điện thoại của bạnbạn của bạn...."
                    className="w-full px-3 py-2 border-t border-gray-300 
                   placeholder-gray-400 text-gray-900  outline-none"
                />

                <label htmlFor="MessageInput" className="block px-3 pt-2 text-lg font-medium text-gray-700 ">
                    Lời nhắn :
                </label>
                <textarea
                    id="MessageInput"
                    type="text"
                    placeholder="Nhập lời nhắn của bạn"
                    className="w-full px-3 py-2 border-t border-gray-300 
                   placeholder-gray-400 text-gray-900  outline-none h-[100px] resize-none"
                />
            </div>
            <button type="submit" className=" font-secondary font-bold text-lg py-1 lg:px-4 rounded-2xl cursor-pointer">
                Gửi đi
            </button>
        </form>
    );
}

export default FormFooter;
