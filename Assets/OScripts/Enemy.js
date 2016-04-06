#pragma strict

public static var Dead : boolean;
function Start () {
	Dead = false;
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
			Dead = true;
	}
}