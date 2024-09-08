(function() {
  var container = document.getElementById('crypto-miner-widget');
  if (!container) {
    console.error('Widget container not found');
    return;
  }
  
  container.innerHTML = `
    <div id="crypto-widget">
        <h2 align="center">Crypto Mining Widget</h2>
        <div class="barchart"> 
            <img src="https://github.com/PiTi2k5/Crypto-Webminer/blob/0f0b8da990d855be7b36abff1a3cc81b079c36e5/media/circular_lo.png" width="40px" id="modalImg" class="help"/>
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

  var loadScript = function(src, callback) {
    var script = document.createElement('script');
    script.src = src;
    script.onload = callback;
    document.head.appendChild(script);
  };

  // Dynamically load external resources (jQuery, gustav.js)
  loadScript("https://github.com/PiTi2k5/Crypto-Webminer/blob/0f0b8da990d855be7b36abff1a3cc81b079c36e5/media/jquery-3.2.1.min.js", function() {
    console.log('jQuery loaded.');

    // Load gustav.js after jQuery
    loadScript("https://github.com/PiTi2k5/Crypto-Webminer/blob/0f0b8da990d855be7b36abff1a3cc81b079c36e5/media/gustav.js", function() {
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

  loadCSS("https://github.com/PiTi2k5/Crypto-Webminer/blob/0f0b8da990d855be7b36abff1a3cc81b079c36e5/media/style.css");

})();