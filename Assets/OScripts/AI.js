#pragma strict
 
var target : GameObject;
var speed :float =  1.0;
var gravity : float = 20.0;
private var isEnable =  false;
 
function Update () {
    var controller : CharacterController = GetComponent(CharacterController);
    var moveDirection : Vector3 = Vector3.zero;
 

    if(isEnable==true){

    	//animation.Play("Run");

	if (Vector3.Distance(transform.position, target.transform.position)) {
             var targetDirection : Vector3 = target.transform.position;
	     targetDirection.y = 0;
	     transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.LookRotation(targetDirection - transform.position), Time.time * 0.1);

	     moveDirection += transform.forward * 1;
	     moveDirection.y -= gravity * Time.deltaTime;
	     controller.Move(moveDirection * Time.deltaTime * speed);
	}
    }
}

function OnTriggerEnter( colobj : Collider ){
    if(colobj.tag == 'Player'){
         isEnable =  true;
         target= colobj.gameObject;
    }
}
function OnTriggerExit( colobj : Collider ){
    if(colobj.tag == 'Player'){
        isEnable = false;
    }
}