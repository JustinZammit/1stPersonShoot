#pragma strict

var latestScore:int;
latestScore = GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).latestScore;

function OnGUI()
{
	if (latestScore > 0)
	{
		GUI.Label(Rect(10,5,100,50),"Last Score: "+latestScore);
	}
}
function Start () {

}

function Update () {
	
}