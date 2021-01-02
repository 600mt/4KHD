// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
	mapboxgl.accessToken = 'pk.eyJ1IjoiNjAwbXQiLCJhIjoiY2tqZnNvdXB0OHVvczMxcWowZ29iNnowYiJ9.gPVHgS1CdbzW0Hig733jxw';
    var map = new mapboxgl.Map({
        container: 'map',
        zoom: 13.1,
        center: [-114.34411, 32.6141],
        pitch: 85,
        bearing: 80,
        style: 'mapbox://styles/600mt/ckjg5dn1aenj419p311p59eoz'
    });

    map.on('load', function () {
        map.addSource('mapbox-dem', {
            'type': 'raster-dem',
            'url': 'mapbox://mapbox.terrain-rgb',
            'tileSize': 512,
            'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 2 });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
            'id': 'sky',
            'type': 'sky',
            'paint': {
                'sky-type': 'atmosphere',
                'sky-atmosphere-sun': [0.0, 0.0],
                'sky-atmosphere-sun-intensity': 15
            }
        });
    });
