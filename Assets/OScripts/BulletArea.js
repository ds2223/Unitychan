#pragma strict

public static var bullet : boolean;
function Start () {
	bullet = false;
}

function OnTriggerEnter(col : Collider){
	if(col.gameObject.tag == "Player"){
			bullet = true;
	}
}