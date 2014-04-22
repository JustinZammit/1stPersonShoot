#pragma strict
var objectSpeed:int;


function Start () {
	//set a random speed
	objectSpeed = Random.Range(5,25);
}

function Update () {
	//move the objects towards the camera
	transform.Translate(Vector3.back * objectSpeed * Time.deltaTime);
}


function OnBecameInvisible()
{
	//Exercise 3: Implement missed cubes counter
	Destroy(this.gameObject);
}