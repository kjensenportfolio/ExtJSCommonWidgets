//Tools Grab Object References Relative To Other Object References if in MVVM Mode

Ext.define('Ui', function (me) {
	'use strict';

     self.Ui = me; // global execution context alias
    
    function getViewPort() {
        return Ext.ComponentQuery.query('viewport')[0];
    }
    
    function getTopmostWindow() {
        var window = Ext.WindowManager.getActive(),
            xtypes = window.xtypes;
        if(!/messagebox/i.test(window)) return window;
    }
    
    
    //SELECTIONS [GRIDS, COMBOBOXES]
    getSelectionValue: function(selection, property) {
        if(selection) return selection.get(property);
        else return null;
    },
    
    //GRID FUNCTIONS
    
    
    
      
    return {
    	statics: {
    
    		getViewPort: getViewPort,
    
    		getTopmostWindow: getTopmostWindow,
    	}
    }
});
