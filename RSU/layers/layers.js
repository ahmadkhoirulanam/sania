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
var format_RumahSakitUmum_0 = new ol.format.GeoJSON();
var features_RumahSakitUmum_0 = format_RumahSakitUmum_0.readFeatures(json_RumahSakitUmum_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakitUmum_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RumahSakitUmum_0.addFeatures(features_RumahSakitUmum_0);var lyr_RumahSakitUmum_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakitUmum_0, 
                style: style_RumahSakitUmum_0,
    title: 'Rumah Sakit Umum<br />\
    <img src="styles/legend/RumahSakitUmum_0_0.png" />  (0- 1) Sedikit <br />\
    <img src="styles/legend/RumahSakitUmum_0_1.png" />  (1 - 2) Sedang<br />\
    <img src="styles/legend/RumahSakitUmum_0_2.png" />  (2 - 4) Banyak<br />'
        });

lyr_RumahSakitUmum_0.setVisible(true);
var layersList = [baseLayer,lyr_RumahSakitUmum_0];
lyr_RumahSakitUmum_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'RS Umum': 'RS Umum', });
lyr_RumahSakitUmum_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'RS Umum': 'TextEdit', });
lyr_RumahSakitUmum_0.set('fieldLabels', {'Kecamatan': 'inline label', 'RS Umum': 'inline label', });
lyr_RumahSakitUmum_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});