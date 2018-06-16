import React from 'react';
import styled from 'styled-components';
import {Link, withRouter} from 'react-router-dom';

const DivHeader = styled.div`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: -8px;
    margin-top: -10px;
    margin-left: -10px;
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    border-radius: 4px;
`;

const NavBar =styled.nav`
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;    
`;

const WebSiteName = styled.a `
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    &:hover{
      outline: 0;
      };
    box-sizing: border-box;
`;

const ItemsUl = styled.ul`
    float: left;
    margin: 0;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
`;

const ItemList = styled.li`
    float: left;
    position: relative;
    display: block;
    box-sizing: border-box;
    padding: 10px 20px 10px 20px;
    margin-top: 4px;
    border-right: #dbd7d7 solid 1px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    touch-action: manipulation;
    cursor: pointer;
    text-decoration:none;
    user-select: none;
    &:hover {
        background-color:#fff; 
    } 
`;

const SearchBarForm = styled.form`
    float: left!important;
    width: auto;
    box-shadow: none;
    padding-top: 0;
    padding-bottom: 0;
    margin-right: 0;
    margin-left: 100px;
    border: 0;
    padding: 10px 15px;
    margin-top: 0px;
    box-sizing: border-box;
`;

const DivSearchBar =styled.div`
    display: inline-table;
    vertical-align: middle;
    position: relative;
    border-collapse: separate;
    box-sizing: border-box;
`;

const InputSearch = styled.input`
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 2;
    float: left;
    height: 34px;
    padding: 6px 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    border-collapse: separate;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    margin-bottom: 0;
    `;
const DivSearchButton = styled.div`
    width: auto;
    position: relative;
    font-size: 0;
    white-space: nowrap;
    vertical-align: middle;
    display: table-cell;
    box-sizing: border-box;
    border-collapse: separate; 
`;
const SearchButton = styled.button`
    z-index: 2;
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    position: relative;
    color: #333;
    background-color: #dfdfdf;
    border-color: #ccc;
    display: inline-block;
    padding: 4px 7px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    text-transform: none;
    overflow: visible;
    margin: 0;
    font: inherit;
    box-sizing: border-box;
    align-items: flex-start;
    ext-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    border-collapse: separate;        
`;

const LoginList = styled.ul`
    float: right!important;
    margin-right: -15px;
    margin: 0;
    padding-left: 0;
    box-sizing: border-box;
    display: block;
    list-style: none;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-end: 40px;
     margin-top: 4px;
`;

const LoginItem =styled.li`
    float: left;
    position: relative;
    display: block;
    box-sizing: border-box;
    padding: 10px 10px 10px 20px;
    margin-top: 4px;
    border-right: #dbd7d7 solid 0px;
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;   
    &:hover {
        background-color:#fff;
    }  
`;

const LoginIcon = styled.i`
    font-size:30px;
    margin-top: 6px;
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
`;


class Header extends React.Component {
    render(){
        return(
            <DivHeader>
                <NavBar>
                    <WebSiteName>Hikeup</WebSiteName>
                    <ItemsUl>
                        <ItemList><Link to={"/"} style={{textDecoration:"none"}}>Home</Link></ItemList>
                        <ItemList><Link to={"/organize"} style={{textDecoration:"none"}}>Organize</Link></ItemList>
                        <ItemList><Link to={"/reviews"} style={{textDecoration:"none"}}>Reviews</Link></ItemList>
                        <ItemList><Link to={"/participate"} style={{textDecoration:"none"}}>Participate</Link></ItemList>
                    </ItemsUl>
                    <SearchBarForm>
                        <DivSearchBar>
                            <InputSearch type="text" className="form-control" placeholder="Search" name="search"/>
                            <DivSearchButton>
                                <SearchButton  type="submit">
                                    <i class="material-icons">search</i>
                                </SearchButton>
                            </DivSearchButton>
                        </DivSearchBar>
                    </SearchBarForm>
                    <LoginList>
                        <LoginIcon className="material-icons">account_box</LoginIcon>
                        <LoginItem> Login </LoginItem>
                    </LoginList>
                </NavBar>
            </DivHeader>
        );
    }
}

export default withRouter(Header);