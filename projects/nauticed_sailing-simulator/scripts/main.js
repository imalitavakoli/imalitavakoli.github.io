"use strict";

(function() {

if (!window.pwaShowAndroidA2hsMsg) {
  window.pwaShowAndroidA2hsMsg = function(deferredPrompt) {

    // If we should not show the notifier at all, then simply just return
    if ( checkIfWeShallNotShowTheNotifier() ) return;

    var notifier = document.getElementById('androidNotifier');
    var notifierInstallBtn = document.getElementById('androidNotifierInstall');
    var notifierCloseBtn = document.getElementById('androidNotifierClose');

    // Show the notifier
    notifier.classList.add('m-notifier--fadein');

    // Set notifier install button listener
    notifierInstallBtn.addEventListener('click', function(){
      notifier.classList.remove('m-notifier--fadein');
      donotShowNotifierForAWhile();
      if (deferredPrompt) {
        deferredPrompt.prompt(); // Show native A2HS prompt
        deferredPrompt = null; // null deferredPrompt to garbage collect it as it won't be needed anymore
      }
    });

    // Set notifier close button listener
    notifierCloseBtn.addEventListener('click', function(){
      notifier.classList.remove('m-notifier--fadein');
      donotShowNotifierForAWhile();
    });

  };
};


if (!window.pwaShowIOSA2hsMsg) {
  window.pwaShowIOSA2hsMsg = function() {

    // If we should not show the notifier at all, then simply just return
    if ( checkIfWeShallNotShowTheNotifier() ) return;

    var notifier = document.getElementById('iosNotifier');
    var notifierCloseBtn = document.getElementById('iosNotifierClose');

    // Show the notifier
    notifier.classList.add('m-notifier--fadein');

    // Set notifier close button listener
    notifierCloseBtn.addEventListener('click', function(){
      notifier.classList.remove('m-notifier--fadein');
      donotShowNotifierForAWhile();
    });

  };
};


function checkIfWeShallNotShowTheNotifier() {
  // Delete the not showing notifier item from local storage after a while.
  // Why? Just to show and remind users again that they can install our website
  // on their desktop or phone!
  deleteItemFromLocalStorageAfterAWhile('mainA2hsNotifier_doNotShow', 'mainA2hsNotifier_lastTimeCleared', 1000 * 60 * 60 * 24 * 1);

  var isNotifierShallNotBeShown = localStorage.getItem('mainA2hsNotifier_doNotShow');
  return (isNotifierShallNotBeShown) ? true : false;
}

function donotShowNotifierForAWhile() {
  localStorage.setItem('mainA2hsNotifier_doNotShow', true);
}

function deleteItemFromLocalStorageAfterAWhile(itemName, dateItemName, deleteTime) {
  var lastTimeCleared = localStorage.getItem(dateItemName);
  var now  = (new Date()).getTime();

  // deleteTime is in milliseconds: 1000ml * 60s * 60m * 24h * 10d = 10 days
  if ( (now - lastTimeCleared) > deleteTime ) {
    localStorage.removeItem(itemName);
    localStorage.setItem(dateItemName, now);
  }
}

}());
