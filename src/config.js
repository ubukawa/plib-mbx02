const version = 0.1;

module.exports = {
    accessToken : process.env.ACCESSTOKEN,
    // change attribution to yours
    attribution : 'test map',
    // change stylefiles URLs to yours
    styles : [
        { title: 'Unite Street Map by UNVT', uri: `https://dev-unvt.dfs.un.org/styles/style-prod.json?version=${version}`,},
        { title: 'UNVT-3D Buiding (not yet)', uri: `https://dev-unvt.dfs.un.org/styles/style-prod.json?version=${version}`,},
        { title: 'UNVT-3D Terrain (not yet)', uri: `https://dev-unvt.dfs.un.org/styles/style-prod.json?version=${version}`,},
        { title: 'Clear Map Vector - Plain (test)', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-plain0820.json?version=${version}`,},
        { title: 'Clear Map Vector - Dark (test)', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-dark0820.json?version=${version}`,},
        { title: 'Clear Map Vector - Gray (test)', uri: `https://dev-unvt.dfs.un.org/styles/clearmapVector/clearmap-gray0820.json?version=${version}`,},
        { title: 'NYC (osm)', uri: `https://ubukawa.github.io/osm-neighbor/style.json?version=${version}`,},
        { title: 'Natural Earth(small)', uri: `https://ubukawa.github.io/vt-test/maps/test-simple.json?version=${version}`,},
    ],
    // change initial location and zoom level to yours
    center: [0, 0],
    zoom: 1,
    // please specify layers' name for showing popup with attributes table.
    popup: {
        target: ['pt-place-capital','road']
    },
    // please specify your covered area if you have multipul locations to do waterworks
    areaSwitcher: {
        areas : [
            {title: 'UNGSC',latlng: [17.95044, 40.64439],zoom: 14,}, 
            {title: "NYC",latlng: [-73.9239, 40.6956],zoom: 10},
            {title: "NE",latlng: [0, 0],zoom: 1}
        ]
    },
    // please specify layer name for showing in legend panel.
    legend:{
        targets:{
            'pg-landcover': 'Land Cover',
            'pg-land-nature-m': 'Nature-m',
            'pg-land-nature-l': 'Nature-l',
            'ls-road-line-small': 'Road (at small scale)',
            'watera': 'Water area'
        },
        options: {
            showDefault:false,
            showCheckbox:true,
            reverseOrder:true,
            onlyRendered:true
        }
    }
}