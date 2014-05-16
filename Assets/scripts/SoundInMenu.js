#pragma strict
var gunSound:AudioClip;


function Start () {

}

function Update () {
if (Input.GetMouseButtonDown(0))
	{
		GetComponent(AudioSource).PlayClipAtPoint(gunSound,transform.position);
	}

}