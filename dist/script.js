var viewer = OpenSeadragon({
    id: "seadragon-viewer",
    prefixUrl: "//openseadragon.github.io/openseadragon/images/",
    tileSources: [{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'https://eopro.esa.int/wp-content/uploads/2024/10/PHI_Visible-light_20230322.jpg',
                width:  9600,
                height: 9600
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'https://eopro.esa.int/wp-content/uploads/2024/10/PHI_Magnetogram_20230322.jpg',
                width:  9600,
                height: 9600
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'https://eopro.esa.int/wp-content/uploads/2024/10/PHI_Velocity-map_20230322.jpg',
                width:  9600,
                height: 9600
            }]
        },{
            type: 'legacy-image-pyramid',
            levels: [{
                url: 'https://eopro.esa.int/wp-content/uploads/2024/10/EUI_Ultraviolet-light_20230322.jpg',
                width:  9600,
                height: 9600
            }]
        }],

        sequenceMode: true, //next page, prev page
        showReferenceStrip: true,
        //referenceStripScroll: 'vertical', //Vertical Scrolling Image Reference Strip
        // showRotationControl: true, //button rotate
        showNavigator: true,
        maxZoomPixelRatio: 5.0,
        controlsFadeDelay: 3500,
        homeFillsViewer: false
});