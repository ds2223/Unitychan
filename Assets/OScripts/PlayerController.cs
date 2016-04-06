using UnityEngine;
using System.Collections;
using UnitySampleAssets.CrossPlatformInput;

namespace UnityChan{
public class PlayerController : MonoBehaviour {

	Animator  anim;
	CapsuleCollider col;
	float baseHeight;
	public GameObject parts;
	UnityChanControlScriptWithRgidBody unitychan;


	// Use this for initialization
	void Start () {
		anim = GetComponent< Animator >();
		col = GetComponent< CapsuleCollider >();
		baseHeight = col.height;
		unitychan = GetComponent< UnityChanControlScriptWithRgidBody >();
	}

	// Update is called once per frame
	void Update () {

		AnimatorStateInfo currentBaseState = anim.GetCurrentAnimatorStateInfo(0);

		if( currentBaseState.IsName( "Base Layer.Locomotion" ) ) {
				if( CrossPlatformInputManager.GetButtonDown("Slide") ) {
				anim.SetTrigger( "Sliding" );
				}
				if( CrossPlatformInputManager.GetButtonDown("JM01") ) {
					anim.SetTrigger( "Jump" );
				}
		}
		if( currentBaseState.IsName( "Base Layer.Jump" ) ) {
			float height = anim.GetFloat( "JumpHeight" );
			if( height <= 0 ) {
				col.height = baseHeight + height;
				col.center = new Vector3( 0, 0.5f + (height*0.25f), 0 );
			}
		}
		if( currentBaseState.IsName( "Base Layer.Sliding" ) ) {
			float height = anim.GetFloat( "slidingHeight" );
			if( height <= 0 ) {
				col.height = baseHeight + height;
				col.center = new Vector3( 0, 0.5f + (height*0.25f), 0 );
			}
		}

	}

	void OnGoal() {
			int count = GameObject.FindGameObjectsWithTag ("Item").Length;
			if (count == 0) {
				unitychan.enabled = false;
				anim.SetBool ("Win", true);
			}
	}

	void OnPlaySound( AudioClip clip ) {
		GetComponent<AudioSource>().PlayOneShot( clip );
	}
	void OnPlaySound1( AudioClip clip ) {
		GetComponent<AudioSource>().PlayOneShot( clip );
	}
	void OnPlaySound2( AudioClip clip ) {
		GetComponent<AudioSource>().PlayOneShot( clip );
	}
	void OnPlaySound3( AudioClip clip ) {
		GetComponent<AudioSource>().PlayOneShot( clip );
	}
	void OnPlaySound4( AudioClip clip ) {
		GetComponent<AudioSource>().PlayOneShot( clip );
	}

	void OnCollisionEnter( Collision col ) {
		if( col.gameObject.tag == "Enemy" ) {
			int life = anim.GetInteger( "Life" ) - 1;
			if( life < 0 ) {
				life = 0;
			}
			anim.SetInteger( "Life", life );
				unitychan.enabled = false;
				parts.SetActive(true);
				//Invoke("Retry", 2.0f);

		}
	}
		void Retry(){
			Application.LoadLevel("main");
		}
}
}