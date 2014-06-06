#pragma strict

public var enemyLives:int;

function Start () {
	enemyLives=1;
}

function Update () {

	if (enemyLives<=0)
	{
		Destroy(this.gameObject);
	}

}
