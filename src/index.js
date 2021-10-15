import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MapboxStyleSwitcherControl } from "@watergis/mapbox-gl-style-switcher";
import "@watergis/mapbox-gl-style-switcher/styles.css"
import MapboxPopupControl from '@watergis/mapbox-gl-popup';
import '@watergis/mapbox-gl-popup/css/styles.css';
import MapboxPitchToggleControl from '@watergis/mapbox-gl-pitch-toggle-control';
import '@watergis/mapbox-gl-pitch-toggle-control/css/styles.css';
import MapboxAreaSwitcherControl from '@watergis/mapbox-gl-area-switcher';
import '@watergis/mapbox-gl-area-switcher/css/styles.css';
import MapboxLegendControl from "@watergis/mapbox-gl-legend";
import '@watergis/mapbox-gl-legend/css/styles.css';
import { MapboxExportControl}  from "@watergis/mapbox-gl-export";
import '@watergis/mapbox-gl-export/css/styles.css';
import MapboxElevationControl from "@watergis/mapbox-gl-elevation";
import '@watergis/mapbox-gl-elevation/css/styles.css';
import { MapboxValhallaControl} from "@watergis/mapbox-gl-valhalla";
import '@watergis/mapbox-gl-valhalla/css/styles.css';
import axios from 'axios';
import config from './config';

(()=>{


    const map = new mapboxgl.Map({
        container: 'map',
        style: config.styles[0].uri,
        center: config.center,
        zoom: config.zoom,
        hash:true,
        attributionControl: false,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.addControl(new mapboxgl.GeolocateControl({positionOptions: {enableHighAccuracy: true},trackUserLocation: true}), 'top-right');
    map.addControl(new MapboxPitchToggleControl({minpitchzoom: 19})); 
    MapboxStyleSwitcherControl.DEFAULT_STYLE = config.styles[0].title;
    map.addControl(new MapboxStyleSwitcherControl(config.styles), 'top-right');
    map.addControl(new MapboxAreaSwitcherControl(config.areaSwitcher.areas), 'top-right');
    if (config.elevation){
        map.addControl(new MapboxElevationControl(config.elevation.url, config.elevation.options), 'top-right');
    }
    map.addControl(new MapboxExportControl({Crosshair: true, PrintableArea: true}), 'top-right');
    if (config.valhalla){
        map.addControl(new MapboxValhallaControl(config.valhalla.url, config.valhalla.options),'top-right');
    }
    map.addControl(new mapboxgl.ScaleControl({maxWidth: 80, unit: 'metric'}), 'bottom-left');
    map.addControl(new mapboxgl.AttributionControl({compact: true,customAttribution: config.attribution}), 'bottom-right');
    if (config.popup)map.addControl(new MapboxPopupControl(config.popup.target));
    
    if (config.legend){
        const legendCtrl = new MapboxLegendControl(config.legend.targets, config.legend.options);
        map.addControl(legendCtrl, 'bottom-left')
    }

})();