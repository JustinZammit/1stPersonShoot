#pragma strict

function OnMouseOver()
{
	GameObject.FindGameObjectWithTag("playBut").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("playButHover").transform.position = Vector3(0.4, 4.56998, 3);
}

function OnMouseExit()
{
	GameObject.FindGameObjectWithTag("playButHover").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("playBut").transform.position = Vector3(0.4, 4.56998, 3);
}

function OnMouseDown()
{
	Application.LoadLevel("level1");
}

function Start () {

}

function Update () {

}