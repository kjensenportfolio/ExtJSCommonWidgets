/* Common View Model */

Ext.define( App.view.common.CommonViewModel, {
  extend: 'Ext.view.ViewModel',
  alias: 'model.common',
  xtype: ''
  
  init: function() {
  },
  
  getParentReference: function(reference) {
    return this._accessParentViewModel(reference);
  },
  
  _accessParentViewModel: function(reference) {
    var parentVM =  this.getViewModel().getParent(),
    parentView = parentVM.getView(),
    reference = parentView.lookupReference(reference);
    
    return reference;
  },
  
/* COMMMON [NEW/EDIT/DELETE] BUTTONS */
    //obs: not needed with ExtJS 5, we can use [bind:{hidden:{gridReference.selection}}]
    enableButtons: function(buttonList, scope, determiner) {
        buttonList = !buttonList ? '#editButton{isVisible()}, #deleteButton{isVisible()}': buttonList;
        var Query = Ext.ComponentQuery,
            toggleFn = determiner ? 'enable' : 'disable',
            buttons = Query.query(buttonList, scope);
        Ext.each(buttons, function(item) {
            item[toggleFn]();
        });
    },
  
  //obs: get associated title of grids for associated buttons
  getTitle: function(button) {
      var grid = button.up('gridpanel'), tab = grid.up('panel'),
          title = !grid.title ? tab.title : grid.title;
      if (title.match(/ies+$/)) {
          title = title.replace(/ies+$/, 'y');
      } else if (title.match(/User/)) {
          title = title.replace(/Access+$/, '');
      } else {
          title = title.replace(/s+$/, '');
      }
      return title;
  },

  setToolTips: function(button) {
      switch (button.itemId) {
          case 'newButton':button.setTooltip('Create a New ' + this.getTitle(button));break;
          case 'editButton':button.setTooltip('Edit selected ' + this.getTitle(button));break;
          case 'deleteButton':button.setTooltip('Delete selected ' + this.getTitle(button));break;
          case 'refreshButton':button.setTooltip('Refresh this ' + this.getTitle(button) + ' Grid');break;
          case 'newCatalogUser':button.setTooltip('Create a New Suite ' + this.getTitle(button));break;
          case 'newSuiteUser':button.setTooltip('Link Suite ' + this.getTitle(button) + 'to Catalog');break;
      }
  },

  setIconCls: function(button) {
      if (!button.iconCls) {
          switch (button.itemId) {
              case 'newButton':button.setIconCls('new_32');break;
              case 'editButton':button.setIconCls('edit_32');break;
              case 'deleteButton':button.setIconCls('remove_32');break;
              case 'refreshButton':button.setIconCls('refresh_32');break;
              case 'newCatalogUser':button.setIconCls('new_32');break;
              case 'newSuiteUser':button.setIconCls('link_32');break;
          }
      }
  },
  
  //TOOLBARBUTTONS
      onCommonButtonClick: function(button, e, eOpts) {
        var Window = button.up('window'), //Ext.WindowManager.getActive(),
            form = Window.down('form');
        if (button.itemId === 'clearButton') {
            Ui.clearFieldValues(form);
            Ui.getDefaultComboboxValues(form);
        }
        //else if (button.itemId === 'saveAndCloseButton'){
        //this.onSaveButtonClick(); Window.close();
        //}
        if (button.itemId === 'closeButton') {
            Window.close();
        }
    },

    onButtonAfterRender: function(component, eOpts) {
        if(/save/i.test(component.itemId)) {Ext.override(component, {formBind: true});}
        if(/saveAndClose/i.test(component.itemId)) {component.hide();}
    }
  
  //Used by Refresh Buttons
  reloadGridStore: function(grid, data) {
      var store = grid.getStore(),
          url = grid.searchUrl; 
      if(data) {
          Ui.getStoreData(store, data);
      }  else {
          Ui.loadStoreWithoutId(store, url);
          Ui.clearGridSelection(grid);
      }
  }
  
});
