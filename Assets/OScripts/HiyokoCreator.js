#pragma strict

public var obj : GameObject;
public var interval : float = 3;
private var time1 : float;
function Start () {

}

function Update () {
	time1 += Time.deltaTime;

	 if(time1 >= interval){
	 	time1 = 0;
	 	var hiyoko : GameObject = Instantiate(obj)as GameObject;
	 	hiyoko.transform.localPosition = Vector3(
	 		Random.Range(-3.0,3.0),
	 		Random.Range(1.0,5.0),
	 		Random.Range(30.0,40.0)
	 	);
	 } 
}