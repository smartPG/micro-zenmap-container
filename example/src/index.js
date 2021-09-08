import * as React from 'react';
import * as ReactDOM from 'react-dom';
import  {OceanMap} from '../../index.js';
import MapOptions from './mapOptions'
import { Component } from 'react';

class App extends Component{

  
  constructor(props){
    super(props);
      this.mapOptions = MapOptions;
      this.onClick = this.onClick.bind(this);
      this.addController = this.addController.bind(this);
      this.removeController = this.removeController.bind(this);
      this.addTools = this.addTools.bind(this);
      this.map = {};
  }

  componentDidMount(){
    let map  = new OceanMap(document.getElementById('container'),this.mapOptions);
    this.map = map;
  }
  onClick(){
    this.map.destroyMap();
  }
  addController(){
    this.map.setControllers(['NavigationControl', 'ScaleControl', 'MousePositionControl']);
  }
  removeController(){
    this.map.removeController(['NavigationControl', 'ScaleControl', 'MousePositionControl']);
  }
  addTools(){
    let container = document.getElementById('measureTools');
    this.map.setMapTools([{type: 'measure',container: container}]);
  }
  addSelectTools(){
    let container = document.getElementById('selectTools');
    this.map.setMapTools([{type: 'select',container: container}]);
  }
  render(){
    return (
      
      <>
        <p>
          <button onClick = {this.onClick}>销毁地图</button>
          <button onClick = {this.addController}>添加导航控件</button>
          <button onClick = {this.removeController}>移除导航控件</button>
          <button onClick = {this.addTools}>添加测量工具栏</button>
          <button onClick = {this.addSelectTools}>添加框选工具栏</button>
        </p>
        <div id = "container" style={{padding: '0px', margin:'0px', width: '100%', height: '874px', overflow: 'hidden'}}>
          <div style={{display: 'flex'}}>
            <div id = 'measureTools' style={{width: '104px', height: '24px'}}></div>
            <div id = 'selectTools' style={{width: '104px', height: '24px'}}></div>
          </div>
        </div> 
      </>
  );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
