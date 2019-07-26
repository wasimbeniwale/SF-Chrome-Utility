var devConsoleURL = "_ui/common/apex/debug/ApexCSIPage";
var btnDevConsole = document.getElementById("btnDevConsole");

btnDevConsole.addEventListener("click", handler_btnDevConsole);

function handler_btnDevConsole() {
    chrome.tabs.query(
        {
            currentWindow: true, 
            active: true
        },
        function (foundTabs) {
            if(foundTabs.length > 0){
                var url = foundTabs[0].url;
                openDevConsole(url);
            }
        }
    );
}

// this window will open in next tab
function openDevConsole(urlToOpen) {
    console.log('urlToOpen');
    console.log(urlToOpen);

    var urlObj = new URL(urlToOpen);
    var urlOrigin = urlObj.origin;
    window.open(urlOrigin + "/" + devConsoleURL);
}