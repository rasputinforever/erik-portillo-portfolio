import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleBasic extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' style={{ backgroundColor: 'lightBlue'}}>
        <Menu.Item
          name='Home'
          href='#Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='Projects'
          href='#Projects'
          active={activeItem === 'Projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>

        <Menu.Item
          name='Resume'
          href='#Resume'
          active={activeItem === 'Resume'}
          onClick={this.handleItemClick}
        >
          Resume
        </Menu.Item>
        
        <Menu.Item
          name='Contact'
          href='#Contact'
          active={activeItem === 'Contact'}
          onClick={this.handleItemClick}
        >
          Contact
        </Menu.Item>
      </Menu>
    )
  }
}
