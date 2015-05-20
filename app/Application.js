
Ext.define('App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'App',

    requires: [
    ],
    
    stores: [ 
      'css.CssStore'
    ],
    
    views: [
    
    ],

    launch: function() {
      //Theme Switch
      var stylesheet = ('default', 'one', 'two', 'three');
      logo = ;
      switch (stylesheet) {
          case 'one': stylesheet = 'one'; break;
          case 'two':stylesheet = 'two'; break;
          case 'three':stylesheet = 'three'; break;
          case 'default':stylesheet = 'default'; break;
      }
      if(window.location.href.indexOf(stylesheet) !== -1) {
        Ext.util.CSS.swapStyleSheet('theme', window.location.href + 'resources/'+stylesheet+'.css');
      }
    }
});
