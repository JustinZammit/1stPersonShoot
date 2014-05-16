#pragma strict

var Playerscore:int;


function OnGUI()
{		
		Playerscore = PlayerPrefs.GetInt("Playerscore");
		if (Playerscore>0)
		{
		GUI.Label(Rect(10,5,100,50),"Last Score: "+Playerscore);
		}
}

function Start () {
	if (Screen.showCursor == false)
	{
		Screen.showCursor = true;
	}
}

function Update () {
	
	
}