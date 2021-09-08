export default interface Map{

    // 销毁地图
    destroyMap(): void;

    // 添加地图工具
    setMapTools(toolArr: Array<any>) :void;

    // 添加地图导航控件
    setControllers(strArr: Array<string>): void
    // 移除地图控件
    removeController(strArr: Array<string>): void
    //创建Maker
    createMarker(): void;

    // 创建infoWindow
    createInfoWindow(): void

    //创建图层
    createLayout(): void

    // 轨迹分析
    trackAnalyze(): void

    // 路径规划
    trackPlanning(): void

    // 地图撒点
    sprinklePoints(): void
}
