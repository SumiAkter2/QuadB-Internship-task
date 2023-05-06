
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { RouterProvider } from 'react-router-dom';
import routes from './components/Route/Routes/Routes';
function App() {
 

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
