#pragma strict


function OnMouseDown()
{
	if (Application.loadedLevelName == "Menu")
	{
		Application.LoadLevel("Level1");
	}
}

function loadMenu()
{
	if (Application.loadedLevelName == "LoadScreen")
	{
		yield WaitForSeconds(3);
		Application.LoadLevel("menu");
	}

}

function Start () {
yield StartCoroutine ("loadMenu");

}

function Update () {

}