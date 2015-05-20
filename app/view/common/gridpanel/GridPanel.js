Ext.define('Cool.app.view.View', {
  extend: 'Ext.container.Container',
  alias: 'widget.main'
  controller: 'main',
  viewModel: {
  		type: 'main'
  },
  bodyPadding: 10px,
  items: ['formgridpanel']
  
  });
  
  Ext.define('Cool.app.view.Grid', {
      extend: 'Ext.grid.Panel',
      alias: 'widget.formgridpanel'
      controller: 'main',
  viewModel: {
  		type: 'main'
  },
  reference: 'forumgridpanel',
      autoscroll: true,
      height: 300,
      store: store,
      stateful: true,
      forceFit: true,
      loadMask: false,
      stateId: 'stateGrid',
      listeners: {
      	refresh: 'refreshGrid'
      },
      viewConfig: {
          stripeRows: true
      },
      columns:[{
          id: 'topic',
          text: "Topic",
          dataIndex: 'title',
          flex: 1,
          sortable: false
      },{
          text: "Replies",
          dataIndex: 'replycount',
          width: 70,
          align: 'right',
          sortable: true
      },{
          id: 'last',
          text: "Last Post",
          dataIndex: 'lastpost',
          width: 150,
          sortable: true
      }],
      buttons: [{
          text: 'Reload Store',
          handler: function() {
              grid.getStore().load();
          }
      }]

});
