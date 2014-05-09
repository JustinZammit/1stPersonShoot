#pragma strict

function OnMouseOver()
{
	GameObject.FindGameObjectWithTag("quitGame").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("quitGameHover").transform.position = Vector3(0.4, -2.012338, 3);
}

function OnMouseExit()
{
	GameObject.FindGameObjectWithTag("quitGameHover").transform.position = Vector3(0.4, 10, 3);
	GameObject.FindGameObjectWithTag("quitGame").transform.position = Vector3(0.4, -2.012338, 3);
}

function OnMouseDown()
{
	Application.Quit();
}

function Start () {

}

function Update () {

}