#pragma strict
var boss:Rigidbody;

function generateBoss()
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
		
		
	}
	
	
}

function Start () {

	yield StartCoroutine("generateBoss");
}

function Update () {

}