<?php
class Mysql{

    private const DB_HOST = '127.0.0.1';
    private const DB_USERNAME = 'root';
    private const DB_PASSWORD = 'option123';
    private const DB_NAME = 'todolist';
    private $con = null;
    public function __construct(){
     $this->connect();
    }
  
   private function connect(){
    $this->conn = mysqli_connect(self::DB_HOST, self::DB_USERNAME, self::DB_PASSWORD,self::DB_NAME);
    if (!$this->conn) {
      die("Connection failed: " . mysqli_connect_error());
    } 
  }

   public function isConnect(){
    echo 'Connected!';
  }
   //Insert task name to database
   public function insertTask($taskName){
    $sql = 'insert into task(task_name) values ("'.$taskName.'")';
    if($this->conn->query($sql) === TRUE){
      echo "Task inserted!";
    }
    else{
      echo "Something wrong! ".$this->conn->error;
    }
   }

   //select all tasks from database
   public function selectAllTasks(){
    $sql = "Select * from task";
    $result = $this->conn->query($sql);
    $taskList = [];
    if($result->num_rows > 0){
      while($row= $result->fetch_assoc()){
        array_push($taskList, array('id'=> $row['task_id'], 'task_name'=>$row['task_name']));
      }
    }
    return $taskList;
   }

  //edit a task by Id
   public function editTask($id, $value){
     $sql = "update task set task_name=".$value." where task_id=".$id;
      if($this->conn->query($sql) === TRUE){
      echo "Task updated!";
    }
    else{
      echo "Something wrong! ".$this->conn->error;
    }
   }

   //delete a task by Id
   public function deleteTask($id){
     $sql = "delete from task where task_id=". $id;
      if($this->conn->query($sql) === TRUE){
      echo "Task Deleted!";
    }
    else{
      echo "Something wrong! ".$this->conn->error;
    }
   }
}

?>