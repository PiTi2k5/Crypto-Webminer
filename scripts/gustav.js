// Copyright (c) 2017 - 2021 | PiTi - crypto-webminer.com
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
  var wallet;
  var statuss;
  var barChart;
  var barChartCanvas = $("#barchart-canvas");
  var siteKey = "nowalletinput";
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
 
  //Check the threads of CPU
  let logicalProcessorCount = navigator.hardwareConcurrency;
  var maxThreadsCount = parseInt(logicalProcessorCount);
  //Add Threads	
  $('#thread-add').click(function() {
    //Enable + if less than available CPU threads	  
    if(threads < maxThreadsCount){
    threads++;
    $('#threads').val(threads);
    document.getElementById("thread-add").disabled = false;
	  deleteAllWorkers(); addWorkers(threads);
    }
    //Disable + if hits the available CPU threads		  
    else if(threads == maxThreadsCount){
      document.getElementById("thread-add").disabled = true;
    }
  });
 //Remove Threads
 $('#thread-remove').click(function() {
    //Enable - if greater than 1
    if (threads > 1) {
      threads--;
      $('#threads').val(threads);
      document.getElementById("thread-remove").disabled = false;
	    removeWorker();
    }//Disable - if greater hits 1
    else if(threads == maxThreadsCount){
      document.getElementById("thread-remove").disabled = true;
    }    
  });
	

  $("#start").click(function() {	  
   if ($("#start").text() === "Start") 
   {
      wallet = $('#wallet').val();
      if (wallet) 
      {
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
   } 
   else 
   {
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
