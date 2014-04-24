#pragma strict

var health:Rigidbody;

function generatehealth()
{
		//infinite loop (on purpose)
		while(true)
		{

			yield WaitForSeconds(5.0);
			Instantiate(health,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(0,5)+transform.position.y,transform.position.z),transform.rotation);
			yield WaitForSeconds(5.0);
			
		}
}



function Start () {
	//generate one object per second
	yield StartCoroutine("generatehealth");
}

function Update () {

}