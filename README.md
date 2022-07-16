D&D Enemy Sorter

This tool will make it easier to sort through all of the different possible enemies in Dungeons & Dragons (5th Edition). This is done by using the fetch() process through the public (https://www.dnd5eapi.co) D&D API.
After the information is retrieved we use .filter() to pick and choose which information we would like, as D&D 5e is a bottomless well of information this is crucial. This tool currently in it’s initial version will solely focus on filtering the enemies based on size.


Using the tool
Using the provided dropdown menu, select which enemy size you’d like to see listed. Thanks to an event listener for the menu, it will automatically display a grid of enemies including name, size and type. When you’re done reviewing your selection or you’d like to see another list hit the “Reset” button on the top right of the page and it will reload, allowing you to make an additional selection.


Roadmap
Future versions will include other details of the enemies to further filter to see if there is a purpose made foe you’re looking for. These other traits will then cross-reference and produce the enemies that fit the selection.

Example: 
Size : Large
Environment : Underground
Alignment : Lawful Evil

Any and all enemies within the API that fit those specifications will be displayed, with a picture and a URL link for them specifically.
