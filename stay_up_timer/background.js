// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

chrome.alarms.onAlarm.addListener(function() {
  chrome.browserAction.setBadgeText({text: ''});
  chrome.tts.speak('Times up. Back to reality');
  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'clock.png',
      title:    'Hey, Times UP !!!, Back to Reality.',
      message:  'Time up , Get Up',
      buttons: [
        {title: 'Stop Repeat Alarm'}
      ],
      priority: 0});
  
});


chrome.notifications.onButtonClicked.addListener(function() {
  // chrome.storage.sync.get(['minutes'], function(item) {
  //   chrome.browserAction.setBadgeText({text: 'ON'});
  //   chrome.alarms.create({delayInMinutes: item.minutes});
  // });
  chrome.browserAction.setBadgeText({text: ''});
  chrome.alarms.clearAll();
});
