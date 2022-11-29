import './NotFound.css'
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='NotFound_page'>
      <div> Oops, this page does not exist </div>
      <Link to="/">Go to main page</Link>
    </div>
  );
}

export default NotFound;
