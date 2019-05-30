import React from 'react'
import {NavLink} from "react-router-dom";

class MenuBlock extends React.Component {

    render() {
        return(
            <React.Fragment>
                <NavLink exact={true} to='/' activeClassName='active' className="nav-item nav-link">Главная</NavLink>
                <NavLink to='/history' activeClassName='active' className="nav-item nav-link">История</NavLink>
                <NavLink to='/activity' activeClassName='active' className="nav-item nav-link">Деятельность</NavLink>
                <NavLink to='/production' activeClassName='active' className="nav-item nav-link">Продукция</NavLink>
                <NavLink to='/documents' activeClassName='active' className="nav-item nav-link">Документы</NavLink>
            </React.Fragment>
        );
    }
}

export default MenuBlock;