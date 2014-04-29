#pragma strict

public var shield:int;

function OnTriggerEnter(other: Collider){
  if ((other.gameObject.tag == "enemyGround") || (other.gameObject.tag=="enemyUfo")){
    // this rigidbody or CharacterController entered a trigger tagged Wall
    Destroy(other.gameObject);
    shield=shield-1;
    
  }
}




function Start () {

//yield StartCoroutine("enableShield");
shield=5;

}

function Update () {
	
	if (shield <=0)
	{
		Destroy(this.gameObject);
	}
	
	if (GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).score>=5)
	{
		
		if (Input.GetKeyDown (KeyCode.W))
		{
				GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -2.0993, -8.31573);
				GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
		}
		if (Input.GetKeyDown (KeyCode.Q))
		{
				GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -24.1227, -8.31573);
				GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
		}
	}
	
	
}