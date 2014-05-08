#pragma strict

public var lives:int;

function OnTriggerEnter(other: Collider){
  if ((other.gameObject.tag == "enemyGround") || (other.gameObject.tag=="enemyUfo")){
    // this rigidbody or CharacterController entered a trigger tagged Wall
    lives=lives-1;
    
    Debug.Log(lives);
  }
  
  if (other.gameObject.tag == "boss"){
    // this rigidbody or CharacterController entered a trigger tagged Wall
    lives=lives-100;
    
   // Debug.Log(lives);
  }
  
}

function Start () {
lives=5;

}

function Update () {

}