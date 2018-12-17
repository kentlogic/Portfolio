<?php
$dir = "../modules/dbConnection/connect.php";
require ('../modules/dbConnection/dbConnect.php');

?>

<!DOCTYPE html>
<html>
<head>
	<title>Manage Links</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="../images/lara_rounded.png"/>
  	<link rel="stylesheet" href="../bootstrap/css/bootstrap.css"/>
  	<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css"/>
  	<link rel="stylesheet" href="../bootstrap/css/w3.css"/>
  	<link rel="stylesheet" href="../bootstrap/css/footer.css"/>
    <link rel="stylesheet" href="../bootstrap/css/kl.css"/>
  	<script src="../bootstrap/js/w3.js"></script>
  	<script src="../bootstrap/js/jquery-3.2.1.slim.min.js"></script>
  	<script src="../bootstrap/js/popper.min.js"></script>
  	<script src="../bootstrap/js/bootstrap.min.js"></script>
		<script src="../bootstrap/js/Chart.bundle.js"></script>
  	<script src="../bootstrap/js/Chart.bundle.min.js"></script>
    <script src="../bootstrap/js/bootbox.min.js"></script>
    <script src="../bootstrap/js/kl.js"></script>

<!-- #region datatables files -->
<link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css" />
<script src="//cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
 
 

</head>
	
<body>

<nav class="w3-card navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
  <a class="navbar-brand" href="#"> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
 
      <li class="nav-item">
        <a class="nav-link" href="manage-kb.php">Knowledgebase</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="manage-process.php">Process</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="manage-links.php">Links</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tm-tools.html">Tools</a>
      </li>
 
       <li class="nav-item">
             <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal">Add a new Link</button>

      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
 <div class="input-group">
        <input type="text" autofocus="" id="searchbox" onKeyUp="searchLink()" class="form-control" placeholder="Search for anything...">
        <div class="input-group-append">
        <button class="btn btn-success" type="button">
        <img src="../images/icons/octicons-white/search-white.png" width="15" />
        </button>
        </div>
      </div>
    </form>

  </div>
</nav>



<div class="container-fluid primary h-100" >
  <div class="row justify-content-center align-items-center">
  	<div class="col-md-10 col-6 mx-auto col-sm-12 card-clock">
		<br/>

      <div id="message" class="col-3 w3-card mx-auto p-1">
        <h3 class="display-5 code" align="center">
          <img src='../images/icons/facepalm.svg' height="50" height="50" />
          Nothing to load.</h3>
      </div>

	  <div class="table-responsive">	
		<table align="center" class="table table-bordered" id="table" style="overflow: auto;">
			<thead>
        <th scope="col">Url</th>
        <th scope="col">Category</th>
				<th scope="col">Desc</th>
				<!--<th scope="col">Content</th>-->
			</thead>
			<tr >
        <td id="tdUrl"></td>
        <td id="tdCat"></td>
				<td class="table table-striped" id="tdDesc"></td>
				<!--<td id="tdContent"></td>-->
			</tr>
		</table>

		</div>
		<br/>

	  </div>
  </div> <!--end row-->
</div> <!--end container-->

<br/> 

<script>
$( document ).ready(function() {
var xmlhttp = new XMLHttpRequest();
var url = "../modules/links/link-list.php";
 xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
       loadAllLinks(myArr);
    }
}
//document.getElementById("tdUrl").innerHTML = "Loading, please wait...";
xmlhttp.open("GET", url, true);
xmlhttp.send();
});

 

function loadAllLinks(arr){
    var cat = "";
    var url = "";
    var desc = "";
   // var content = "";
 
  if(arr.length <=0) {
    showMessage("noContent");
  }
  else{
    showMessage("content");
    for(i = 0; i < arr.length; i++) {
        url +=  '<a href="http://'+
        arr[i].linkUrl + '" target="_blank">' + arr[i].linkUrl + '</a><br>';

         cat += arr[i].linkCategory + ' <br>';
    
            desc +=  
        arr[i].linkDesc +'<br>';
    
       //     content += '<a href="' + arr[i].linkDesc + '">' + 
      //  arr[i].linkDesc + '</a><br>';
    }
      document.getElementById("tdUrl").innerHTML = url;
      document.getElementById("tdCat").innerHTML = cat;
     document.getElementById("tdDesc").innerHTML = desc;
  //   document.getElementById("tdContent").innerHTML = content;
  }
}





