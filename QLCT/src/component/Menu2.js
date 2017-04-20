
import React,{Component} from 'react';
import Drawer from 'react-native-drawer';
import Add from 'QLCT/src/component/Add.js';

import Menu from 'QLCT/src/component/Menu.js';

import Main from 'QLCT/src/component/Main.js';
export default class Menu2 extends Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<Add />}
        >
        <Menu />
      </Drawer>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}
