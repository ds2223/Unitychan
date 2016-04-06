#pragma strict

public static var goal : boolean;
private var count : int;
function Start () {
	goal = false;
}

function OnTriggerEnter(col : Collider){
	count = GameObject.FindGameObjectsWithTag ("Item").Length;
	if(col.gameObject.tag == "Player"){
		if(count == 0){
			goal = true;
		}
	}
}