import { Link } from 'react-router-dom';

export default function PrintButton() {
    function onPrint(e) {
        e.preventDefault();
        window.print();
        return false;
    }

    return (
        <Link to='/' className='print details' onClick={onPrint}>
            Print
        </Link>
    );
}
