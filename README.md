# battleship_game
A virtual battleship game entailing the user to guess an interactive feed with NodeJS.


Requirements For Part 1
-When the application loads, print the text, "Press any key to start the game."
-When the user presses the key, your code will randomly place two different ships in two separate locations on the board. Each ship is only 1 unit long (In the real game ships are 2+ in length).
-The prompt will then say, "Enter a location to strike ie 'A2' "
-The user will then enter a location. If there is a ship at that location the prompt will read, "Hit. You have sunk a battleship. 1 ship remaining."
-If there is not a ship at that location the prompt will read, "You have missed!"
-If you enter a location you have already guessed the prompt will read, "You have already picked this location. Miss!"
-When both of the battleships have been destroyed the prompt will read, "You have destroyed all battleships. Would you like to play again? Y/N"
-If "Y" is selected the game starts over. If "N" then the application ends itself.

Requirments For Part 2
-Rewrite the code so that we use letters A-J and numbers 1-10. This will create a 100 unit grid.
-If you haven't already, create a function that builds the grid. This function will take a single number argument to build the grid accordingly. (i.e. buildGrid(3) will create a 3x3 grid (9 units), buildGrid(5) will create a 5x5 grid (25 units) buildGrid(10) creates a 10x10 (100 units), etc). 
-The computer will now place multiple ships in this format:
    1.) One two-unit ship
    2.) Two three-unit ships
    3.) One four-unit ship
    4.) One five-unit ship
-Keep in mind that your code cannot place two ships on intersecting paths
-Ship placement should be random (horizontally and vertically placed) and not manually placed by you in the code
-Ships must be placed within the grid boundaries
-The game works as before, except now, all ships must be destroyed to win
