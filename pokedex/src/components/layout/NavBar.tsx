import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Branding = styled.a`
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

export default class NavBar extends PureComponent {
    render() {
        return (
            <nav
                className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Branding
                    href="#"
                    className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center">
                    <Logo src="./logo.svg" />
                    PokeDex
                </Branding>
            </nav>
        );
    }
}