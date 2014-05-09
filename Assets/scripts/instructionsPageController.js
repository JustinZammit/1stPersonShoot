#pragma strict


function OnMouseDown()
{
	if (Application.loadedLevelName == "instructions")
	{
		Application.LoadLevel("Menu");
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

	if ((Application.loadedLevelName == "instructions") &&(Input.GetKeyDown(KeyCode.Escape)))
		{
			Application.LoadLevel("Menu");
		}	
	
}