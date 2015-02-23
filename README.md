# whiteboard
Interactive whiteboard web-app built for Nurep interview coding exercise.

## Plan of attack
* Create a Node.js server that handles websocket connections.
* Serve an HTML page that has JavaScript to connect to the websocket server.
    * HTML page will have a canvas element on it.
* Whenever canvas is drawn on, generate a packet with the pixel that was drawn and send it to the websocket server
* Have the websocket server relay all pixel coloring packets to all clients.
