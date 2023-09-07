import { BrowserRouter } from 'react-router-dom';
import ToDo from '../components/ToDo';

function router() {
  return (
    <BrowserRouter>
        <ToDo/>
    </BrowserRouter>
  );
}

export default router