#pragma strict

var score:int;
var lives:int;
var shield:int;
var text:GUISkin;
var enemyLives:int;
var playerscore:int;
var explosion:Rigidbody;

var grenadeSound:AudioClip;
var gunSound:AudioClip;


function OnGUI()
{
	GUI.skin=text;
	//label used to show score
	GUI.Label(Rect(10,5,100,50),"Score: "+score);
	GUI.Label(Rect(10,20,100,50),"Lives: "+lives);
	GUI.Label(Rect(10,35,100,50),"Shield: "+shield);
	GUI.Label(Rect(10,50,100,50),"Bazooka: "+bazookaAmmo);

}

function changeGameTime()
{

				Time.timeScale=0.2;
				yield WaitForSeconds(1.2);
				Time.timeScale=1.0;
	
}


function checkLives()
{
	lives = GameObject.FindGameObjectWithTag("healthReduce").GetComponent(healthController).lives;
}
function checkShield()
{
	if (GameObject.FindGameObjectWithTag("shield")!=null)
	{
	shield = GameObject.FindGameObjectWithTag("shield").GetComponent(shieldController).shield;
	}
}
var canShootBazooka:boolean;
	var bazookaAmmo:int;
function Start () {
	
	

	Screen.showCursor = false;
	score=0;
	canShootBazooka = false;
	
	bazookaAmmo=2;
	//lives=5;
}

