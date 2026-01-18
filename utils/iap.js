var iapProducts = {
    server: [
        {name: 'Server for 3 Days', id: '3_server', price: 3.99},
        {name: 'Server for 7 Days', id: '3_server', price: 5.99},
        {name: 'Server for 30 Days', id: '3_server', price: 14.99},
        {name: 'Server for 90 Days', id: '3_server', price: 39.99}
    ],
    bread: [
        {name: '300 Golden Bread', id: '300_bread', price: 0.99},
        {name: '600 Golden Bread', id: '600_bread', price: 1.79},
        {name: '2600 Golden Bread', id: '2600_bread', price: 7.49},
        {name: '7000 Golden Bread', id: '7000_bread', price: 15.99},
        {name: '20000 Golden Bread', id: '20000_bread', price: 34.99}
    ]
};

var isWrapper = false;
var purchaseCompleteCallback;
var purchaseErrorCallback;
var isAndroid = false;

var startWrappedApp = function (_isAndroid) {
    isWrapper = true;
    isAndroid = JSON.parse(_isAndroid);
};

var purchase = function (productId, callback, errorCallback) {
    if (isAndroid) {
        BlockHandler.purchase(productId);
    } else {
        callToNativeIOS('purchase|' + productId);
    }
    purchaseCompleteCallback = callback;
    if (errorCallback) {
        purchaseErrorCallback = errorCallback;
    }
};

var purchaseError = function (_error) {
    var errorText = _error || 'Problem. Please try again.'
    if (purchaseErrorCallback) {
        purchaseErrorCallback(error);
        client.new_alert(error.toString());
    }
};

var callToNativeIOS = function (message) {
    try {
        // eslint-disable-next-line no-undef
        webkit.messageHandlers.callbackHandler.postMessage(message);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.log("The native context does not exist yet");
    }
}

var purchaseComplete = function (productId, purchaseToken, orderId, success) {
    if (purchaseCompleteCallback) {
        purchaseCompleteCallback.apply(null, arguments)
    }
};

var callTriggerAd = function () {
    if (isAndroid) {
        triggerAd()
    } else {
        callToNativeIOS('triggerAd');
    }
}

