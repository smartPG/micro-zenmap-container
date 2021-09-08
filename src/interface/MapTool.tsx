export default interface MapTool{
    // 工具栏的状态是否激活
    isActive: boolean;
    // 激活工具栏
    active(): void;
    // 关闭工具栏
    deActive(): void;
    // 工具栏的点击事件              
    onClick(): void;
    // 工具栏的渲染
    render(): void;

}