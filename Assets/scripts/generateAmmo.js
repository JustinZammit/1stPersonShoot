#pragma strict

var refillAmmo:Rigidbody;
var slowTime:Rigidbody;

function generateAmmoAndTime()
{
		//infinite loop (on purpose)
		while(true)
		{

			
			yield WaitForSeconds(15.0);
			Instantiate(refillAmmo,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(0,5)+transform.position.y,transform.position.z),transform.rotation);
			yield WaitForSeconds(15.0);
			Instantiate(slowTime,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(0,5)+transform.position.y,transform.position.z),transform.rotation);
			
		}
}

function Start () {
yield StartCoroutine("generateAmmoAndTime");
}

function Update () {

}