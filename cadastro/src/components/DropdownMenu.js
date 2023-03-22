import './DropdownMenu.css';
import { TfiAlignJustify } from 'react-icons/tfi';

const DropdownMenu = ({children}) => {

    return(
        <div className="dropdown-menu has-dropdown">
            <a href="#" className="dropdown-menu-label">
                <TfiAlignJustify className="dropdown-icon"/>
            </a>
            <ul className="dropdown-list">
                {children}
            </ul>
        </div>
    );
};

export default DropdownMenu;