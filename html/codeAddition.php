<?php
$dir = "../modules/dbConnection/connect.php";
require ('../modules/dbConnection/dbConnect.php');
 
?>

<!DOCTYPE html>
<html>
<head>
	<title>Feedback</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="../images/lara_rounded.png"/>
	<link rel="stylesheet" href="../bootstrap/css/bootstrap.css"/>
	<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
	<link rel="stylesheet" href="../bootstrap/css/w3.css"/>
	<link rel="stylesheet" href="../bootstrap/css/footer.css"/>
	<script src="../bootstrap/js/w3.js"></script>
	<script src="../bootstrap/js/jquery-3.2.1.slim.min.js"></script>
	<script src="../bootstrap/js/popper.min.js"></script>
	<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="../bootstrap/js/Chart.bundle.js"></script>
	<script src="../bootstrap/js/Chart.bundle.min.js"></script>
	<script src="../bootstrap/js/bootbox.min.js"></script>

 
 
</head>
	
<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">
  	<img src="../images/lara_rounded.png" width="50" height="50"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">
			<h5>Learning and Achievement Records App</h5><span class="sr-only">(current)
			</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> </a>
      </li>
    </ul>
    <span class="navbar-text">
      L.A.R.A. version 1.0
    </span>
  </div>
</nav>

 
<br/>

<div class="container-fluid primary h-100" >
	<div class="row justify-content-center align-items-center">
  		<div class="col-md-8 col-lg-8 col-sm-12 card-clock">
			<form method="post">
				<div class="card w3-panel w3-card-4 p-3">
					<label for="form" class="text-center font-weight-bold">Feedback Form</label>
					<div class="input-group mb-3">
					  <div class="input-group-append">
						<span class="input-group-text">Feedback type</span>
					  </div>
						<select class="form-control" name="fCategory">
							<option>Feature Request</option>
							<option>Layout bug/glitch - Home</option>
							<option>Layout bug/glitch - Profile</option>
							<option>Layout bug/glitch - Training</option>
							<option>Layout bug/glitch - F.A.M.E.</option>
							<option>Layout bug/glitch - About</option>
							<option>App Functionality (buttons, links, pages)</option>
						</select>
					 </div>
					<div class="form-group">
					  <label for="comment">Comment:</label>
					  <textarea class="form-control" name="fDesc" rows="5" id="comment" required="" placeholder="Type your comment here..."></textarea>
					  <?php //echo  getenv("HOMEDRIVE"). getenv("HOMEPATH"); ?>
					  
					</div>
					 <div class="form-group">
					  <input type="submit" name="submit" class="btn btn-success" value="Submit">
					  <!--<button id="btnResult" onclick="showResult()" class="btn btn-info" value="">Show results</button>-->
					</div>
				</div>
			</form>
		</div>
		<br/>
 		<div class="col-3 m-1 w3-card w3-card-4" id="divChart">
 			<br/>
 			<h3 class="text-center">Feedback Summary</h3>	
			<canvas id="myChart" width="100" height="100" ></canvas>
			<br/>
 		</div>	
  	</div> <!--end row-->
</div> <!--end container-->

<br/> 

<script>
window.onload = function() {
	feedbackSummary();
  //showing the pie graph temporarily and ask for feedback if it's better to hide it and show on butotn click
  //document.getElementById('divChart').style.display = 'hidden';
 };

 
function showAlert(){
var dialog = bootbox.dialog({
    message: '<p class="text-center">Thanks for your feedback!</p>',
    closeButton: true
});
// do something in the background
dialog.modal('hide');
feedbackSummary();
 }
 
/**
function showResult() {
    var x = document.getElementById("divChart");
    var y = document.getElementById("btnResult");
    if (x.style.display === "none") {
    	y.innerHTML = "Hide results"
        x.style.display = "block";
    } else {
    	y.innerHTML = "Show results"
        x.style.display = "none";
    }
}
*/

function feedbackSummary(){
  let feature;
  let bug;
  let functionality;
// Replace ./data.json with your JSON feed
fetch('../modules/feedback/feedback_api.php').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
    feature = data[0].FeatureRequest;
    bug = data[0].Bug;
    functionality = data[0].Functionality;
    showPie(feature, bug, functionality)
  console.log(feature);
  console.log(bug);
  console.log(functionality);
  //console.log(data);
}).catch(err => {
  // Do something for an error here
});
}

function showPie(feature, bug, functionality){
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Feature Request", "Bug/Glitch", "App Functionality"],
        datasets: [{
            label: '# of Feedbacks',
            		fontColor: '#fff',

            data: [feature, bug, functionality],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
}
</script>


<footer class="footer">
      <div class="container">
        <span class="text-muted">Feedback Form 1.0</span>
      </div>
    </footer>
 
 

<?php
date_default_timezone_set("Asia/Manila");
$date = Date('m-d-y h:i:sa');
if (isset($_POST["submit"])) {


$stmt = $conn->prepare("INSERT INTO feedback_tbl (feedbackCategory, feedbackDate, feedbackDesc)
					   VALUES (:feedbackCategory, :feedbackDate, :feedbackDesc)");
$stmt->bindParam(':feedbackCategory', $_POST['fCategory']);
$stmt->bindParam(':feedbackDate', $date);
$stmt->bindParam(':feedbackDesc',  $_POST['fDesc']);

try{
$stmt->execute(); 
    echo '<script language="javascript">';
 	echo 'showAlert();';
 	echo '</script>';
}
catch(PDOException $e)
    {
    	echo '<script language="javascript">';
	echo 'alert("Zan nendesu... \n")';
	echo  'console.log('.$e->getMessage().');';
	echo '</script>';
    }

}
$conn = null;
?>

</body>
</html>


