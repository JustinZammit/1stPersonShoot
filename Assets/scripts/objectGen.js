#pragma strict
var cubeObject:Rigidbody;
var sphereObject:Rigidbody;


function generateCubes()
{
	//infinite loop (on purpose)
	while(true)
	{
		//add the code to instantiate cubes.  This is creating one cube per second
		//exercise 1: Add generation of spheres
		Instantiate(cubeObject,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(-5,5)+transform.position.y,transform.position.z),transform.rotation);
		yield WaitForSeconds(1.0);
	}
}


function Start () {
	//generate one object per second
	yield StartCoroutine("generateCubes");
}

function Update () {
	
}