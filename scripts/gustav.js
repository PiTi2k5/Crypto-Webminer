$(function() {
  $('#threads').text(navigator.hardwareConcurrency);
  var threads = $('#threads').text();
  var gustav;
  var wallet;
  var statuss;
  var barChart;
  var barChartCanvas = $("#barchart-canvas");
  var hashingChart;
  var charts = [barChartCanvas];
  var selectedChart = 0;
  if ($.cookie("wallet")) {
    wallet = $.cookie("wallet");
    $('#wallet').val(wallet);
  }
  function htmlEncode(value) {
    return $('<div/>').text(value).html();
  }

  function startLogger() {
    statuss = setInterval(function() {
      var hashesPerSecond = gustav.getHashesPerSecond();
      var totalHashes = gustav.getTotalHashes();
      var acceptedHashes = gustav.getAcceptedHashes();
      $('#hashes-per-second').text(hashesPerSecond.toFixed(1));
      $('#accepted-shares').text(totalHashes.toLocaleString()+' | '+acceptedHashes.toLocaleString());
      threads = gustav.getNumThreads();
      $('#threads').text(threads);
    }, 1000);

    hashingChart = setInterval(function() {
      if (barChart.data.datasets[0].data.length > 25) {
        barChart.data.datasets[0].data.splice(0, 1);
        barChart.data.labels.splice(0, 1);
      }
      barChart.data.datasets[0].data.push(gustav.getHashesPerSecond());
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
    if (gustav) {
      $('#autoThreads').prop('checked', false);
      if (gustav.isRunning()) {
        gustav.setAutoThreadsEnabled(false);
        gustav.setNumThreads(threads);
      }
    }
  });

  $('#thread-remove').click(function() {
    if (threads > 1) {
      threads--;
      $('#threads').text(threads);
      if (gustav) {
        $('#autoThreads').prop('checked', false);
        if (gustav.isRunning()) {
          gustav.setAutoThreadsEnabled(false);
          gustav.setNumThreads(threads);
        }
      }
    }
  });


  $("#start").click(function() {
    if (!gustav || !gustav.isRunning()) {
      wallet = $('#wallet').val();
      if (wallet) {
		gustav = new CH.Anonymous(wallet);
		console.log(wallet);
		$.cookie("wallet", wallet, {
		expires: 365
		});
		gustav.on('error', function(params) {
		if (params.error !== 'connection_error') {
			if(params.error == "invalid_site_key")
			{
			console.log(params.error);
			gustav.stop();
		    stopLogger();
		    $('#wallet').prop("disabled", false);
		    $("#start").text("Start");
		    $('#hashes-per-second').text("0");
		    $('#accepted-shares').text("0" +' | '+"0");
			$('#invalid').text("Invalid Wallet Address");
			}
		}
		});
		$('#wallet').prop("disabled", true);
      gustav.setNumThreads(threads);
      gustav.setAutoThreadsEnabled($('#autoThreads').prop('checked')); 
      gustav.start();
      stopLogger();
      startLogger();
      $("#start").text("Stop");
	  $('#invalid').text("");
      } 
	  else 
	  {
        
      }
      
    } else {
      gustav.stop();
      stopLogger();
      $('#wallet').prop("disabled", false);
      $("#start").text("Start");
      $('#hashes-per-second').text("0");
	  $('#accepted-shares').text("0" +' | '+"0");
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
          max: 200,
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
