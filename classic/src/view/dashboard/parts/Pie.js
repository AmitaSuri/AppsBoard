Ext.define('AppsBoard.view.dashboard.parts.Pie', {
    requires: [
        'Ext.chart.theme.Purple',
        'Ext.chart.PolarChart',
        'Ext.chart.series.Pie3D',
        'Ext.chart.interactions.Rotate'
    ],
    extend: 'Ext.dashboard.Part',
    alias: 'part.piechart',

    viewTemplate: {
        layout: 'fit',
        title: 'Month-wise Expense',
        header: false,
      //  resizable: false,
      //  draggable: false,
        
        /*tools: [{
            type:'gear',
            tooltip: 'Settings',
            handler: function() {
                Ext.Msg.alert('INFO', 'Settings clicked!!');
            }
        }],*/
        items: [{
            xtype: 'polar',
            //width: 600,
           // height: 400,
            theme: 'purple',
            interactions: 'rotate',
            store: {
                fields: ['data3'],
                data: [{
                    'data3': 14
                }, {
                    'data3': 16
                }, {
                    'data3': 14
                }, {
                    'data3': 6
                }, {
                    'data3': 36
                }]
            },
            series: {
                type: 'pie3d',
                angleField: 'data3',
                donut: 30
            }
        }]
    }
});