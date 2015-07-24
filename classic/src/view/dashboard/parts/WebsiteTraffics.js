Ext.define('AppsBoard.view.dashboard.parts.WebsiteTraffics', {
    requires: [

        'Ext.sparkline.Bar',
        'Ext.Component'
    ],
    extend: 'Ext.dashboard.Part',
    alias: 'part.websitetraffic',

    viewTemplate: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        header: false,
        draggable: false,
        resizable: false,
        bodyCls: 'cyanbg',
        //bodyStyle: {backgroundColor: '#00BFFF'},
        items: [{
            xtype: 'sparklinebar',
            barColor: '#FFFFFF',
            margin: 10,
            height: 40,
            width: 90,
            values: [2, 4, 6, -3, 7, 10, 3, 5, 9, 2, 4, 6, -3, 7, 10, 3, 5, 9]
        }, {
            xtype: 'component',
            flex: 1,
            //align: 'stretch',
            html: '<div style="padding-left: 10px;padding-top: 20px;color: #FFFFFF;"><small>Website Traffics</small><br/><span class="bigtext">987,459</span></div>'
        }]
    }
});