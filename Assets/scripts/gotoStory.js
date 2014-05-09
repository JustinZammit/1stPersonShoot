#pragma strict

function OnMouseOver()
{
	GameObject.FindGameObjectWithTag("story").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("storyHover").transform.position = Vector3(0.4, -0.0300, 3);
}

function OnMouseExit()
{
	GameObject.FindGameObjectWithTag("storyHover").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("story").transform.position = Vector3(0.4, -0.0300, 3);
}

function OnMouseDown()
{
	Application.LoadLevel("Story");
}

function Start () {

}

function Update () {

}