import React from 'react'
import {NavLink} from "react-router-dom";

class MenuBlock extends React.Component {

    render() {
        return(
            <React.Fragment>
                <NavLink exact={true} to='/' activeClassName='active' className="nav-item nav-link">Главная</NavLink>
                <NavLink to='/history' activeClassName='active' className="nav-item nav-link">История</NavLink>
                <NavLink to='/activity' activeClassName='active' className="nav-item nav-link">Деятельность</NavLink>
                <div className="dropdown-panel">
                    <NavLink to='/productions' activeClassName='active' className="nav-item nav-link">Продукция</NavLink>
                    <div className="dropdown-menu-panel">
                        <NavLink to='/productions/rechargeable-batteries' activeClassName='active' className="nav-item nav-link none">Аккумуляторные батареи</NavLink>
                        <NavLink to='/productions/primary-sources' activeClassName='active' className="nav-item nav-link none">Первичные источники тока</NavLink>
                        <NavLink to='/productions/charge-discharge-devices' activeClassName='active' className="nav-item nav-link none">Зарядно - разрядные устройства</NavLink>
                    </div>
                </div>
                <NavLink to='/documents' activeClassName='active' className="nav-item nav-link">Документы</NavLink>
            </React.Fragment>
        );
    }
}

export default MenuBlock;