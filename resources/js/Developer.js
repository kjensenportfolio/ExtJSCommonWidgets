/* Developer Code for Tests */

Developer = { 
    getTopmostWindow: function() {
        var activeWindows = Ext.ComponentQuery.query('window:not(messagebox){isVisible}'),
            activeWindowCount = activeWindows.length,
            id = activeWindowCount - 1;
        if(id >= 0) {
            return activeWindows[id];
        } 
        else {
            return 'No Windows are Active';
        }
    },

    extendSession: function() {
        am = Ext.ux.ActivityMonitor;
        am.ui.initEvent('mousemove', am.captureActivity, am);
    },
    
    _applicationName: function() {
        var apps = ['one', 'two', 'three', 'four'];
        apps.forEach(function(app) {
            if (Ext.isObject(this[app])) {
                [app][0];
                console.log([app][0]);
                return [app][0];
            }
        });
    },

    getViewPort: function() {
        return Developer._applicationName().getApplication().getMainView();
    },

    lookupReference: function(referencekey) {
        return Developer._applicationName().getApplication().getMainView().lookupReference(referencekey);
    },

    //lookupWindowReference: function('') {
    //return Developer._applicationName().getApplication().lookupReference('');
    //},

    //deleteMultipleItems: function() {
    //var ref =
    //return lookupReference();
    //}

    
};
