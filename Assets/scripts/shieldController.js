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

shield=5;

}

function Update () {
	
	if (shield <=0)
	{
		Destroy(this.gameObject);
	}

}