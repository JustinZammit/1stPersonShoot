#pragma strict

function OnTriggerExit(other: Collider){
  if (other.gameObject.tag == "boss") {
   
    GameObject.FindGameObjectWithTag("bossSpawn").transform.position = Vector3(-0.006965637, -1.34219, -7.470692); 
    yield WaitForSeconds(2.5);
    GameObject.FindGameObjectWithTag("bossSpawn").transform.position = Vector3(-0.006965637, -10, -7.470692); 
    
  }
}


function Start () {

}

function Update () {

}