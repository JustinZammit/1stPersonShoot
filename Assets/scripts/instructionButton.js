#pragma strict

function OnMouseOver()
{
	GameObject.FindGameObjectWithTag("instruc").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("instrucHover").transform.position = Vector3(0.4, 2.2699, 3);
}

function OnMouseExit()
{
	GameObject.FindGameObjectWithTag("instrucHover").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("instruc").transform.position = Vector3(0.4, 2.2699, 3);
}

function OnMouseDown()
{
	Application.LoadLevel("instructions");
}

function Start () {

}

function Update () {

}