#pragma strict
import UnityEngine.UI;

private var highScore : int;
public var resultTime : Text;
public var bestTime : Text;
public var parts : GameObject;


function Start () {
	if(PlayerPrefs.HasKey("HighScore")){
		highScore = PlayerPrefs.GetInt("HighScore");
	}
	else {
		highScore = 999;
	}
}

function Update () {
	if(GoalArea.goal){
		parts.SetActive(true);
		var result = Mathf.FloorToInt(Timer.time);
		resultTime.text = "ResultTime " + result;
		bestTime.text = "HighScore" + highScore;

		if(highScore > result){
			PlayerPrefs.SetInt("HighScore",result);
		}
	}
}

function OnRetry(){
	Application.LoadLevel("main");
}