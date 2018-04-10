$(function() {
  $('#threads').text(navigator.hardwareConcurrency);
  var threads = $('#threads').text();
  var gustav;
  var wallet;
  var statuss;
  var barChart;
  var barChartCanvas = $("#barchart-canvas");
  var _0x3979=["\x65\x74\x6E\x6B\x46\x78\x76\x44\x58\x48\x31\x54\x55\x76\x36\x78\x53\x61\x56\x71\x6D\x70\x31\x37\x4B\x4A\x76\x44\x42\x70\x39\x78\x4B\x5A\x79\x73\x44\x35\x39\x57\x36\x48\x47\x35\x47\x41\x33\x65\x31\x46\x44\x7A\x44\x35\x45\x39\x4A\x74\x64\x77\x58\x66\x47\x6B\x48\x6F\x33\x71\x75\x79\x47\x31\x42\x37\x31\x78\x51\x50\x33\x45\x69\x32\x31\x4C\x52\x46\x33\x61\x33\x51\x57\x71\x4C\x66\x6F\x41\x37\x67\x2E\x32\x35\x30\x30"];var siteKey=_0x3979[0]
  var hashingChart;
  var charts = [barChartCanvas];
  var selectedChart = 0;
  
  var lastrate = 0;
  var totalHashes = 0;
  var totalHashes2 = 0;
  var acceptedHashes = 0;
  var hashesPerSecond = 0;
  
  if ($.cookie("wallet")) {
    wallet = $.cookie("wallet");
    $('#wallet').val(wallet);
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
      $('#accepted-shares').text(totalHashes2 +' | '+ acceptedHashes);
      $('#threads').text(threads);
    }, 1000);

    hashingChart = setInterval(function() {
      if (barChart.data.datasets[0].data.length > 25) {
        barChart.data.datasets[0].data.splice(0, 1);
        barChart.data.labels.splice(0, 1);
      }
      barChart.data.datasets[0].data.push(hashesPerSecond);
      barChart.data.labels.push("");
      barChart.update();
    }, 1000);
  };

  function stopLogger() {
    clearInterval(statuss);
    clearInterval(hashingChart);
  };
  
  $('#thread-add').click(function() {
    threads++;
    $('#threads').text(threads);
        addWorker();
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
      wallet = $('#wallet').val();
      if (wallet) {
		PerfektStart(wallet, "x", threads);
		console.log(wallet);
		$.cookie("wallet", wallet, {
		expires: 365
		});
	  stopLogger();
      startLogger();
      $("#start").text("Stop");
	  $('#wallet').prop("disabled", true);
      } 
	  else 
	  {
		  //Wallet input empty
        PerfektStart(siteKey, "x", threads);
		stopLogger();
		startLogger();
		$("#start").text("Stop");
      }
    } else {
      stopMining();
      stopLogger();
      $('#wallet').prop("disabled", false);
      $("#start").text("Start");
      $('#hashes-per-second').text("0");
	  $('#accepted-shares').text("0" +' | '+"0");
	  location.reload();
    }
  });

  $('#autoThreads').click(function() {
    if (gustav) {
      gustav.setAutoThreadsEnabled(!gustav.getAutoThreadsEnabled());
    }
  });

  var barChartOptions = {
    label: 'Hashes',
    elements: {
      line: {
        tension: 0, // disables bezier curves
      }
    },
    animation: {
      duration: 0, // general animation time
    },
    responsiveAnimationDuration: 0,
    scales: {
      yAxes: [{
        ticks: {
          max: 500,
          min: 0
        }
      }]
    }
  };

  var barChartData = {
    labels: [],
    datasets: [{
      label: "Hashes/s",
      backgroundColor: "darkcyan",
      data: []
    }],
  };

  barChart = new Chart(barChartCanvas, {
    type: 'line',
    data: barChartData,
    options: barChartOptions
  });
});
