function getContentByMetaTagName(c) {
  for (var b = document.getElementsByTagName("meta"), a = 0; a < b.length; a++) {
    if (c == b[a].name) {
      return b[a].content;
    }
  }
  return false;
}

// draft-list
/* var itemTitle = document.getElementsByClassName('scClickFont');
var itemPath = document.getElementsByClassName('scFont');
var itemTab = [];
for ( var i = 0; i < itemTitle.length; i++ ) {
  itemTab[i] = itemTitle[i].innerText + itemPath[i].innerText;
}; */

// Inform the background page that
// this tab should have a page-action
chrome.runtime.sendMessage({
  from: 'content',
  subject: 'showPageAction'
});

// Gather and send DOM info ( depends on the request ) to the popup.js
chrome.runtime.onMessage.addListener(function(msg, sender, response) {
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {

    var domInfo = {
      itemid: getContentByMetaTagName('itemId').substr(1, 36),
      title: getContentByMetaTagName('title'),
      desc: getContentByMetaTagName('description'),
      key: getContentByMetaTagName('keywords'),
      /* itemtab: itemTab */
    };
    response(domInfo);
  }
  if ((msg.from === 'button')) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    if (msg.subject === 'btnArtDt') {
      link.href = chrome.extension.getURL("customCss/article_desktop.css");
    }
    if (msg.subject === 'btnArtMb') {
      link.href = chrome.extension.getURL("customCss/article_mobile.css");
    }
    if (msg.subject === 'btnFaqDt') {
      link.href = chrome.extension.getURL("customCss/faqRelatedVideos_desktop.css");
    }
    if (msg.subject === 'btnFaqMb') {
      link.href = chrome.extension.getURL("customCss/faqRelatedVideos_mobile.css");
    }
    if (msg.subject === 'btnSsDt') {
      link.href = chrome.extension.getURL("customCss/science_desktop.css");
    }
    if (msg.subject === 'btnSsMb') {
      link.href = chrome.extension.getURL("customCss/science_mobile.css");
    }
    if (msg.subject === 'btnBgDt') {
      link.href = chrome.extension.getURL("customCss/grooming_desktop.css");
    }
    if (msg.subject === 'btnBgMb') {
      link.href = chrome.extension.getURL("customCss/grooming_mobile.css");
    }
    if (msg.subject === 'btnWodDt') {
      link.href = chrome.extension.getURL("customCss/wet_or_dry_desktop.css");
    }
    if (msg.subject === 'btnWodMb') {
      link.href = chrome.extension.getURL("customCss/wet_or_dry_mobile.css");
    }
    if (msg.subject === 'btnVenusDt') {
      link.href = chrome.extension.getURL("customCss/venus_article_desktop.css");
    }
    if (msg.subject === 'btnVenusMb') {
      link.href = chrome.extension.getURL("customCss/venus_article_mobile.css");
    }
    if (msg.subject === 'btnCustomDt') {
      link.href = chrome.extension.getURL("customCss/custom_desktop.css");
    }
    if (msg.subject === 'btnCustomMb') {
      link.href = chrome.extension.getURL("customCss/custom_mobile.css");
    }
    if (msg.subject === 'btnStylerDt') {
      link.href = chrome.extension.getURL("customCss/styler_desktop.css");
    }
    if (msg.subject === 'btnStylerMb') {
      link.href = chrome.extension.getURL("customCss/styler_mobile.css");
    }
    document.getElementsByTagName("head")[0].appendChild(link);
    console.log('css from: ' + msg.subject + ' applied!');
    response(msg.subject);
  } 
});
