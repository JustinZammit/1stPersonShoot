#pragma strict

public var shield:int;
public var score:int;

function OnTriggerEnter(other: Collider){
  if ((other.gameObject.tag == "enemyGround") || (other.gameObject.tag=="enemyUfo")){
    // this rigidbody or CharacterController entered a trigger tagged Wall
    Destroy(other.gameObject);
    shield=shield-1;
    
  }
}




function Start () {

//yield StartCoroutine("enableShield");
shield=2;

}

function Update () {
	
	if (shield <=0)
	{
		GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -24.1227, -12.1722);
		GameObject.FindGameObjectWithTag("shield2").transform.position = Vector3(0.28285, -24.1227, -8.31573);
	}
	
	if (GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score>=5)
	{
		if (shield >=1)
		{
		
		
			if (Input.GetKeyDown (KeyCode.W))
			{
					GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -2.0993, -12.1722);
					GameObject.FindGameObjectWithTag("shield2").transform.position = Vector3(0.28285, -2.0993, -8.31573);
					GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
					GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).canShootBazooka = false;
			}
		
		}
		
		if (Input.GetKeyDown (KeyCode.Q))
		{
				GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -24.1227, -12.1722);
				GameObject.FindGameObjectWithTag("shield2").transform.position = Vector3(0.28285, -24.1227, -8.31573);
				GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
				GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).canShootBazooka = false;
		}
	}
	
	
}