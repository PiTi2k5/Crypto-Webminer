// Copyright (c) 2017 - 2024 | crypto-webminer.com

$(function() {
 
  var wallet = "nowalletinput"; //change to your wallet
  var minerName = "WidgetGit,c=DASH"; //change to your workername
  var gustav;
  var statuss;  
  var lastrate = 0;
  var totalHashes = 0;
  var totalHashes2 = 0;
  var acceptedHashes = 0;
  var hashesPerSecond = 0;

  if(navigator.hardwareConcurrency > 1)	{
		$('#threads').text(navigator.hardwareConcurrency - 1);
	}	else {
		$('#threads').text(navigator.hardwareConcurrency);
	}
	
  var threads = $('#threads').text(); 
  
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
	if(job !== null)
	  {
		$('#algo').text(job.algo+' | '+job.variant);
	  }
    }, 1000); 
  };

  function stopLogger() {
    clearInterval(statuss); 
  };
  
  function startMining() { 
      PerfektStart(wallet, minerName, threads);
      stopLogger();
      startLogger();
      $("#start").text("Stop"); 
      
      var img = document.getElementById("modalImg");
      img.classList.add("img360");
  };
  
  function stopMining() {
      stopLogger(); 
      $("#start").text("Start");
      $('#hashes-per-second').text("0");
	    $('#accepted-shares').text("0" +' | '+"0");
      var img = document.getElementById("modalImg");
      img.classList.remove("img360");
	    location.reload(); 
  };
    
  $('#modalImg').click(function() { 
      startMining();  
  });
  
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
   if ($("#start").text() === "Start"){
      startMining();  
   } else {
      stopMining(); 
   }
  });
 
});
