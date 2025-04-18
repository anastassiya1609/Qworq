import "./index.css"
import Layout from './components/core/Layout'
;
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Layout/>
    </>

  );
}

export default App;
