// widgets
var gitextEnabled;
var gitextPath;


// show preferences
function OnPreferencePageInitalize(prefset) {
  gitextEnabled = document.getElementById('enable_gitext');
  gitextPath = document.getElementById('git_path');
  // load stored preferences
  prefs = Components.classes['@mozilla.org/preferences-service;1']
      .getService(Components.interfaces.nsIPrefService)
      .getBranch('extensions.gitext.');
  // settings widget in preferences window
  gitextEnabled.checked = prefs.getBoolPref('enabled');
  gitextPath.value = prefs.getCharPref('git_path');
}


// save preferences
function OnPreferencePageOK(prefset) {
  prefs = Components.classes['@mozilla.org/preferences-service;1']
      .getService(Components.interfaces.nsIPrefService)
      .getBranch('extensions.gitext.');
  prefs.setBoolPref('enabled', gitextEnabled.checked);
  prefs.setCharPref('git_path', gitextPath.value);
  return true;
}
