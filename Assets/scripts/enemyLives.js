#pragma strict

public var enemyLives:int;

function Start () {
	enemyLives=3;
}

function Update () {

	if (enemyLives<=0)
	{
		Destroy(this.gameObject);
	}

}
