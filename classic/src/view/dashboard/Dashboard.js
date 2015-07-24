Ext.define('AppsBoard.view.dashboard.Dashboard', {
    extend: 'Ext.dashboard.Dashboard',

   requires: [
        'AppsBoard.view.dashboard.parts.Form',
        'AppsBoard.view.dashboard.parts.InventoryChart',
        'AppsBoard.view.dashboard.parts.Pie',
        'AppsBoard.view.dashboard.parts.Area',
        'AppsBoard.view.dashboard.parts.BooksList',
        'AppsBoard.view.dashboard.parts.TotalSales',
        'AppsBoard.view.dashboard.parts.WebsiteTraffics',
        'AppsBoard.view.dashboard.parts.SupportTickets'
    ],

    xtype: 'home-bashboard',

    defaultContent: [{
        type: 'websitetraffic',
        columnIndex: 0,
        height: 40
    }, {
        type: 'supporttickets',
        columnIndex: 1,
        height: 40
    }, {
        type: 'totalsales',
        columnIndex: 2,
        height: 40
    }, {
        type: 'bookslist',
        columnIndex: 0,
        height: 265
    }, {
        type: 'inventorychart',
        columnIndex: 1,
        height: 265
    }, {
        type: 'piechart',
        columnIndex: 2,
        height: 265
    }, {
        type: 'areachart',
        columnIndex: 0,
        height: 260
    }],

    config: {
        scrollable: true,
        maxColumns: 3,
        parts: {
            'formwidget': 'formwidget',
            'inventorychart': 'inventorychart',
            'piechart': 'piechart',
            'areachart': 'areachart',
            'bookslist': 'bookslist',
            'totalsales': 'totalsales',
            'websitetraffic': 'websitetraffic',
            'supporttickets': 'supporttickets'
        }
    }
});