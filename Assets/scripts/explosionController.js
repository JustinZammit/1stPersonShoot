#pragma strict

var canDestroy:boolean;

function DestroyAfterOneSecond()
{
	while (true)
	{
		if (canDestroy)
		{
			yield WaitForSeconds(1.0);
			Destroy(this.gameObject);
		
		}
	
	}
	
}


function Start () {
	canDestroy = true;
	yield DestroyAfterOneSecond();
}

function Update () {

}