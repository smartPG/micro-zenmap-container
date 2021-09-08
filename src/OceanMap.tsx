import MapAdapter from './MapAdapter'
import Map from './interface/Map';
class OceanMap{
  
  private adapter: MapAdapter;

  private map: Map;

  constructor(element: any ,mapConfig: any,){
    let map = {} as Map;
    if(mapConfig.isLeaftLet){
      // map = new LOceanMap(element, mapConfig);
    }
    if(mapConfig.isZenMap){
      // map = new ZOceanMap(element ,mapConfig);
    }
    this.map = map;
    this.adapter = new MapAdapter(map);
  }

  public createInfoWindow(){
    this.adapter.createInfoWindow();
  }

  public getMap(){
    return this.map;
  }

  public getAdapter(){
    return this.adapter;
  }

  public createMarker(){
    this.adapter.createMarker();
  }


  public destroyMap(){
    this.adapter.destoryMap();
  }
  public setMapTools(toolArr: Array<any>){
      this.adapter.setMapTools(toolArr);
  }

  //添加地图控件
  public setControllers(strArr: Array<string>){
    this.adapter.setControllers(strArr)
  }

  // 移除地图控件
  removeController(strArr: Array<string>){
    this.adapter.removeController(strArr)
  }

}
export default OceanMap ; 