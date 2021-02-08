# Patch note

## Changes
- Removed the button game only
- New Feature : Added the button DisplayMode
    - Show game only, chat only or both
    - When chat only, the chat is enlarger
- When game only or chat only is choosed
    - New bar to show buttons
    - Show the name of the game
- New feature : Notifications
    - When the window of the chat is not on focus, the title of the page add the number of new messages
    - Click on the button
        - Open a new window
        - Hide the button
        - Reset the counter of unread messages of the website (but you still need to reset the page to check if you have new messages)

## Code improvements
- Features are now in an object
- Files renamed
- Optimization of code
    - Code ready to add a new button to be able to active or not a feature
- Optimization of cookies (instead to have 1 cookie by feature, we have now 1 cookie for website + 1 cookie / game)
    - kong_addon on kongregate.com : darkMode/onlineplayers/textsize
    - kong_addon_games on kongregate.com/games : lockscreen/displayMode/volume/brightness
- Added shinny option for stickers when DarkMode on
- Added darkMode as feature to be able to unable it easily if needed
- Reset styles instead of add new styles when darkmode change

## Fixes
- Titles of some buttons
- Center correctly the game/chat
- DarkMode button hide correctly with the height of the page is too low
- Resize correctly gameOnly & chatOnly
- Boolean values of cookies
- Background hover of unread messages
- Background of stickers
- Stickers are back