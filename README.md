# Title Changer
Lets you change titles client side
- Only you will see the changed title

## Usage
/8 title `set` `achievementID`
- Example: `/8 title set 1910`
- Sets your title to "Grim Angel"

/8 title `debug`
- Toggles debug mode that shows you the titles' achievement IDs when you change titles
- Can be used to find the ID of a title you have on another character
- If you wish to always have the same title, change the config `defaultTitle` from -1 to the desired achievement ID

### Example
- "Grim Angel" as default title
```json
{
    "debug": false,
    "defaultTitle": 1910
}
```

## Titles.json
This file contains some titles and their respective achievement IDs
- You can add the titles you know here, and even MR if you want to contribute

## Finding Titles
You can try asking someone that has the title you desire to use the debug option in this mod to get the achievement ID
It can be hard to find the new titles because there is no public repository of the achievement IDs (to my knowledge)
- I'm assuming there are 2,147,483,648 possible achievement IDs so going 1 by 1 isn't really an option

## TODO
- Add the possibility of saving different titles for different class/characters

## TOOLBOX
Should work in both the Tera Toolbox and Tera Private Toolbox