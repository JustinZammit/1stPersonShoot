#pragma strict
var objectSpeed:int;
var bullet:Rigidbody;

function Start () {
	//set a random speed
	objectSpeed = 10;
		rigidbody.AddRelativeForce (0, 4, 4,ForceMode.Impulse);
}

function Update () {
	//move the objects towards the camera
	//transform.Translate(Vector3.forward * objectSpeed * Time.deltaTime);


}

/*
function OnBecameInvisible()
{
	Destroy(this.gameObject);
}*/