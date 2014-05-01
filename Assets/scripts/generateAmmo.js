#pragma strict

var refillAmmo:Rigidbody;

function generateAmmo()
{
		//infinite loop (on purpose)
		while(true)
		{

			
			yield WaitForSeconds(20.0);
			Instantiate(refillAmmo,Vector3(Random.Range(-6,6)+transform.position.x,Random.Range(0,5)+transform.position.y,transform.position.z),transform.rotation);
			
		}
}

function Start () {
yield StartCoroutine("generateAmmo");
}

function Update () {

}