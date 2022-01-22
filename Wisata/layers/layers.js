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
var format_Wisata_0 = new ol.format.GeoJSON();
var features_Wisata_0 = format_Wisata_0.readFeatures(json_Wisata_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wisata_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Wisata_0.addFeatures(features_Wisata_0);var lyr_Wisata_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wisata_0, 
                style: style_Wisata_0,
    title: 'Wisata<br />\
    <img src="styles/legend/Wisata_0_0.png" /> -<br />\
    <img src="styles/legend/Wisata_0_1.png" /> Bukit Gombel, Brown Canyon, Waduk Undip<br />\
    <img src="styles/legend/Wisata_0_2.png" /> Goa Kreo, Waduk Jatibarang<br />\
    <img src="styles/legend/Wisata_0_3.png" /> Kampung Pelangi<br />\
    <img src="styles/legend/Wisata_0_4.png" /> Kota Lama Semarang<br />\
    <img src="styles/legend/Wisata_0_5.png" /> Maroon Magrove Edu Park, Pantai Tirang<br />\
    <img src="styles/legend/Wisata_0_6.png" /> Museum Rekor Dunia<br />\
    <img src="styles/legend/Wisata_0_7.png" /> Semarang Contemporary, Pantai marina<br />\
    <img src="styles/legend/Wisata_0_8.png" /> Semarang Zoo, Lembah Kaalipancur<br />\
    <img src="styles/legend/Wisata_0_9.png" /> Taman Wisata I Maerokoco, Sampokong<br />\
    <img src="styles/legend/Wisata_0_10.png" /> <br />'
        });

lyr_Wisata_0.setVisible(true);
var layersList = [baseLayer,lyr_Wisata_0];
lyr_Wisata_0.set('fieldAliases', {'KECAMATAN': 'KECAMATAN', 'Wisata': 'Wisata', });
lyr_Wisata_0.set('fieldImages', {'KECAMATAN': 'TextEdit', 'Wisata': 'TextEdit', });
lyr_Wisata_0.set('fieldLabels', {'KECAMATAN': 'inline label', 'Wisata': 'inline label', });
lyr_Wisata_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});