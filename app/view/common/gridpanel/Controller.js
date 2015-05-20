//COMMON GRIDPANEL CONTROLLER

Ext.define('Cool.app.view.Controller', {
            extend: 'Ext.view.ViewController',
            alias: 'controller.main',
            
            //Grid Refresh Listener
            refreshGrid: function(grid) {
            	grid.refreshSelection(grid);
            	grid.getView().preserveScrollOnRefresh = true;
            },
            //Grid Store Before Load Listener
            onGridStoreBeforeLoad: function() {
            	var selModel = this.getSelectionModel();
            	this.selectedRecords: [];
            	this.rememberSelection(selModel, selectedRecords);
            },
            //Grid Store Before Load Listener > Remember
            rememberSelection: function(selModel, selectedRecords) {
                this.selectedRecords = selModel.getSelection();
            },
            refreshSelection: function(grid) {
                var model = grid.getSelectionModel(),
                	newRecordsToSelect = [];
                if (0 >= grid.selectedRecords.length) return;
                for (var i = 0; i < grid.selectedRecords.length; i++) {
                    record = grid.getStore().getById(grid.selectedRecords[i].getId());
                    if (!Ext.isEmpty(record)) {
                        newRecordsToSelect.push(record);
                    }
                }
                this.getSelectionModel().select(newRecordsToSelect);   
            }
    });
