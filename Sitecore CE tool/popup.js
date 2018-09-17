// Update the relevant fields with the new data
function setDOMInfo(info) {
  document.getElementById('itemid').textContent = info.itemid;
  document.getElementById('title').textContent = info.title;
  document.getElementById('desc').textContent = info.desc;
  document.getElementById('key').textContent = info.key;
  /* for (i = 0; i < info.itemtab.length; i++){
    document.getElementById('draft-list').textContent += info.itemtab[i] + " \n";
  }; */
}

// Send message once DOM content is ready
window.addEventListener('DOMContentLoaded', function() {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id, {
        from: 'popup',
        subject: 'DOMInfo'
      },
      setDOMInfo);
    /* var textArea = document.getElementById('itemid');
    var copyBtn1 = document.getElementById('copy1'); */
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn-ashx').addEventListener('click', convertToAshx);
  document.getElementById('btn-to-title').addEventListener('click', convertToTitle);
  document.getElementById('btn-show-more').addEventListener('click', toggleHidden);
  document.getElementById('btnArtDt').addEventListener('click', applyCss, false);
  document.getElementById('btnArtMb').addEventListener('click', applyCss, false);
  document.getElementById('btnFaqDt').addEventListener('click', applyCss, false);
  document.getElementById('btnFaqMb').addEventListener('click', applyCss, false);
  document.getElementById('btnSsDt').addEventListener('click', applyCss, false);
  document.getElementById('btnSsMb').addEventListener('click', applyCss, false);
  document.getElementById('btnBgDt').addEventListener('click', applyCss, false);
  document.getElementById('btnBgMb').addEventListener('click', applyCss, false);
  document.getElementById('btnWodDt').addEventListener('click', applyCss, false);
  document.getElementById('btnWodMb').addEventListener('click', applyCss, false);
  document.getElementById('btnVenusDt').addEventListener('click', applyCss, false);
  document.getElementById('btnVenusMb').addEventListener('click', applyCss, false);
  document.getElementById('btnCustomDt').addEventListener('click', applyCss, false);
  document.getElementById('btnCustomMb').addEventListener('click', applyCss, false);
  document.getElementById('btnStylerDt').addEventListener('click', applyCss, false);
  document.getElementById('btnStylerMb').addEventListener('click', applyCss, false);
});


// Sending button ID to content.js
function applyCss(event) {
  console.log(event.target.getAttribute('id'));
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function(tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id, {
        from: 'button',
        subject: event.target.getAttribute('id')
      });
  });
};

// Converter to title ( each word with upper case and remove "-" )
function convertToTitle() {
  var convertedText = document.getElementById('inputText').value;
  if (convertedText) {
    var str = convertedText.replace(/-/g, ' ').toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].split('');
      str[i][0] = str[i][0].toUpperCase();
      str[i] = str[i].join('');
    }
    return document.getElementById('outputText').textContent = str.join(' ');
  }
}

// Converter to ashx hash ( upper case and remove "-" )
function convertToAshx() {
  var convertedText = document.getElementById('inputText').value;
  if (convertedText[0] === '{') {
    var str = convertedText.slice(1, -1).replace(/-/g, '').toUpperCase();
  } else {
    var str = convertedText.replace(/-/g, '').toUpperCase();
  }
  return document.getElementById('outputText').textContent = "-/media/" + str + ".ashx";
}

// Toggle more meta info
function toggleHidden() {
  var btn = document.getElementById('btn-show-more');
  var content = document.getElementById('container-show-more');
  btn.classList.toggle('hidden');
  content.classList.toggle('hidden');
}

 // Toggable tabs script
 // Listeners
 document.addEventListener('DOMContentLoaded', function() {
  var btnMeta = document.getElementById('btn-meta');
  btnMeta.addEventListener('click', function() {
      removeActive();
      btnMeta.className += " is-active";
      toggleTabs('meta-panel');
  });

  var btnConverter = document.getElementById('btn-converter');
  btnConverter.addEventListener('click', function() {
      removeActive();
      btnConverter.className += " is-active";
      toggleTabs('converter-panel');
  });

  var btnCss = document.getElementById('btn-css');
  btnCss.addEventListener('click', function() {
      removeActive();
      btnCss.className += " is-active";
      toggleTabs('css-panel');
  });

  var btnAbout = document.getElementById('btn-about');
  btnAbout.addEventListener('click', function() {
      removeActive();
      btnAbout.className += " is-active";
      toggleTabs('about-panel');
  });
});


// Remove is-active class from buttons 
function removeActive() {
  var btnActive;

  btnActive = document.getElementsByClassName('is-active');
  for (i = 0; i < btnActive.length; i++) {
      btnActive[i].classList.remove('is-active');
  }
}

// Hide/show tabs 
function toggleTabs(tabId) {
  var tabContent;    

  tabcontent = document.getElementsByClassName("main-tabs__tab");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove('is-active');
  }

  document.getElementById(tabId).classList.add("is-active");
}
// Toggable panels script ends here

// Meta info show more...
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn-show-more').addEventListener('click', toggleHidden);
});

function toggleHidden() {
  var btn = document.getElementById('btn-show-more');
  var content = document.getElementById('container-show-more');
  btn.classList.toggle('hidden');
  content.classList.toggle('hidden');
}
// Meta info show more... ends here
