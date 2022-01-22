var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SMA_0 = new ol.format.GeoJSON();
var features_SMA_0 = format_SMA_0.readFeatures(json_SMA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMA_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SMA_0.addFeatures(features_SMA_0);var lyr_SMA_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SMA_0, 
                style: style_SMA_0,
    title: 'SMA<br />\
    <img src="styles/legend/SMA_0_0.png" />  (619 - 1790) Rendah<br />\
    <img src="styles/legend/SMA_0_1.png" />  (1790 - 2961) Sedang <br />\
    <img src="styles/legend/SMA_0_2.png" />  (2961 - 4132( Banyak <br />'
        });

lyr_SMA_0.setVisible(true);
var layersList = [baseLayer,lyr_SMA_0];
lyr_SMA_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'SMA': 'SMA', });
lyr_SMA_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'SMA': 'TextEdit', });
lyr_SMA_0.set('fieldLabels', {'Kecamatan': 'inline label', 'SMA': 'inline label', });
lyr_SMA_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});