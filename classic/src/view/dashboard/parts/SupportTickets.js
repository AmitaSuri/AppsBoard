Ext.define('AppsBoard.view.dashboard.parts.SupportTickets', {
    requires: [

        'Ext.sparkline.Bar',
        'Ext.Component'
    ],
    extend: 'Ext.dashboard.Part',
    alias: 'part.supporttickets',

    viewTemplate: {
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        header: false,
        draggable: false,
        resizable: false,
        //bodyCls: 'greenbg',
        bodyStyle: {backgroundColor: '#32CD32'},
        items: [{
            xtype: 'sparklineline',
            lineColor: '#FFFFFF',
            lineWidth: 3,
            margin: 20,
            height: 40,
            width: 90,
            values: [2, 4, 6, -3, 7, 10, 3, 5, 9, 2, 4, 6, -3, 7, 10, 3, 5, 9]
        }, {
            xtype: 'component',
            flex: 1,
            //align: 'stretch',
            html: '<div style="padding-left: 10px;padding-top: 20px;color: #FFFFFF;"><small>Support Tickets</small><br/><span class="bigtext">23,856</span></div>'
        }]
    }
});