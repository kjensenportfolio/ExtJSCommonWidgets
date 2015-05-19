/* Common Reusable Actions that are as untied as possible */


Actions = {

  getSessionId: function(){
        var location = window.location,
            href = location.href,
            urlSplit = href.split("?"),
            sessionId = urlSplit[1];
        return sessionId;
    },

    setHeader: function (store){
        var sessionId = this.getSessionId();
        store.getProxy().headers = {
            'session-id': sessionId,
            'Content-Type': 'application/json; charset=UTF-8'
        };
    }
}
