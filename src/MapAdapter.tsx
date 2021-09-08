import Map from './interface/Map'

export default class  MapAdapter {

    private map: Map

    constructor(map: Map){
        this.map = map;
    }
    
    createMarker(){
        this.map.createMarker();
    };


    // 创建infoWindow
    createInfoWindow(){
        this.map.createInfoWindow();
    }

    //创建图层
    createLayout(){
        this.map.createLayout();
    }

    // 轨迹分析
    trackAnalyze(){
        this.map.trackAnalyze();
    }

    // 路径规划
    trackPlanning(){
        this.map.trackPlanning();
    }

    // 地图撒点
    sprinklePoints(){
        this.map.sprinklePoints();
    }

    destoryMap(){
        this.map.destroyMap();
    }

    //添加地图工具
    setMapTools(toolArr: Array<any>){
        this.map.setMapTools(toolArr);
    }
    
    //添加地图控件
    setControllers(strArr: Array<string>){
        this.map.setControllers(strArr)
    }

    // 移除地图控件
    removeController(strArr: Array<string>){
        this.map.removeController(strArr)
    }
}

