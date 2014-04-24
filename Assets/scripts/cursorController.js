#pragma strict

var score:int;
var lives:int;
var text:GUISkin;

function OnGUI()
{
	GUI.skin=text;
	//label used to show score
	GUI.Label(Rect(10,5,100,50),"Score: "+score);
	GUI.Label(Rect(10,20,100,50),"Lives: "+lives);
	GUI.Label(Rect(10,35,100,50),"Difficulty: "+Application.loadedLevelName);

}

function checkLives()
{
	lives = GameObject.FindGameObjectWithTag("healthReduce").GetComponent(healthController).lives;
}

function Start () {

	Screen.showCursor = false;
	score=0;
	//lives=5;
}

var line:LineRenderer;
function Update () {
	
	checkLives();
	
	if (lives <= 0)
	{
		Application.LoadLevel("level1");
	}
	
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
			if ((hit.collider.gameObject.tag == "enemyUfo") || (hit.collider.gameObject.tag == "enemyGround"))
			{
			
			score=score+1;
			//destroy the cube
			Destroy(hit.collider.gameObject);
			
			}
			
			if (hit.collider.gameObject.tag == "health")
			{
			
			lives=GameObject.FindGameObjectWithTag("healthReduce").GetComponent(healthController).lives++;
			//destroy the cube
			Destroy(hit.collider.gameObject);
			
			}
			
		}
	}
	
	
}