#pragma strict

function Start () {
	Screen.showCursor = true;
}
	var line:LineRenderer;
function Update () {
	
	//get the SCREEN position of the mouse
	var mousePos = Input.mousePosition;
	
	//create a virtual 'plane' 10 further in from the camera
	mousePos.z = 10;
	
	//translate from pixels to world coordinates 
	var point = Camera.main.ScreenToWorldPoint(mousePos);
	
	//set the position of the cursor
	transform.position = point;
	
	//if I click the left mouse button once
	if (Input.GetMouseButtonDown(0))
	{
		
		Debug.Log("click");
		
		//casts a ray out from the mouse position out into the 3d world
		var ray = Camera.main.ScreenPointToRay(mousePos);
	
		
		//each hit returns a raycast hit
		var hit:RaycastHit;
		
		
		
		//method that generates the laser
		if (Physics.Raycast (ray, hit)) {
			//draw a line
		
			//show a line
			line.SetPosition(0, Vector3(Camera.main.transform.position.x,Camera.main.transform.position.y-5,Camera.main.transform.position.z));
			line.SetPosition(1, hit.point);
			
			//hit the cube.
			//for example to only destroy objects tagged 'cube'
			if (hit.collider.gameObject.tag == "enemy")
			{
			//destroy the cube
			Destroy(hit.collider.gameObject);
			//Exercise 2: implement score for the player 
			}
		}
	}
	
}