var line:LineRenderer;
function Update () {
	
	checkLives();
	checkShield();
	
	
	if ((score>0) && (score%10==0))
	{
		Time.timeScale=Time.timeScale+0.0035;
	}
	
	
	if (lives <= 0)
	{
		PlayerPrefs.SetInt("Playerscore", score);
		Application.LoadLevel("Menu");
	}
	if (GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score>=10)
	{
		
		if ((Input.GetKeyDown (KeyCode.E)) && (bazookaAmmo>=1))
		{
				
			
					GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, 0.0009961128, -7.202566);
					GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -24.1227, -12.1722);
					GameObject.FindGameObjectWithTag("shield2").transform.position = Vector3(0.28285, -24.1227, -8.31573);
					
					canShootBazooka = true;
					//Debug.Log(canShootBazooka);	
					
					// guns
					GameObject.FindGameObjectWithTag("pistol4").transform.position = Vector3(0.7007771,-7, -8.694506);
					GameObject.FindGameObjectWithTag("pistol3").transform.position = Vector3(1.60659,-7, -6.644174);
					GameObject.FindGameObjectWithTag("pistol2").transform.position = Vector3(2.518723, -7, -6.290473);
					GameObject.FindGameObjectWithTag("pistol2.5").transform.position = Vector3(-2.658708, -7, -6.290473);
				
				
				
		}
			
		if (bazookaAmmo <= 0)
		{
				GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
									
				canShootBazooka = false;
				//Debug.Log(canShootBazooka);
		}
	
								
		if((Input.GetKeyDown(KeyCode.Space)) && (canShootBazooka) && (bazookaAmmo>=1))
			{
					GetComponent(AudioSource).PlayClipAtPoint(grenadeSound,transform.position);
			
					bazookaAmmo--;
										
					var enemyArray1:GameObject[];
					var enemyArray2:GameObject[];
					var enemyArray3:GameObject[];
					
					enemyArray1 = GameObject.FindGameObjectsWithTag("enemyGround");
					enemyArray2 = GameObject.FindGameObjectsWithTag("enemyUfo");
					enemyArray3 = GameObject.FindGameObjectsWithTag("boss");
					
					for (var enemy:GameObject in enemyArray1)
					{
						Destroy(enemy);
						score++;

					}
					
					for (var enemy:GameObject in enemyArray2)
					{
						Destroy(enemy);
						score++;
						

					}
					
					for (var enemy:GameObject in enemyArray3)
					{
						Destroy(enemy);
						score++;
						

					}

					//enemyLives= GameObject.FindGameObjectWithTag("enemyGround").GetComponent(enemyLives);
					//enemyLives=enemyLives--;
					GameObject.FindGameObjectWithTag("healthReduce").GetComponent(healthController).lives--;
			}
				
				
		}
		
	
		if(Input.GetKeyDown(KeyCode.Escape))
		{
			Application.LoadLevel("Menu");
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
		
		GetComponent(AudioSource).PlayClipAtPoint(gunSound,transform.position);
		//casts a ray out from the mouse position out into the 3d world
		var ray = Camera.main.ScreenPointToRay(mousePos);
	
		
		//each hit returns a raycast hit
		var hit:RaycastHit;
		
		/*var xpos:int;
		var ypos:int;
		var zpos:int;
		xpos = GameObject.FindGameObjectWithTag("enemyGround").transform.position.x;
		ypos = GameObject.FindGameObjectWithTag("enemyGround").transform.position.y;
		zpos = GameObject.FindGameObjectWithTag("enemyGround").transform.position.z;
		*/
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
			var target = hit.collider.gameObject.transform.position;
			
			Debug.Log(target);
			
			target.y += 0.2;
			
			var myExplosion:Rigidbody;
			
			myExplosion = Instantiate(explosion, target, transform.rotation);
			GetComponent(AudioSource).PlayClipAtPoint(grenadeSound,target);
			
			if (target.z > 30)
			{
			//biggest
				myExplosion.transform.localScale.x = 5;
				myExplosion.transform.localScale.y = 5;
			}
			
			if (target.z > 20)
			{
			//big
				myExplosion.transform.localScale.x = 2.5;
				myExplosion.transform.localScale.y = 2.5;
			}
			
			Destroy(hit.collider.gameObject);
			
			
			}
			if (hit.collider.gameObject.tag == "boss")
			{
				if (GameObject.FindGameObjectWithTag("boss")!=null)
				{		
					GameObject.FindGameObjectWithTag("boss").GetComponent(bossHealthController).bossHealth--;
					
					//Debug.Log("Boss Texture test");
				    // yield WaitForSeconds(0.6);
					//renderer.material.mainTexture = Resources.Load("enemyBullets");
					
					if(GameObject.FindGameObjectWithTag("boss").GetComponent(bossHealthController).bossHealth<=0)
					{
						Destroy(hit.collider.gameObject);
						score++;
						Instantiate(explosion, transform.position, transform.rotation);
						GetComponent(AudioSource).PlayClipAtPoint(grenadeSound,target);
					}
				}
			
			}
			
			if (hit.collider.gameObject.tag == "health")
			{
			
				lives=GameObject.FindGameObjectWithTag("healthReduce").GetComponent(healthController).lives++;
				//destroy the cube
				Destroy(hit.collider.gameObject);
			
			}
			if (hit.collider.gameObject.tag == "refillAmmo")
			{
			
				GameObject.FindGameObjectWithTag("shield").GetComponent(shieldController).shield++;
				bazookaAmmo++;
				//destroy the cube
				Destroy(hit.collider.gameObject);
				
			}
			
			if (hit.collider.gameObject.tag == "slowTime")
			{
				Destroy(hit.collider.gameObject);
				changeGameTime();
			}
			
			

			
		}
	}
	
			if (Input.GetKeyDown (KeyCode.Q))
			{	//guns
				GameObject.FindGameObjectWithTag("pistol2").transform.position = Vector3(2.518723, -1.730917, -6.290473);
				GameObject.FindGameObjectWithTag("pistol2.5").transform.position = Vector3(-2.658708, -1.730917, -6.290473);
				GameObject.FindGameObjectWithTag("pistol3").transform.position = Vector3(1.60659,-7, -6.644174);
				GameObject.FindGameObjectWithTag("pistol4").transform.position = Vector3(0.7007771,-7, -8.694506);
			}
			
			if (Input.GetKeyDown (KeyCode.LeftAlt))
			{	
				
				//guns
				GameObject.FindGameObjectWithTag("pistol3").transform.position = Vector3(1.60659,-1.618149, -6.644174);
				
				GameObject.FindGameObjectWithTag("pistol2").transform.position = Vector3(2.518723, -7, -6.290473);
				GameObject.FindGameObjectWithTag("pistol2.5").transform.position = Vector3(-2.658708, -7, -6.290473);
				GameObject.FindGameObjectWithTag("pistol4").transform.position = Vector3(0.7007771,-7, -8.694506);
			}
			if (Input.GetKeyDown (KeyCode.RightAlt))
			{	
				
				//guns
				GameObject.FindGameObjectWithTag("pistol4").transform.position = Vector3(0.7007771,-0.5701599, -8.694506);
				GameObject.FindGameObjectWithTag("pistol3").transform.position = Vector3(1.60659,-7, -6.644174);
				GameObject.FindGameObjectWithTag("pistol2").transform.position = Vector3(2.518723, -7, -6.290473);
				GameObject.FindGameObjectWithTag("pistol2.5").transform.position = Vector3(-2.658708, -7, -6.290473);
				
				
			}
}
	
	
