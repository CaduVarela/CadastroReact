import './DropdownMenu.css';
import { TfiAlignJustify } from 'react-icons/tfi';

const DropdownMenu = ({children}) => {

    return(
        <div id="dropdown-menu" className="has-dropdown">
            <a href="#" id="dropdown-menu-label">
                <TfiAlignJustify id="dropdown-icon"/>
            </a>
            <ul className="dropdown-list">
                {children}
            </ul>
        </div>
    );
};

export default DropdownMenu;