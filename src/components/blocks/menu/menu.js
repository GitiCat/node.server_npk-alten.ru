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
                        <NavLink to={{
                            pathname: '/productions/rechargeable-batteries',
                        }} activeClassName='active' className="nav-item nav-link none">Аккумуляторные батареи</NavLink>
                        <NavLink to={{
                            pathname: '/productions/primary-sources',
                        }} activeClassName='active' className="nav-item nav-link none">Первичные источники тока</NavLink>
                        <NavLink to={{
                            pathname: '/productions/zru',
                        }} activeClassName='active' className="nav-item nav-link none">Зарядно - разрядные устройства</NavLink>
                    </div>
                </div>
                <NavLink to='/documents' activeClassName='active' className="nav-item nav-link">Документы</NavLink>
            </React.Fragment>
        );
    }
}

export default MenuBlock;