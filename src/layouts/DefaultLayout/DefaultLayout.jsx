import Header from '~/layouts/Components/Header/Header';
function DefaultLayout({children}) {
    return (  
        <div>  {/*wrapper*/}
            <Header />
            <div>
                    {children}
              
            </div>
        </div>
    );
}

export default DefaultLayout;