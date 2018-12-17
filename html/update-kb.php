<?php
$dir = "../modules/dbConnection/connect.php";
require ('../modules/dbConnection/dbConnect.php');

$kbid = $_GET['kbid'];
$title = $_GET['kbtitle'];
$desc = $_GET['kbdesc'];
$cat = $_GET['kbcat'];


?>

<script>
 
</script>

<!DOCTYPE html>
<html>
<head>
	<title>KB Update</title>
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
			<h5>KentLogic</h5><span class="sr-only">(current)
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
      <!--for futture use-->
    </span>
  </div>
</nav>

 
<br/>

<div class="container-fluid primary h-100" >
	<div class="row justify-content-center align-items-center">
  		<div class="col-md-8 col-lg-8 col-sm-12 card-clock">
			<form method="post">
				<div class="card w3-panel w3-card-4 p-3">
					<label for="form" class="text-center font-weight-bold"></label>
					<div class="input-group mb-3">
					  <div class="input-group-append">
						<span class="input-group-text">KB Category</span>
					  </div>
						<select class="form-control" id="catSelect" name="kbCategory">
              <option><?php echo $cat; ?></option>
              <option>Mobile</option>
							<option>Web</option>
							<option>Desktop</option>
							<option>Database</option>
 						</select>
					 </div>

           <div class="form-group">
           <div class="input-group mb-3">
            <div class="input-group-append">
             <span class="input-group-text">Title</span>
            </div>
            <input type="text" value="<?php echo $title; ?>" class="form-control" name="kbTitle" id="kbtitle">
           </div>
          </div>

					<div class="form-group">
					  <label for="comment">Description/Code:</label>
					  <textarea class="form-control" name="kbDesc" id="kbdesc" rows="11" id="comment" required="" placeholder="Type the instructions here..."><?php echo $desc; ?></textarea>
					  <?php //echo  getenv("HOMEDRIVE"). getenv("HOMEPATH"); ?>
					  
					</div>
					 <div class="form-group">
					  <input type="submit" name="submit" class="btn btn-success" value="Update">
					  <!--<button id="btnResult" onclick="showResult()" class="btn btn-info" value="">Show results</button>-->
					</div>
				</div>
			</form>
		</div>
		<br/>
 		<div class="col-3 m-1 w3-card w3-card-4" id="divChart">
 			<br/>
 			<h3 class="text-center">KB Summary</h3>	
			<canvas id="myChart" width="100" height="100" ></canvas>
			<br/>
 		</div>	
  	</div> <!--end row-->
</div> <!--end container-->

<br/> 

<script>
window.onload = function() {
        let obj;
feedbackSummary();  

   var previous = null;
    var current = null;
    setInterval(function() {
 fetch('../modules/knowledgebase/kb-list.php')
  .then(res => res.json())
  .then(data => obj = data)
.then(() => console.log(obj))
             current = JSON.stringify(obj);    
             console.log("Current " + current);
             console.log("previous " + previous);        
            if (previous && current && previous !== current) {
                console.log('refresh');
                feedbackSummary();   
            }
                previous = current;
                                        
    }, 7000);   

  //showing the pie graph temporarily and ask for feedback if it's better to hide it and show on butotn click
  //document.getElementById('divChart').style.display = 'hidden';
 }

 
 function showAlert(){
var dialog = bootbox.dialog({
    message: '<p class="text-center">Awesome! Keep them coming.</p>',
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
fetch('../modules/knowledgebase/kb-list.php').then(response => {
  return response.json();
}).then(data => {
  // Work with JSON data here
    mobile = data[0].Mobile;
    web = data[0].Web;
    desktop = data[0].Desktop;
    db = data[0].DB;
    showPie(mobile, web, desktop, db)
  console.log(mobile);
  console.log(web);
  console.log(desktop);
  console.log(db);
  //console.log(data);
}).catch(err => {
  console.log("Error" + err)
  // Do something for an error here
});
}

function showPie(mobile, web, desktop, db){
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Mobile", "Web", "Desktop", "Database"],
        datasets: [{
            label: '# of Articles',
            		fontColor: '#fff',

            data: [mobile, web, desktop, db],
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
        <span class="text-muted"><code>Designed</code> and <code>Coded</code> by <code>KentLogic</code> for <code>KentLogic</code></span>
      </div>
    </footer>
 
 

<?php
date_default_timezone_set("Asia/Manila");
$date = Date('m-d-y h:i:sa');

if (isset($_GET["update"])) {
 $stmt = $conn->prepare("UPDATE knowledgebase
                        SET kbCategory = ':kbCategory', kbTitle=':kbTitle', kbDesc=':kbDesc', kbCreatedBy=':kbCreatedBy', kbCreateDate=':kbCreateDate' 
                        WHERE kbID = '$kbid'");

$kbCreatedBy = "Kent";

$stmt->bindParam(':kbCategory', $_GET['kbCategory']);
$stmt->bindParam(':kbTitle', $_GET['kbTitle']);
$stmt->bindParam(':kbDesc', $_GET['kbDesc']);
$stmt->bindParam(':kbCreatedBy', $kbCreatedBy);
$stmt->bindParam(':kbCreateDate', $date);
 
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


