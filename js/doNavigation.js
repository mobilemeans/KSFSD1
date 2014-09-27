//control the next and previous button logic and prepare the story
var _myStory = localStorage.getItem("A4CSportsStory");
var _myStoryPos = localStorage.getItem("A4CSportsStoryPos");
var iStory = parseInt(_myStory);
var iPos = parseInt(_myStoryPos);

/*
story1 layout:
S1, S2, Team, S1, S2, TeamA, S1, S2, TeamB, Feed, S1, S2, TeamC, S1, S2

story2 layout:

story3 layout:

*/
	//1 = next; 0 = prev;
	function doNav(direction){
	
		switch(iStory) {
					case 1:
						if (_myStoryPos == "0"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "1"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'Team.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "2"){					
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html'; 
							}
						}
						
						else if (_myStoryPos == "3"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'Team.html';
							}
						}
						
						else if (_myStoryPos == "4"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'TeamA.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "5"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "6"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'TeamA.html';
							}
						}	
						
						
						else if (_myStoryPos == "7"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "8"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'Feeds.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S2.html';
							}
							
						}

						
						else if (_myStoryPos == "9"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html';
							}
						}	
						
						
						else if (_myStoryPos == "10"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'Feeds.html';
							}
						}
						
						
						else if (_myStoryPos == "11"){		
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'TeamC.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "12"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "13"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'TeamC.html';
							}
						}	
						
						
						else if (_myStoryPos == "14"){	
							if (direction == 1){
							
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "15"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "16"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "17"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'index.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';							
							}
						}	
						
						else{						
							window.location.href = 'index.html';
						}						
						break;
					
					case 2:
						if (_myStoryPos == "0"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "1"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "2"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "3"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'Team.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'S1.html';
							}
						}	

						else if (_myStoryPos == "4"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "5"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'Team.html';
							}
						}
						
						else if (_myStoryPos == "6"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'TeamA.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "7"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "8"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'Feeds.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'TeamA.html';
							}
						}
						
						else if (_myStoryPos == "9"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html';
							}
						}
						
						else if (_myStoryPos == "10"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'Feeds.html';
							}
						}
						
						else if (_myStoryPos == "11"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'TeamB.html';
							}
						}
						
						else if (_myStoryPos == "12"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "13"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "14"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "15"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "16"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "17"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 18);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "18"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 19);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "19"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 20);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 18);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "20"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 21);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 19);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "21"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 22);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 20);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "22"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 23);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 21);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "23"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 24);
								window.location.href = 'S1.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 22);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "24"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 25);
								window.location.href = 'S2.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 23);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "25"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'index.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 24);
								window.location.href = 'S1.html';
							}
						}
						
						else{						
							window.location.href = 'index.html';
						}						
						break;
						
					case 3:
						if (_myStoryPos == "0"){						
							$('#storyText').text(story3A); 
						}
						else if (_myStoryPos == "1"){				
							$('#storyText').text(story3B); 
						}
						else{						
							$('#storyText').text("Kid Stories For Sports Dads: Story 3");
						}						
						break;
					
					case 4:
						if (_myStoryPos == "0"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "1"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'TeamA.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "2"){					
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html'; 
							}
						}
						
						else if (_myStoryPos == "3"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'TeamA.html';
							}
						}
						
						else if (_myStoryPos == "4"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'Team.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "5"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'TeamC.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "6"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'Team.html';
							}
						}	
						
						
						else if (_myStoryPos == "7"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'TeamC.html';
							}
						}	
						
						
						else if (_myStoryPos == "8"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'Feeds.html';
							}
							
						}

						
						else if (_myStoryPos == "9"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "10"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'TeamB.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'S1.html';
							}
						}
						
						
						else if (_myStoryPos == "11"){		
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'Feeds.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "12"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'TeamB.html';
							}
						}	
						
						
						else if (_myStoryPos == "13"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'Feeds.html';
							}
						}	
						
						
						else if (_myStoryPos == "14"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "15"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S2.html';							
							}
						}	
						else if (_myStoryPos == "16"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "17"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 18);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';							
							}
						}	
						else if (_myStoryPos == "18"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 19);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "19"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 20);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 18);
								window.location.href = 'S2.html';							
							}
						}	
						else if (_myStoryPos == "20"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 21);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 19);
								window.location.href = 'S1.html';							
							}
						}
						else if (_myStoryPos == "21"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 22);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 20);
								window.location.href = 'S2.html';							
							}
						}
						else if (_myStoryPos == "22"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'index.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 21);
								window.location.href = 'S1.html';							
							}
						}
						
						else{						
							window.location.href = 'index.html';
						}						
						break;
					case 5:
					if (_myStoryPos == "0"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "1"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'Team.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "2"){					
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html'; 
							}
						}
						
						else if (_myStoryPos == "3"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'Team.html';
							}
						}
						
						
						else if (_myStoryPos == "4"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'TeamA.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "5"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
						}							
						
						else if (_myStoryPos == "6"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'TeamA.html';
							}
						}	
						
						
						else if (_myStoryPos == "7"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "8"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'Feeds.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S2.html';
							}
							
						}

						
						else if (_myStoryPos == "9"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'TeamB.html';
							}
						}	
						
						
						else if (_myStoryPos == "10"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'Feeds.html';
							}
						}
						
						/*
						else if (_myStoryPos == "11"){		
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'TeamC.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html';
							}
						}	
						*/
						
						else if (_myStoryPos == "11"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "13"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "14"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "15"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'index.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S1.html';							
							}
						}	
						
						else{						
							window.location.href = 'index.html';
						}						
						break;
					
					case 6:
					if (_myStoryPos == "0"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html';
							}
						}
						
						else if (_myStoryPos == "1"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'TeamA.html'; 
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'S1.html';
							}
						}
						
						else if (_myStoryPos == "2"){					
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 1);
								window.location.href = 'S2.html'; 
							}
						}
						
						else if (_myStoryPos == "3"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 2);
								window.location.href = 'TeamA.html';
							}
						}
						
						else if (_myStoryPos == "4"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'Team.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 3);
								window.location.href = 'S1.html';
							}
						}	
						
						
						else if (_myStoryPos == "5"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'TeamC.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 4);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "6"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 5);
								window.location.href = 'Team.html';
							}
						}	
						
						
						else if (_myStoryPos == "7"){
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 6);
								window.location.href = 'TeamC.html';
							}
						}	
						
						
						else if (_myStoryPos == "8"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 7);
								window.location.href = 'Feeds.html';
							}
							
						}

						
						else if (_myStoryPos == "9"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 8);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "10"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'TeamB.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 9);
								window.location.href = 'S1.html';
							}
						}
						
						
						else if (_myStoryPos == "11"){		
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'Feeds.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 10);
								window.location.href = 'S2.html';
							}
						}	
						
						
						else if (_myStoryPos == "12"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 11);
								window.location.href = 'TeamB.html';
							}
						}	
						
						
						else if (_myStoryPos == "13"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 12);
								window.location.href = 'Feeds.html';
							}
						}	
						
						
						else if (_myStoryPos == "14"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 13);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "15"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 14);
								window.location.href = 'S2.html';							
							}
						}	
						else if (_myStoryPos == "16"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S1.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 15);
								window.location.href = 'S1.html';							
							}
						}	
						else if (_myStoryPos == "17"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 18);
								window.location.href = 'S2.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 16);
								window.location.href = 'S2.html';							
							}
						}	
						else if (_myStoryPos == "18"){	
							if (direction == 1){
								localStorage.setItem("A4CSportsStoryPos", 0);
								window.location.href = 'index.html';
							}
							else{
								localStorage.setItem("A4CSportsStoryPos", 17);
								window.location.href = 'S1.html';							
							}
						}	
						
						else{						
							window.location.href = 'index.html';
						}						
						break;
					
					default:
						$('#storyText').text("Kid Stories For Sports Dads: Navigation");
				}		

	

	}	
	
