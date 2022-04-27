import { mount } from '@cypress/react'
import App from './App'

it('renders learn react link', () => {
  mount(<App />)
  cy.get('body').should('have.css', 'background-color: #2E3440')
})
