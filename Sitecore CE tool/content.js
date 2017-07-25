function getContentByMetaTagName(c) {
  for (var b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
    if (c == b[a].name ) {
      return b[a].content;
     }
  } return false;
}

// Inform the background page that
// this tab should have a page-action
chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    // Collect the necessary data
    // (For your specific requirements `document.querySelectorAll(...)`
    //  should be equivalent to jquery's `$(...)`)
    var domInfo = {
      itemid:   getContentByMetaTagName('itemId').substr(1, 36),
      title:  getContentByMetaTagName('title'),
      desc: getContentByMetaTagName('description'),
      key: getContentByMetaTagName('keywords')
    };

    // Directly respond to the sender (popup),
    // through the specified callback */
    response(domInfo);
  }
});
