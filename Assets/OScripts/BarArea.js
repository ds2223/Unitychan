#pragma strict

public static var bar : boolean;
function Start () {
	bar = false;
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
			bar = true;
	}
}