function searchLink(){
  let cat; 
  var stext = document.getElementById("searchbox").value;

console.log("LOG: ../modules/knowledgebase/link-list.php?linkurl="+stext);
  
var xmlhttp = new XMLHttpRequest();
var url = "../modules/links/link-list.php?linkurl="+stext;
console.log("URL: " + url);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        loadAllLinks(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function displayResult(arr) {
     var desc = "";
     var cat = "";
    var url = "";
 	if(arr.length <=0) {
    showMessage("noContent");
    // document.getElementById("tdContent").innerHTML = "";
	}
	else{
    showMessage("noCont");
    for(i = 0; i < arr.length; i++) {

        url += '<a href="' + arr[i].linkUrl + '" target="_blank">' + 
        arr[i].linkUrl + '</a>';
		
		        cat += arr[i].linkCategory +'<br>';
		
		        desc += 
        arr[i].linkDesc + '<br>';
		
		      //  content += '<a href="' + arr[i].linkDesc + '">' + 
     //   arr[i].linkDesc + '</a><br>';
    }
    document.getElementById("tdUrl").innerHTML = url;
    document.getElementById("tdCat").innerHTML = cat;
     document.getElementById("tdDesc").innerHTML = desc;
    // document.getElementById("tdContent").innerHTML = content;
	}
  }
}

 function showAlert(){
var dialog = bootbox.dialog({
    message: '<p class="text-center">Awesome! Keep them coming.</p>',
    closeButton: true
});
// do something in the background
dialog.modal('hide');

 }


 function showMessage(status) {
   const x = document.getElementById("table");
  const y = document.getElementById("message");
  if(status=="noContent"){
     y.style.display = "block";
     x.style.display = "none"; 
    } else {
       x.style.display = "block";
      y.style.display = "none";      
    } 
}

</script>






<!--modal for add KB-->
 <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-url" id="modalLabel">A new Link</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post">
             <div class="input-group mb-3">
              <div class="input-group-append">
              <span class="input-group-text">Link Category</span>
              </div>
              <select class="form-control" name="linkCategory">
                <option>L1</option>
                <option>L2</option>
                <option>HR</option>
                <option>Others</option>
              </select>
             </div>

             <div class="form-group">
             <div class="input-group mb-3">
              <div class="input-group-append">
               <span class="input-group-text">Url</span>
              </div>
              <input type="text" class="form-control" name="linkUrl">
             </div>
            </div>

            <div class="form-group">
              <label for="comment">Short Description:</label>
              <textarea class="form-control" name="linkDesc" rows="3" id="comment" required="" placeholder="Where the link redirects the user to..."></textarea>
               
            </div>
              
      </div>
      <div class="modal-footer">
        <input type="submit" name="submit" class="btn btn-success" value="Submit">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</div>

<footer class="footer">
      <div class="container">
        <span class="text-muted"><code>Designed</code> and <code>Coded</code> by <code>KentLogic</code> for <code>KentLogic</code></span>
      </div>
    </footer>
 
 


 <?php
date_default_timezone_set("Asia/Manila");
$date = Date('m-d-y h:i:sa');
if (isset($_POST["submit"])) {
 $stmt = $conn->prepare("INSERT INTO links (linkCategory, linkUrl, linkDesc, linkCreatedBy, linkCreateDate)
             VALUES (:linkCategory, :linkUrl, :linkDesc, :linkCreatedBy, :linkCreateDate)");

$linkCreatedBy = "Kent";

$stmt->bindParam(':linkCategory', $_POST['linkCategory']);
$stmt->bindParam(':linkUrl', $_POST['linkUrl']);
$stmt->bindParam(':linkDesc', $_POST['linkDesc']);
 $stmt->bindParam(':linkCreatedBy', $linkCreatedBy);
$stmt->bindParam(':linkCreateDate', $date);
 
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


