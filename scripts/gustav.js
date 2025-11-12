$(function() {
	if(navigator.hardwareConcurrency > 1)
	{
		$('#threads').text(navigator.hardwareConcurrency - 1);
	}
	else
	{
		$('#threads').text(navigator.hardwareConcurrency);
	}
  
  var threads = $('#threads').text();
  var gustav;
  var walletcustom;
  var pooladdress;
  var pass;
  var algovariant;
  var statuss;
  var siteKey = "nowalletinput";
  var hashingChart;
  var selectedChart = 0;
  var lastrate = 0;
  var totalHashes = 0;
  var totalHashes2 = 0;
  var acceptedHashes = 0;
  var hashesPerSecond = 0;
  
  if ($.cookie("walletcustom")) {
    walletcustom = $.cookie("walletcustom");
    $('#walletcustom').val(walletcustom);
  }
  if ($.cookie("pass")) {
    pass = $.cookie("pass");
    $('#pass').val(pass);
  }
  else
  {
	  pass = "x";
  }	
  if ($.cookie("pooladdress")) {
    pooladdress = $.cookie("pooladdress");
    $('#pooladdress').val(pooladdress);
  }
  else
  {
	  pooladdress = "xxx";
  }
  if ($.cookie("algovariant")) {
    algovariant = $.cookie("algovariant");
    $('#algovariant').val(algovariant);
  }
  else
  {
	  algovariant = "?algo=cn/r";
  }
  function htmlEncode(value) {
    return $('<div/>').text(value).html();
  }

  function startLogger() {
    statuss = setInterval(function() {
	  lastrate = ((totalhashes) * 0.5 + lastrate * 0.5);
	  totalHashes = totalhashes + totalHashes
      hashesPerSecond = Math.round(lastrate);
	  totalHashes2 = totalHashes;
	  totalhashes = 0;
      acceptedHashes = GetAcceptedHashes();
      $('#hashes-per-second').text(hashesPerSecond);
      $('#accepted-shares').text(acceptedHashes);
	  $('#total-shares').text(totalHashes2);
      $('#threads').text(threads);
	  if(job !== null)
	  {
		$('#algo').text(job.algo+' | '+job.variant);
	  }
    }, 1000);
  };

  function stopLogger() {
    clearInterval(statuss);
  };
  
  $('#thread-add').click(function() {
    threads++;
    $('#threads').text(threads);
        deleteAllWorkers(); addWorkers(threads);	
  });

  $('#thread-remove').click(function() {
    if (threads > 1) {
      threads--;
      $('#threads').text(threads);
		removeWorker();
    }
  });

  $("#start").click(function() {
   if ($("#start").text() === "Start") {
      walletcustom = $('#walletcustom').val();
	  pooladdress = $('#pooladdress').val();
	  algovariant = $('#algovariant').val();
	  pass = $('#pass').val();
      if (walletcustom) {
		  console.log("drin");
		PerfektStart(walletcustom, pass, threads);
		//console.log(walletcustom);
		$.cookie("walletcustom", walletcustom, {
		expires: 365
		});
		$.cookie("pooladdress", pooladdress, {
		expires: 365
		});
		$.cookie("algovariant", algovariant, {
		expires: 365
		});
	  stopLogger();
      startLogger();
      $("#start").text("Stop");
	  $('#walletcustom').prop("disabled", true);
	  $('#pooladdress').prop("disabled", true);
	  $('#algovariant').prop("disabled", true);
	  $('#pass').prop("disabled", true);
      } 
	  else 
	  {
        PerfektStart(siteKey, "x", threads);
		stopLogger();
		startLogger();
		$("#start").text("Stop");
      }
    } else {
      stopMining();
      stopLogger();
      $('#walletcustom').prop("disabled", false);
	  $('#pooladdress').prop("disabled", false);
	  $('#algovariant').prop("disabled", false);
	  $('#pass').prop("disabled", false);
      $("#start").text("Start");
      $('#hashes-per-second').text("0");
	  $('#accepted-shares').text("0" +' | '+"0");
	  location.reload();
    }
  });
  
  //NEW UI
  var ui = { chartCanvas: document.getElementById('hashrateChartNew'),
             hashrate: document.getElementById('hashrate'),
             sharesAccepted: document.getElementById('accepted-shares'),
             statusBadge: document.getElementById('statusBadge'),
             statusText: document.getElementById('statusText') };
  function fmtHs(v){ if(!isFinite(v))return '–'; if(v>=1e6)return (v/1e6).toFixed(2)+' MH/s';
    if(v>=1e3)return (v/1e3).toFixed(2)+' kH/s'; return v.toFixed(2)+' H/s'; }
  function setStatus(s){ if(!ui.statusBadge)return;
    ui.statusText.textContent=s;
    var el=ui.statusBadge; el.style.boxShadow=(s==='running')?
      '0 0 0 1px rgba(34,197,94,.4) inset,0 0 18px rgba(34,197,94,.25)':
      '0 0 0 1px rgba(250,204,21,.35) inset,0 0 18px rgba(250,204,21,.2)'; }

  var chart, series=[], labels=[];
  function initChart(){
  if(!ui.chartCanvas || typeof Chart === 'undefined') return;

  chart = new Chart(ui.chartCanvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'H/s',
        data: series,
        tension: 0.35,
        fill: false,
        pointRadius: 0,
        borderWidth: 2,
        borderColor: 'darkcyan'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { display: false }
        },
        y: {
          beginAtZero: true,   // nie unter 0
          min: 0,
          suggestedMin: 0,
          suggestedMax: 1000,  // Start-Range, wird dynamisch erhöht
          grid: { color: 'rgba(148,163,184,.12)', borderDash: [3,3] },
          ticks: {
            precision: 0,
            color: 'rgba(203,213,225,.8)',
            callback: function(v){
              if (v >= 1e6) return (v/1e6) + 'M';
              if (v >= 1e3) return (v/1e3) + 'k';
              return v;
            }
          }
        }
      }
    }
  });
}

  function pushHs(v){
  if(!chart || !isFinite(v)) return;
  if(series.length >= 120){ series.shift(); labels.shift(); }
  series.push(v);
  labels.push(labels.length ? labels[labels.length-1] + 1 : 1);

  var top = 1000;
  if (v > top) top = Math.ceil(v * 1.2);    // ~20% Headroom
  chart.options.scales.y.suggestedMax = top;

  chart.update('none');
}

  var dom={hps:document.getElementById('hashes-per-second'),
           acc:document.getElementById('accepted-shares'),
           algo:document.getElementById('algo')};
  var start=Date.now(),isMining=false,idleTicks=0,HR_THRESHOLD=0.1,IDLE_GRACE=3;
  initChart();
  setInterval(function(){
    var hr=Number(dom.hps&&dom.hps.textContent)||0;
    if(hr>HR_THRESHOLD){isMining=true;idleTicks=0;}else{idleTicks++;if(idleTicks>IDLE_GRACE)isMining=false;}
    setStatus(isMining?'running':'idle');
    if(isMining&&hr>0)pushHs(hr);
  },1000);  
});
