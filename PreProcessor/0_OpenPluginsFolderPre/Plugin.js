var TITLE = "OpenPluginsFolderPre";

var WshShell = new ActiveXObject("Wscript.Shell");

function Plugin_Cancel(engine) {
    if (engine) {
        engine.Cancel();
    }
}

function Plugin_Execute(engine) {
    try {
        var folderNamePreProcessor = "0_"+ TITLE + "\\";
        var pluginPath = engine.GetPluginRootDirectory();
        var folderPath = pluginPath.slice(0, pluginPath.length - folderNamePreProcessor.length - 1);
        var pathOpen = "\"" +folderPath.replace(/\\/g, "/")+ "\""

        WshShell.Run(pathOpen);

    } catch (e) {
        WshShell.Popup("Ошибка!", 0, TITLE);
        engine.Cancel(e);
    }
}
