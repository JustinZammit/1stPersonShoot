#pragma strict

var pistol :boolean;
var rifle :boolean;
var mp7 :boolean;

var pistolSound:AudioClip;
var rifleSound:AudioClip;
var mp7Sound:AudioClip;

function Start () {
pistol = true;
rifle = false;
mp7 = false;
}

function Update () {

	//controllers for pistol
	if (Input.GetKeyDown(KeyCode.Q))
	{
		pistol = true;
		rifle = false;
		mp7 = false;
	}	
	//Debug.Log(pistol);
	if ((Input.GetKeyDown(KeyCode.W)) && (GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score >= 5))
	{
		pistol = true;
		rifle = false;
		mp7 = false;
	}
	if ((Input.GetMouseButtonDown(0)) && ( pistol == true))
	{
		GetComponent(AudioSource).PlayClipAtPoint(pistolSound,transform.position);

	}
	
	//controllers for rifle
	if (Input.GetKeyDown(KeyCode.LeftAlt))
	{
		pistol = false;
		rifle = true;
		mp7 = false;
	}
	if ((Input.GetMouseButtonDown(0)) && ( rifle == true))
	{
		GetComponent(AudioSource).PlayClipAtPoint(rifleSound,transform.position);

	}
	
	//controllers for mp7
	if (Input.GetKeyDown(KeyCode.RightAlt))
	{
		pistol = false;
		rifle = false;
		mp7 = true;
	}
	if ((Input.GetMouseButtonDown(0)) && ( mp7 == true))
	{
		GetComponent(AudioSource).PlayClipAtPoint(mp7Sound,transform.position);

	}
	
	
}