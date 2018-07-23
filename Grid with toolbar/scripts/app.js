var gridStore = null;
var tmp = null;

Ext.onReady(function() {

    // Store data
    var myData = [
        ['3m Co', 71.72, 0.02, 0.03, '9/1 12:00am'],
        ['Alcoa Inc', 29.01, 0.42, 1.47, '9/1 12:00am'],
        ['Altria Group Inc', 83.81, 0.28, 0.34, '9/1 12:00am'],
        ['American Express Company', 52.55, 0.01, 0.02, '9/1 12:00am'],
        ['American International Group, Inc.', 64.13, 0.31, 0.49, '9/1 12:00am'],
        ['AT&T Inc.', 31.61, -0.48, -1.54, '9/1 12:00am'],
        ['Boeing Co.', 75.43, 0.53, 0.71, '9/1 12:00am'],
        ['Caterpillar Inc.', 67.27, 0.92, 1.39, '9/1 12:00am'],
        ['Citigroup, Inc.', 49.37, 0.02, 0.04, '9/1 12:00am'],
        ['E.I. du Pont de Nemours and Company', 40.48, 0.51, 1.28, '9/1 12:00am'],
        ['Exxon Mobil Corp', 68.1, -0.43, -0.64, '9/1 12:00am'],
        ['General Electric Company', 34.14, -0.08, -0.23, '9/1 12:00am'],
        ['General Motors Corporation', 30.27, 1.09, 3.74, '9/1 12:00am'],
        ['Hewlett-Packard Co.', 36.53, -0.03, -0.08, '9/1 12:00am'],
        ['Honeywell Intl Inc', 38.77, 0.05, 0.13, '9/1 12:00am'],
        ['Intel Corporation', 19.88, 0.31, 1.58, '9/1 12:00am'],
        ['International Business Machines', 81.41, 0.44, 0.54, '9/1 12:00am'],
        ['Johnson & Johnson', 64.72, 0.06, 0.09, '9/1 12:00am'],
        ['JP Morgan & Chase & Co', 45.73, 0.07, 0.15, '9/1 12:00am'],
        ['McDonald\'s Corporation', 36.76, 0.86, 2.40, '9/1 12:00am'],
        ['Merck & Co., Inc.', 40.96, 0.41, 1.01, '9/1 12:00am'],
        ['Microsoft Corporation', 25.84, 0.14, 0.54, '9/1 12:00am'],
        ['Pfizer Inc', 27.96, 0.4, 1.45, '9/1 12:00am'],
        ['The Coca-Cola Company', 45.07, 0.26, 0.58, '9/1 12:00am'],
        ['The Home Depot, Inc.', 34.64, 0.35, 1.02, '9/1 12:00am'],
        ['The Procter & Gamble Company', 61.91, 0.01, 0.02, '9/1 12:00am'],
        ['United Technologies Corporation', 63.26, 0.55, 0.88, '9/1 12:00am'],
        ['Verizon Communications', 35.57, 0.39, 1.11, '9/1 12:00am'],
        ['Wal-Mart Stores, Inc.', 45.45, 0.73, 1.63, '9/1 12:00am']
    ];

    // Creation of first grid store
    gridStore = Ext.create('Ext.data.ArrayStore', {
        fields: [{
                name: 'company'
            },
            {
                name: 'price',
                type: 'float'
            },
            {
                name: 'change',
                type: 'float'
            },
            {
                name: 'pctChange',
                type: 'float'
            },
            {
                name: 'lastChange',
                type: 'date',
                dateFormat: 'n/j h:ia'
            }
        ],
        data: myData
    });

    Ext.define('StudentDataModel', {
        extend: 'Ext.data.Model',
        fields: [{
                name: 'name',
                mapping: 'name'
            },
            {
                name: 'age',
                mapping: 'age'
            },
            {
                name: 'marks',
                mapping: 'marks'
            }
        ]
    });

    displayResult();
});

var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
    clicksToEdit: 1
});



