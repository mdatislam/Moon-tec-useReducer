
import ProductProvider from './Context/ProductProvider';
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/Routes';


function App() {
  return (
    <div className=" text-center w-96 mx-auto">
      <ProductProvider>
        <RouterProvider router={routes} />
      
      </ProductProvider>
    </div>
  );
}

export default App;
