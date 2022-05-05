import styled from "styled-components";

import { useAppDispatch } from "@redux";

export const Menu = () => {
    // const { authUser } = useSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const handleLogout = () => {
        //   dispatch(logout());
    };

    return <Header></Header>;
};

const Header = styled.div`
    .header {
        top: 0;
        width: 100%;
        background: rgba(255, 255, 255, 1);
        position: sticky;
        left: 0;
        z-index: 100;
        box-shadow: 0px 0px 5px 0px #6dd1e7;
    }
    .header .logo {
        width: 150px;
        float: left;
    }

    /*Bootrap custom*/
    /* .navbar .navbar-nav .nav-item {
    font: normal 15px/24px "Montserrat";
    color: #414141;
    text-transform: uppercase;
    font-weight: 600;
    padding: 10px 20px;
    border-bottom: 3px solid rgba(255, 255, 255, 0.01);
  } */
    .navbar-light .navbar-nav .nav-link {
        font-weight: 600;
    }
    .navbar-light .navbar-nav .nav-link:hover,
    .navbar-light .navbar-nav .nav-link.active {
        color: #25cdaf;
        font-weight: 600;
    }

    .search-form {
        display: flex;
        bottom: 17px;
        right: 0;
        position: absolute;
        z-index: 10;
        transition: all 300ms ease-in 0ms;
        visibility: visible;
    }

    .search-form input[type="text"] {
        height: 35px;
        border-radius: 3px 0 0 3px;
    }

    .search-form input[type="submit"] {
        width: 45px;
        height: 35px;
        border: 1px solid #25cdaf;
        border-radius: 0 3px 3px 0;
        background: #25cdaf url(images/icon_search.png) no-repeat center center;
        cursor: pointer;
    }

    /* #endregion HEADER*/

    .igi_module {
        margin-top: 30px;
    }
`;
