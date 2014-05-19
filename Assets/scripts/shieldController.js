#pragma strict

public var shield:int;
public var score:int;

function OnTriggerEnter(other: Collider){
  if ((other.gameObject.tag == "enemyGround") || (other.gameObject.tag=="enemyUfo")){
    // this rigidbody or CharacterController entered a trigger tagged Wall
    Destroy(other.gameObject);
    shield=shield-1;
   // gameObject.GetComponent(SpriteRenderer).sprite = Resources.Load("enemyBullets.png"); 
    Debug.Log("Shield test");
    // yield WaitForSeconds(0.6);
    var currentImage:Sprite;
    currentImage = GameObject.FindGameObjectWithTag("shield2").GetComponent(SpriteRenderer).sprite;
    
    var newImage:Sprite;
					newImage = Resources.Load("shieldDamaged",Sprite); 
					GameObject.FindGameObjectWithTag("shield2").GetComponent(SpriteRenderer).sprite = newImage;
 				    yield WaitForSeconds(0.6);
    				GameObject.FindGameObjectWithTag("shield2").GetComponent(SpriteRenderer).sprite = currentImage;
  }
}




function Start () {

shield=3;

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
					//powerup
					GameObject.FindGameObjectWithTag("shield").transform.position = Vector3(0.28285, -2.0993, -12.1722);
					GameObject.FindGameObjectWithTag("shield2").transform.position = Vector3(0.28285, -2.0993, -8.31573);
					GameObject.FindGameObjectWithTag("BazookaAim").transform.position = Vector3(0.01, -7.230994, -7.202566);
					GameObject.FindGameObjectWithTag("cursor").GetComponent(cursorController).canShootBazooka = false;
					//only pistols can be used with shield
					//GameObject.FindGameObjectWithTag("pistol2").transform.position = Vector3(2.518723, -1.730917, -6.290473);
					//GameObject.FindGameObjectWithTag("pistol2.5").transform.position = Vector3(-2.658708, -1.730917, -6.290473);
					//GameObject.FindGameObjectWithTag("pistol3").transform.position = Vector3(1.60659,-7, -6.644174);
					//GameObject.FindGameObjectWithTag("pistol4").transform.position = Vector3(0.7007771,-7, -8.694506);
					
			}
		
		}
		
		
		
	}
	
	
}