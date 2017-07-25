// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('itemid').textContent   = info.itemid;
  document.getElementById('title').textContent  = info.title;
  document.getElementById('desc').textContent = info.desc;
  document.getElementById('key').textContent = info.key;
}

// Once the DOM is ready...
window.addEventListener('DOMContentLoaded', function () {
  // ...query for the active tab...
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    // ...and send a request for the DOM info...
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo'},
        // ...also specifying a callback to be called
        //    from the receiving end (content script)
        setDOMInfo);
        var textArea = document.getElementById('itemid');
        var copyBtn1 = document.getElementById('copy1');
  });
});


if (copyBtn1) {
    document.getElementById('copyBtn1').addEventListener('click', document.getElementById('itemid').select());
};
