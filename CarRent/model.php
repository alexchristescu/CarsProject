<?php 

class APPMODEL { 

	


	public function JsonT($value){
		if ($value == '' || count($value) == 0 || $value == null) {
			return json_encode(json_encode([code => 'value_false']));
		}
		else{
			return json_encode(json_encode($value));
		}
	}






	public function sqlTest(){
		global $conn;
		
		$query="SELECT cars.*,model.model, makes.make, class.* 
		FROM cars join model on cars.model_id = model.model_id 
		join makes on makes.make_id = model.make_id 
		join class on cars.class_id = class.class_id";
		
		$result = $conn->query($query);
		
	if ($result->num_rows >0) {
 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tem = $row;
 
 $json = json_encode($tem);
 
 
 }
 
} 
		return  $json;
		
		$conn->close();
		
	}
    
    public function logIn($username, $pass){
        
        global $conn;
        
       
		
	
	$query = 'Select * from users where username = "' .$username. '" and pass = "' .$pass.'"';


	file_put_contents("param.txt",$query );
        $result = $conn->query($query);
        
    if( $result->num_rows > 0){
		
     
            return 1;
        
	} else {return 0;}
     
	

	$conn->close();
    


} 

public function Cars(){
        
	global $conn;
	
	$query="SELECT cars.*,model.*, makes.make, class.* 
		FROM cars join model on cars.model_id = model.model_id 
		join makes on makes.make_id = model.make_id 
		join class on cars.class_id = class.class_id";



	$result = $conn->query($query);
	
	if ($result->num_rows > 0) {
		// output data of each row
		while($row[] = $result->fetch_assoc()) {
 
			$tem = $row;
			
			$json = json_encode($tem);
			
			
			}
			
		   } 
				   return  $json;
				   
				   $conn->close();
				   
			   }

	public function Categories(){
		
		global $conn;
				
				$query="SELECT * from class";
			
			
			
				$result = $conn->query($query);
				
				if ($result->num_rows > 0) {
					// output data of each row
					while($row[] = $result->fetch_assoc()) {
			 
						$tem = $row;
						
						$json = json_encode($tem);
						
						
						}
						
					   } 
							   return  $json;
							   
							   $conn->close();
							   
						   }
			
			   
	}



 

?>








	

	


