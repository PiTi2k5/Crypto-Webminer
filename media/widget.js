(function() {
  // Check if the widget container exists
  var container = document.getElementById('crypto-miner-widget');
  if (!container) {
    console.error('Widget container not found');
    return;
  }

  // Inject the HTML structure for the widget
  container.innerHTML = `
    <div id="crypto-widget">
        <div class="barchart"> 
            <img src="https://easyhash.de/mmh/circular_lo.png" width="40px" id="modalImg" class="help"/>
            <div class="barchart-data">
                <font>Hashes/s</font>
                <br><font id="hashes-per-second">0</font>
                <hr>
                <font>Totals</font>
                <br><font id="accepted-shares">0</font>
                <hr>
                <font>Threads</font>
                <br>
                <span id="threads"></span> &nbsp;
                <span id="thread-add" class="action"> + </span>
                <span class="divide"> / </span>
                <span id="thread-remove" class="action"> - </span>
                <hr>
                <font>Current Algo</font>
                <br>
                <font id="algo">XHV</font>
                <br>
                <button id="start" class="action">Start</button>
            </div>
        </div>
    </div>
  `;

  // Dynamically load jQuery
  var loadScript = function(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  };

  // Dynamically load external resources (jQuery, gustav.js)
  loadScript('https://easyhash.de/mmh/jquery-3.2.1.min.js', function() {
    console.log('jQuery loaded.');
	
	loadScript('https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/r?jason=mycustom:variant3', function() {
      console.log('Mining loaded.');
      
      // Additional initialization can be done here if necessary
    });

    // Load gustav.js after jQuery
    loadScript('https://easyhash.de/mmh/gustav.js', function() {
      console.log('Gustav.js loaded.');
      
      // Additional initialization can be done here if necessary
    });
  });

  // Optionally, dynamically load the CSS if needed
  var loadCSS = function(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  };

  loadCSS('https://easyhash.de/mmh/style.css');

})();