function displayResult() {
    Ext.define('Ext.ux.DeleteButton', {
        extend: 'Ext.button.Button',
        alias: 'widget.delbutton',
        text: 'Remove Selected Record',
        handler: function () {
            // var grid = this.up('grid');
            // if (grid) {
            //     var sm = grid.getSelectionModel();
            //     var rs = sm.getSelection();
            //     if (!rs.length) {
            //         Ext.Msg.alert('Info', 'No Records Selected');
            //         return;
            //     }
            //     Ext.Msg.confirm('Remove Record', 'Are you sure?', function (button) {
            //         if (button == 'yes') {
            //             grid.store.remove(rs[0]);
            //         }
            //     });
            // }
            alert('ahah');
        }
    });
    Ext.define('Ext.ux.DeleteButton2', {
        extend: 'Ext.form.field.File',
        alias: 'widget.delbutton2',
        text: 'Remove Selected Record2',
        handler: function () {
            // var grid = this.up('grid');
            // if (grid) {
            //     var sm = grid.getSelectionModel();
            //     var rs = sm.getSelection();
            //     if (!rs.length) {
            //         Ext.Msg.alert('Info', 'No Records Selected');
            //         return;
            //     }
            //     Ext.Msg.confirm('Remove Record', 'Are you sure?', function (button) {
            //         if (button == 'yes') {
            //             grid.store.remove(rs[0]);
            //         }
            //     });
            // }
            alert('ahah');
        }
    });
    // Creation of first grid
    results = Ext.create('Ext.grid.Panel', {
        // id: 'gridId', // If id is specified, we cannot remove it completely!
        title: 'Students Grid', // Title for the grid
        dockedItems: [ // multiple lines
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'delbutton'
                }]
            },
            {
                xtype: 'toolbar',
                dock: 'top',
                items: [{
                    xtype: 'delbutton2'
                }]
            }
        ],
        // tbar: [{ xtype: 'delbutton'}, {xtype: 'delbutton2'}], // single line
        store: gridStore,
        stripeRows: true,
        renderTo: 'grid-example', // Div id where the grid has to be rendered
        // height: 350,
        // width: 600,
        forceFit: true,
        columnLines: true,
        selModel: {
            selType: 'cellmodel',
            mode   : 'MULTI'
        },
        plugins: [cellEditing],

        viewConfig: {
            listeners: {
                refresh: function(dataview) {   // Auto resize column
                    Ext.each(dataview.panel.columns, function(column) {
                        if (column.autoSizeColumn === true)
                            column.autoSize();
                    });
                }
            },
            // enableTextSelection: true,  // config to enable txt selection
        },
        listeners : {
            // event when finish editing
            // how to dynamically update cell value
            // how to get data, index of a cell
            edit : function(a, b) { 
                console.log(a);
                console.log(b);
                var newVal = b.value;
                var oldVal = b.originalValue;
                var colName = b.field;
                var store = results.getStore();
                var record = store.getAt(b.rowIdx);
                record.set('change', record.get('change') + newVal - oldVal);
                record.commit();
                // results.getView().render;
                // store.load();
            }
        },
        

        columns: [{
            text: 'Company Name', // Two line header! Test header height synchronization!
            locked: true,
            width: 200,
            sortable: false,
            dataIndex: 'company',
            autoSizeColumn: true, // Auto resize column
        }, {
            text: 'Price',
            width: 50,
            sortable: true,
            dataIndex: 'price',
            editor: {
                xtype: 'numberfield',
                allowBlank: false,
                minValue: 0,
                maxValue: 100000,
            },
        }, {
            text: 'Change',
            width: 50,
            sortable: true,
            dataIndex: 'change',
            renderer  : function(value, meta) {
                // if(value > 0) {
                //     meta.style = "background-color:hsl(0, 100%, 50%);";
                // } else {
                //     meta.style = "background-color:hsl(240, 100%, 50%);";
                // }
                return Ext.util.Format.number(value, '0.00');
            }
        }, {
            text: '% Change',
            width: 50,
            sortable: true,
            dataIndex: 'pctChange',
            renderer  : function(value, meta) {
                // if(value > 0) {
                //     meta.style = "background-color:hsl(0, 100%, 50%);";
                // } else {
                //     meta.style = "background-color:hsl(240, 100%, 50%);";
                // }
                return Ext.util.Format.number(value, '0.#%');
            }
        }, {
            text: 'Last Updated',
            width: 50,
            sortable: true,
            dataIndex: 'lastChange',
            autoSizeColumn: true,
        }],
    });
}

function emptyResults() {
    node = document.getElementById("grid-example");
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}