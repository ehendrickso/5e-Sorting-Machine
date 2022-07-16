D&D Enemy Sorter

## Introduction
This tool will make it easier to sort through many of the different enemies in Dungeons & Dragons (5th Edition). This is done by using the fetch() process through the public (https://www.dnd5eapi.co) D&D API.
After the information is retrieved we use .filter() to pick and choose which information we would like, as D&D 5e is a bottomless well of information this is crucial. This tool currently in it’s initial version will solely focus on filtering the enemies based on size.


## Setting up the tool
Clone the SSH link from GitHub into your terminal. This will include a index.html, index.js, and index.css most notably, it will also include some json documents. You can review the use of filter() and map() in the index.js file.
From within the cloned directory start a local http server using the `$ http-server ` command. You should recieve a brief wall of text stating your http-server version followed by a list of settings, although important we're more interested on the "Available on:" heading. You should see `http://127.0.0.1:XXXX` the X's will depend on the port you're using. Copy that address and paste in your browser.

## Using the tool

Using the provided dropdown menu, select which enemy size you’d like to see listed. Thanks to an event listener for the menu, it will automatically display a grid of enemies including name, size and type. When you’re done reviewing your selection or you’d like to see another list hit the “Reset” button on the top right of the page and it will reload, allowing you to make an additional selection.





## Roadmap

Future versions will include other details of the enemies to further filter to see if there is a purpose made foe you’re looking for. These other traits will then cross-reference and produce the enemies that fit the selection.

Example: 
Size : Large
Environment : Underground
Alignment : Lawful Evil

Any and all enemies within the API that fit those specifications will be displayed, with a picture and a URL link for them specifically.

May include "like" enemies, suggestions for other enemies that are frequently found together.






## Licensing

The SRD, or Systems Reference Document, contains guidelines for publishing content under the OGL. This allows for some of the data for D&D 5e to be open source. The API only covers data that can be found in the SRD. Here's a link to the full text of the SRD.   https://en.wikipedia.org/wiki/Open_Game_License

The Open Game License (OGL) is a public copyright license by Wizards of the Coast that may be used by tabletop role-playing game developers to grant permission to modify, copy, and redistribute some of the content designed for their games, notably game mechanics. However, they must share-alike copies and derivative works. 

