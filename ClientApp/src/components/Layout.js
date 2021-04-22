import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { PreparationsProvider } from '../contexts/recipes/RecipesContext';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
          <PreparationsProvider>
            <Container>
              {this.props.children}
            </Container>        
          </PreparationsProvider>
      </div>
    );
  }
}
