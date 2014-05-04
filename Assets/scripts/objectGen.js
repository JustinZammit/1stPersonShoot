#pragma strict
var enemyUfo:Rigidbody;
var enemyGround:Rigidbody;
var boss:Rigidbody;

function generateUfo()
{
	//infinite loop (on purpose)
	while(true)
	{
	
		var score:int; 
		score = GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score;
		
		if ((score>0) && (score%21==0))
		{
			
			Instantiate(boss,Vector3(Random.Range(0,0)+transform.position.x,Random.Range(2,2)+transform.position.y,transform.position.z),transform.rotation);
			GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score++;
			//yield WaitForSeconds(1.0);
			
		}
		//add the code to instantiate cubes.  This is creating one cube per second
		//exercise 1: Add generation of spheres
		Instantiate(enemyUfo,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(0,5)+transform.position.y,transform.position.z),transform.rotation);
		yield WaitForSeconds(1.0);
		Instantiate(enemyGround,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(-2,-2)+transform.position.y,transform.position.z),transform.rotation);
		yield WaitForSeconds(1.0);
		
		
	}
	
	
}



function Start () {
	//generate one object per second
	yield StartCoroutine("generateUfo");
}

function Update () {
	
}