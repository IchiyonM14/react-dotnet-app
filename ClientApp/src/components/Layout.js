import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { RecipesProvider } from '../contexts/recipes/RecipesContext';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
          <RecipesProvider>
            <Container>
              {this.props.children}
            </Container>        
          </RecipesProvider>
      </div>
    );
  }
}
