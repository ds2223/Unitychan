using UnityEngine;
using System.Collections;

public class Goal : MonoBehaviour {

	void OnTriggerEnter( Collider col )
	{
		col.SendMessage( "OnGoal" );
	}
}