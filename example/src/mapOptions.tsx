export default {
        mapOpts: {
            minZoom: 4,
            defaultZoom: 4,
            maxZoom: 19,
            centerPoint: [105.22757357171984, 36.28002287498697],
            restrictedExtent: [49.527412746049045, 3.557673550660887, 160.92773439739062, 59.46760687935016],
            projection: 'EPSG:3857',
            isOnly2DMap: true
        },
        "isZenMap": true,
        "vectorLayer": [{
            "layerName": "gaodeVector",
            "layerType": "ZenMap.Layers.GaoDeLayer",
            "layerOpt": {
                "url": ["http://192.168.66.210:8888/zenview/mapbox/services/chinaMapboxDemo/MapServer/getMapboxVectorTile?&L={z}&Y={y}&X={x}&buildingFromDb=true"],
                "type": "vector",
                "isBaseLayer": true,
                "maxZoom": 19,
                "minZoom": 4
            }
        }
        ],
        "sattilateLayer": [{
            "layerName": "gaodexian1",
            "layerType": "ZenMap.Layers.GaoDeLayer",
            "layerOpt": {
                "url": ["http://192.168.66.210:8888/zenview/ZENMAP/services/shuozhouyingxiang/MapServer/getTile?L={z}&X={x}&Y={y}"],
                "maxZoom": 19,
                "minZoom": 4
            }
        }]
};