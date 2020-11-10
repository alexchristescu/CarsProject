<?php 
	header('Access-Control-Allow-Origin: *');  
		
	require_once("dbConfig.php");
	require_once("model.php");

	$app = new APPMODEL; 
	
	$json = file_get_contents('php://input');
	$obj = json_decode($json,true);



	
	switch ($obj["req"]) {
		


        

		case "test":
            
            
            file_put_contents("sqlTest.txt",'a intrat in functie');
			$result = $app->sqlTest();
			file_put_contents("sqlTest.txt",$result);
			echo $result;
		break;

		
		case "login":


            file_put_contents("login.txt",'ok');
            
			$result = $app->logIn($obj["username"],$obj["pass"]);
			file_put_contents("login.txt",$result);
			echo $result;
		break;


		case "cars":

			file_put_contents("sqlTest.txt",'a intrat in functie');
			$result = $app->Cars();
			file_put_contents("cars.txt",$result);
			echo $result;
		break;


		case "categories":

			file_put_contents("sqlTest.txt",'a intrat in functie');
			$result = $app->Categories();
			file_put_contents("cars.txt",$result);
			echo $result;
		break;

		



		
		case "other":
			
			echo "i equals 2";
		
		break;
	
	}

?>