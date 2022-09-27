<?php
include 'sql.php';
$mysql = new Mysql();

if(isset($_POST['task']) && !empty($_POST['task'])){//task is set and not empty
    if(isset($_POST['task_id']) && !empty($_POST['task_id'])){//task id is set and not empty
      $mysql->editTask($_POST['task_id'],$_POST['task']);
    }else{
        $mysql->insertTask($_POST['task']);
    }
}

if(isset($_GET['delete_id'])){
    $mysql->deleteTask($_POST['delete_id']);
}

$taskName = '';
$editTaskId = '';
if(isset($_GET['edit_id']) && isset($_GET['task_name'])){
    $editTaskId = $_GET['edit_id'];
    $taskName = $_GET['task_name'];
}

?>

<!DOCTYPE html>
<html>
<head>
<title> To do list </title>
<script>
function edit(id,task_name){
   location.href = 'index.php?edit_id='+ id+ '&task_name='+task_name;
   document.selectElementById('task').innerHTML = '';
}

function deleteTask(taskId){
    location.href = 'index.php?delete_id=' + taskId;
}
</script>
</head>
<body>
<form method="POST" action="">
<label for="task">Task Name: </label>
<input type="text" name="task" id="task" value="<?php echo $taskName; ?>">
<input type="hidden" value=<?php echo $editTaskId; ?> name="edit_id" >
<input type="submit" name="submit" value="Submit Button">
</form>

<?php //$allTasks = $mysql->selectAllTasks(); ?>

<?php if(count($allTasks) > 0): ?>
<ul>
<?php foreach($allTasks as $taskItem): ?>
<li> <?php echo $taskItem['task_name']; ?> 
<button name="edit" onclick="edit(<?php echo $taskItem['task_id'] ?>,'<?php echo $taskItem['task_name'] ?>')">Edit</button>
<button name="delete" onclick="deleteTask(<?php echo $taskItem['id'] ?>)">Delete</button>
</li>
<?php endforeach; ?>
</ul>
<?php endif; ?>
<body>
</html>