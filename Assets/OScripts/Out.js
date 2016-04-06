#pragma strict
import UnityEngine.UI;
public var parts : GameObject;

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
		//Application.LoadLevel(Application.loadedLevel);
		parts.SetActive(true);
	}
}
