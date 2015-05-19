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
    }
    
};
