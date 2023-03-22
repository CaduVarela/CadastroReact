import './DropdownMenu.css';
import { TfiAlignJustify } from 'react-icons/tfi';

const DropdownMenu = ({children}) => {

    return(
        <div className="dropdown-menu has-dropdown">
            <button className="dropdown-menu-label">
                <TfiAlignJustify className="dropdown-icon"/>
            </button>
            <ul className="dropdown-list">
                {children}
            </ul>
        </div>
    );
};

export default DropdownMenu;