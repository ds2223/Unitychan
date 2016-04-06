#pragma strict
public var parts : GameObject;

function Update () {
	if(BulletArea.bullet){
		parts.SetActive(true);

	}
}