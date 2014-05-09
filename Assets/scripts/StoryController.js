#pragma strict

//var storyComplete=boolean;

 
function OnMouseDown()
{
		//Debug.Log("click");
		Application.LoadLevel("Menu");
	
}
 
 
function playStory()
{
	while(true)
	{
			
			GameObject.FindGameObjectWithTag("story1").transform.position = Vector3(-0.6872692, 0.1658974, 133.9988);
			yield WaitForSeconds(3);
			GameObject.FindGameObjectWithTag("story1").transform.position = Vector3(-0.6872692, 700, 133.9988);
			GameObject.FindGameObjectWithTag("story2").transform.position = Vector3(-0.6872692, 0.1658974, 133.9988);
			yield WaitForSeconds(3);
			GameObject.FindGameObjectWithTag("story2").transform.position = Vector3(-0.6872692, 700, 133.9988);
			GameObject.FindGameObjectWithTag("story3").transform.position = Vector3(-0.6872692, 0.1658974, 133.9988);
			yield WaitForSeconds(1.5);
			GameObject.FindGameObjectWithTag("story3").transform.position = Vector3(-0.6872692, 700, 133.9988);
			GameObject.FindGameObjectWithTag("story4").transform.position = Vector3(-0.6872692, 0.1658974, 133.9988);
			//storyComplete = true;
						
			
	}
}
function Start () {

// storyComplete = false;
 yield StartCoroutine ("playStory");
}

function Update () {
	

}