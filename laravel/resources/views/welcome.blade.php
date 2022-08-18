<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day 14</title>
</head>
<body>
    <?php
        use App\Models\Todos;
        $todos = Todos::all()
    ?>
    <?php foreach($todos as $todo) : ?>
        <br>
        <hr>
        <?= $todo->task?>
        <hr>
        <?= $todo->status?>
        <br>
    <?php endforeach;?>
</body>
</html>