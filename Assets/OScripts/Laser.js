#pragma strict

public var power : float = 6.5;
private var target : GameObject;

function Start () {
	target = GameObject.FindGameObjectWithTag("Wall");
	Invoke("Destroy01", 10.0f);
}

function FixedUpdate () {
	var direction : Vector3 = target.transform.position - transform.position;
	GetComponent.<Rigidbody>().AddForce(direction.normalized * power);
	transform.LookAt(direction);
}
function Destroy01(){
	Destroy (gameObject);
}