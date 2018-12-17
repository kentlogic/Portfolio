<?php
$dir = "../modules/dbConnection/connect.php";
require ('../modules/dbConnection/dbConnect.php');

?>

<!DOCTYPE html>
<html>
<head>
  <title>KB Management</title>
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
        <a class="nav-link active" href="manage-kb.php">Knowledgebase</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="manage-process.php">Process</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="manage-links.php">Links</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tm-tools.html">Tools</a>
      </li>
 
       <li class="nav-item">
             <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal">Add a new KB</button>

      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
 <div class="input-group">
        <input type="text" autofocus="" id="searchbox" onKeyUp="searchKB()" class="form-control" placeholder="Search for anything...">
        <div class="input-group-append">
        <button class="btn btn-success" type="button">
        <img src="../images/icons/octicons-white/search-white.png" width="15" />
        </button>
        </div>
      </div>
    </form>

  </div>
</nav>

 
<br/>

<div class="container-fluid primary h-100" >

  <div class="row justify-content-center align-items-center">
    <div class="col-md-10 col-6 mx-auto col-sm-12 card-clock">
 
      <div id="message" class="col-3 w3-card mx-auto p-1">
        <h3 class="display-5 code" align="center">
          <img src='../images/icons/facepalm.svg' height="50" height="50" />
          Nothing to load.</h3>
      </div>

    <div class="table-responsive">  
    <table align="center" class="table table-bordered" id="table">
      <thead>
        <th scope="col">ID</th>
        <th scope="col">Category</th>
        <th scope="col">Title</th>
        <!--<th scope="col">Content</th>-->
      </thead>
      <tr style="overflow: auto;">
        <td id="tdID"></td>
        <td id="tdCat"></td>
        <td class="table table-striped" id="tdTitle"></td>
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
var url = "../modules/knowledgebase/kb-list.php";
 xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
       loadAllKb(myArr);
    }
}
//document.getElementById("tdID").innerHTML = "Loading, please wait...";
xmlhttp.open("GET", url, true);
xmlhttp.send();
 
});

 

function loadAllKb(arr){
    var id= "";
    var cat = "";
    var title = "";
   // var content = "";
    var i;

  if(arr.length <=0) {
    showMessage("noContent");   
  }
  else{
    showMessage("content");   
    for(i = 0; i < arr.length; i++) {
             id += '<a href="view-kb.html?id='+ arr[i].kbID + '"  target="_blank">' + 
        arr[i].kbID + '</a><br>';

         cat += arr[i].kbCategory + '</a><br>';
    
            title += '<a href="' + arr[i].kbTitle + '">' + 
        arr[i].kbTitle + '</a><br>';
    
       //     content += '<a href="' + arr[i].kbDesc + '">' + 
      //  arr[i].kbDesc + '</a><br>';
    }
      document.getElementById("tdID").innerHTML = id;
      document.getElementById("tdCat").innerHTML = cat;
     document.getElementById("tdTitle").innerHTML = title;
  //   document.getElementById("tdContent").innerHTML = content;
  }
}





function searchKB(){
  let cat; 
  var stext = document.getElementById("searchbox").value;
  
var xmlhttp = new XMLHttpRequest();
var url = "../modules/knowledgebase/kb-list.php?kbtitle="+stext;
console.log("URL: " + url);
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        displayResult(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function displayResult(arr) {
     var id = "";
     var cat = "";
    var title = "";
    var content = "";
    var i;
  if(arr.length <=0) {
    showMessage("noContent");   
    // document.getElementById("tdContent").innerHTML = "";
  }
  else{
        showMessage("content");   
    for(i = 0; i < arr.length; i++) {
        id += '<a href="view-kb.html?id=' + arr[i].kbCategory + '">' + 
        arr[i].kbID + '</a><br>';
    
            cat += '<a href="' + arr[i].kbCategory + '">' + 
        arr[i].kbCategory + '</a><br>';
    
            title += '<a href="' + arr[i].kbTitle + '">' + 
        arr[i].kbTitle + '</a><br>';
    
          //  content += '<a href="' + arr[i].kbDesc + '">' + 
     //   arr[i].kbDesc + '</a><br>';
    }
    document.getElementById("tdID").innerHTML = id;
    document.getElementById("tdCat").innerHTML = cat;
     document.getElementById("tdTitle").innerHTML = title;
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
feedbackSummary();
 }
  
function feedbackSummary(){
  let feature;
  let bug;
  let functionality;
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

</script>






<!--modal for add KB-->
 <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalLabel">Create new KB</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form method="post">
             <div class="input-group mb-3">
              <div class="input-group-append">
              <span class="input-group-text">KB Category</span>
              </div>
              <select class="form-control" name="kbCategory">
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
              <input type="text" class="form-control" name="kbTitle">
             </div>
            </div>

            <div class="form-group">
              <label for="comment">Description/Code:</label>
              <textarea class="form-control" name="kbDesc" rows="11" id="comment" required="" placeholder="Type the instructions here..."></textarea>
              <?php //echo  getenv("HOMEDRIVE"). getenv("HOMEPATH"); ?>
              
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
 $stmt = $conn->prepare("INSERT INTO knowledgebase (kbCategory, kbTitle, kbDesc, kbCreatedBy, kbCreateDate)
             VALUES (:kbCategory, :kbTitle, :kbDesc, :kbCreatedBy, :kbCreateDate)");

$kbCreatedBy = "Kent";

$stmt->bindParam(':kbCategory', $_POST['kbCategory']);
$stmt->bindParam(':kbTitle', $_POST['kbTitle']);
$stmt->bindParam(':kbDesc', $_POST['kbDesc']);
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


