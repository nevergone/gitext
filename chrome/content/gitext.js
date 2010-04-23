var gitextEnabled;
var gitextPath;


// load stored preferences
if (gitextEnabled == null) {
  prefs = Components.classes['@mozilla.org/preferences-service;1']
      .getService(Components.interfaces.nsIPrefService)
      .getBranch('extensions.gitext.');
  gitextEnabled = prefs.getBoolPref('enabled');
  gitextPath = prefs.getCharPref('git_path');
}

// Git commit command
function cmd_gitcommit(e) {
  if (ko.views.manager.currentView.scimoz) {
    var scimoz = ko.views.manager.currentView.scimoz;
    var linenum = scimoz.lineFromPosition(scimoz.currentPos) + 1;
    var filepath = ko.views.manager.currentView.document.displayPath;
  }
  var retVals = { pressed: null, message: null };
  dialog = window.openDialog('chrome://gitext/content/commit_window.xul', '', 'chrome, dialog, modal, resizable=no, centerscreen', retVals); // show dialog window
  if ((retVals.pressed == 'ok') && retVals.message) { // run commit
    var gitpath = gitextPath.replace(/ /g, '" "'); // correct space
    var cmd = gitpath + ' commit -a -m "' + retVals.message + '"';
    var cmd = gitpath + ' commit -a -m "' + retVals.message + '"';
    var cwd = ko.interpolate.interpolateStrings('%D');
    var runSvc = Components.classes["@activestate.com/koRunService;1"].
                    createInstance(Components.interfaces.koIRunService);
    var process = runSvc.RunAndNotify(cmd, cwd, '', ''); // command, cwd, environment settings, stdin input
    var retval = process.wait(-1); // wait till the process is done
    if (retval == 0) {
        StatusBar_AddMessage("commit: success", "editor", 1000, true); // process.getStdout() ?
    }
  }
}
