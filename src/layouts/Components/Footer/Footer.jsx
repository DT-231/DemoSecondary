import FormFooter from "./FormFooter";

function Footer() {
    return (
        <div className="bg-secondary lg:pt-50 pt-25 pb-50">
            <div className="md:w-3xl mx-auto flex flex-col gap-10 pb-10">
                <h4 className="text-primary md:text-6xl  md:w-md text-4xl font-primary font-bold mx-auto">
                    Hỗ trợ tư vấn
                </h4>
                <div className="flex justify-around">
                    <input
                        className="text-primary lg:text-2xl text-xs placeholder:text-primary font-primary lg:w-md w-[200px]  rounded-3xl lg:px-5 px-2 lg:h-15 h-10  bg-primary/10"
                        placeholder="Nhập số điện thoại cần tư vấn"
                    />
                    <button className="  text-primary lg:text-3xl text-xl font-primary bg-[#B89B60] font-medium  lg:py-2 lg:px-10  px-5 rounded-3xl cursor-pointer">
                        Đăng ký
                    </button>
                </div>
            </div>
            <div className="text-primary mx-auto pt-25  lg:w-7xl  flex lg:flex-row flex-col lg:justify-between">
                <div>
                    <h4 className="text-3xl font-primary font-Regular px-4 ">Liên Hệ Với Mộc Đức</h4>
                    <div className="mt-3 text-xl font-secondary px-4">
                        <p>❇ HOTLINE : 1234657899</p>
                        <p>❇ HOTLINE : 1234657899</p>
                    </div>
                    <div className="text-xl mt-8 lg:w-xl w-full font-secondary px-4">
                        <p className="mb-5">
                            Chúng tôi rất vui nếu nhận được những góp ý và phản hồi của quý khách. Nếu có bất cứ câu hỏi
                            nào, quý khách vui lòng điền vào form trên và gửi cho chúng tôi. Chúng tôi sẽ phản hồi lại
                            quý khách trong thời gian sớm nhất.
                        </p>
                        <p className="mb-5">
                            Sự ủng hộ và tin tưởng của quý khách hàng là động lực để chúng tôi cố gắng phát triển , càng
                            ngày càng hoàn thiện hơn trong công việc và dịch vụ chăm sóc khách hàng.
                        </p>
                        <p className="mb-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p>
                    </div>
                </div>
                <div className="mt-5">
                    <FormFooter />
                </div>
            </div>
        </div>
    );
}

export default Footer;
