/* UI Javascript Resource Files */

Ui = {

//UNCATEGORIZED [TODO]
    _partitionedName : function(l) {
        var w = l.match(/[A-Z][a-z]+/g),
            n = w[0] === 'Discount' ? l : w[0];
        return n;
    },

    getTitle : function(button) {
        var tabPanel = Ext.ComponentQuery.query('tabpanel{isVisible}')[0],
            tab = tabPanel.getActiveTab(),
            grids = Ext.ComponentQuery.query('gridpanel{isVisible}', tab);
        if (button) {grid = button.up('gridpanel');}
        grid = grids.length > 1 && grids[1].getSelectionModel().hasSelection() ? grids[1] : grids[0];
        t = !grid.title ? tab.title : grid.title;
        if (t.match(/ies+$/)) {
            t = t.replace(/ies+$/, 'y');
        } else {
            t = t.replace(/s+$/, '');
        }
        return t; //console.log(t);
    },

    toggleTabs : function(tabpanel, status) {
        var toggleFn = status === true ? 'enable' : 'disable',
            collection = Ext.ComponentQuery.query('tab', tabpanel);
        Ext.Array.forEach(collection, function(tab){
            if(!tab[0]) {
                tab[toggleFn]();
            }
        });
    },


    
  //STORES 
    getStoreData: function(store, data) {
        store.getRange(store.removeAll());
        store.add(data);
    },
    
    getMultipleStoresData: function(map) {
      map.
    }
    
    getAssociatedStore: function(refHolder, storeId, url) {
        var vm = refHolder.getViewModel(),
            store = vm.getStore(storeId);
        GlobalActions.loadStoreWithoutId(store, url);
    },
  
  
  //FORMS
  getDefaultComboboxValues: function(component) {
    collection = Ext.ComponentQuery.query('combobox', component);
    Ext.Array.forEach(collection, function(combobox){
        var statusCombobox = /status/i.test(combobox.displayField);
        if(statusCombobox) {
            var pendingValue =  combobox.findRecordByValue('Pending');
            combobox.select(pendingValue);
        } else {
            combobox.select(combobox.getStore().getAt(0)); 
        }
    });
},

clearComboboxValues: function(component) {
    Ext.suspendLayouts(); 
    collection = Ext.ComponentQuery.query('combobox', component);
    Ext.Array.forEach(collection, function(combobox){
        var statusCombobox = /status/i.test(combobox.displayField);
        if(statusCombobox) {
            var pendingValue = combobox.findRecordByValue('Pending');
            combobox.select(pendingValue);
        } else {
            combobox.reset();
        }
    });
    Ext.resumeLayouts(true); 
},

clearFieldValues: function(component) {
    Ext.suspendLayouts(); 
    collection = Ext.ComponentQuery.query('field:not(displayfield)', component);
    Ext.Array.forEach(collection, function(field){
        field.reset();
    });
    Ext.resumeLayouts(true);
},


//PANELS

//PANELS > TABPANELS
    toggleTabs : function(tabpanel, status) {
        var toggleFn = status === true ? 'enable' : 'disable',
            collection = Ext.ComponentQuery.query('tab', tabpanel);
        Ext.Array.forEach(collection, function(tab){
            if(!tab[0]) {
                tab[toggleFn]();
            }
        });
    },

//GRIDS

    //Obs: If the Grid Store has a special search URL and Session Header
    gridRefresh : function(grid){
        var store = grid.store;
        store.load();
    },
    
    
    //Obs: Grid SearchField Search Action 
        storeSearch: function(store, newValue) {
        var me = this;
        if(newValue !== ''){
            store.clearFilter(true);
            var matcher = new RegExp(Ext.String.escapeRegex(newValue), "i");
            store.filter({
                filterFn: function(record) {
                    var sku = record.get('sku'),
                        name = record.get('itemName'),
                        status = record.get('itemStatus');
                    return matcher.test(sku) || matcher.test(name) || matcher.test(status);
                }
            }, me);
        } else {
            store.clearFilter();
        }
    },
    
    loadGridStores: function(noClip) {
        var me = this;
        //obs: removes the first tab, if post call is made and grid store is returned with POST call
        if (!noClip) me.lookupReference('tabpanel').items.items.splice(0, 1);
        var tabs = me.lookupReference('tabpanel').items.items;
        me.lookupReference('gridOne').searchUrl = 'one/search';
        me.lookupReference('gridTwo').searchUrl = '/two/search';
        me.lookupReference('gridThree').searchUrl = '/three';
        me.lookupReference('gridFour').searchUrl = '/four/search';
        me.lookupReference('gridFive').searchUrl = '/five/search';
        me.lookupReference('gridSix').searchUrl = '/six/' + globalParameter;

        Ext.Array.forEach(tabs, function(item) {
            var grid = item.child(),
                store = grid.getStore(),
                url = grid.searchUrl,
                params = store.getProxy().extraParams;
            if (grid.itemId.match(/Group/)) {
                params.globalparam = globalParameter;
                GlobalActions.getfilteredStore(store, url, params);
            } else {
                if (grid.itemId.match(/categories/)) {
                    params.globalparamId = globalParameter;
                }
                GlobalActions.loadStoreWithoutId(store, url);
            }
        });
    },

//GRIDS > RECORDS
    deleteRecord: function (url, json, obj, store) {
        messageBox = Ext.Msg.show({
            title:'Confirm',
            msg: 'Are you sure you want to delete this '+GlobalActions.getTitle()+'?',
            buttons: Ext.Msg.YESNO,
            scope: this,
            fn: function(btn) {
                if (btn === 'yes') {
                    GlobalActions.remove(url, json, obj, store);
                    //this.showToast(Ext.String.format(GlobalActions.getTitle() + 'Item Was Deleted'));
                    messageBox.close();
                }
                else if (btn === 'no') {
                    messageBox.close();
                }
            }
        });
    },
    

}
