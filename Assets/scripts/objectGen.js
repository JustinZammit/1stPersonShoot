#pragma strict
var enemyUfo:Rigidbody;
var enemyGround:Rigidbody;

function generateUfo()
{
	//infinite loop (on purpose)
	while(true)
	{
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