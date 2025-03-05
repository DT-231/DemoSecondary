import Header from '~/layouts/Components/Header/Header';
import Footer from '~/layouts/Components/Footer/Footer';
function DefaultLayout({children}) {
    return (  
        <div>  {/*wrapper*/}
            <Header />
            <div>
                    {children}
              
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;