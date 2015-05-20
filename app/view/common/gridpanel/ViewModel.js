//COMMON GRID VIEW MODEL

Ext.define('App.app.view.common.gridpane.ViewModel', {
extend: 'Ext.view.viewModel',
alias: 'model.commonGridPanel',

stores: {//store = Ext.create('Ext.data.Store', {
  gridStore : {
  	extend: 'Ext.data.Store'
		pageSize: 20,
		model: 'Cool.app.model.Controller',
		autoLoad: true,
		proxy: {
    		type: 'jsonp',
    		url: 'http://www.sencha.com/forum/topics-browse-remote.php',
    		reader: {
        		root: 'topics',
        		totalProperty: 'totalCount'
    	},
    	listeners: {
    		beforeload: 'onGridStoreBeforeLoad'
    	}
	}
}
});
