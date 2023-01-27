# CodeWing
CodeWing is a collaborative editor  that allows several people to edit, view, compile a programming code simultaneously  over a computer network. Users can edit the same code, run the code, can chat through the text box in real time. 

This is our System Practicum (CS307) Group Project.

## APP Sources
1. App is Deploy on GitHub - [CodeWing ;)](https://prashant280920.github.io/CodeWing/). But there is chance that chat, video and whiteboard heroku servers are not working now
2. Source Code - [prashant280920/CodeWing](https://github.com/prashant280920/CodeWing)
3. PPT - [Link](https://github.com/prashant280920/CS307_System_Practicum/tree/main/SysPrac_Project)
4. Presentation + Demo on [Youtube](https://youtu.be/GrOmdXlWy04) 

## Our Team 

1. [Prashant Kumar](https://github.com/prashant280920)
2. [Saloni Patidar](https://github.com/Saloni1771)
3. [Gaurav Sahitya](https://github.com/gaurav-sahitya)
4. [Sagar Tarafder](https://github.com/sagartarafder6)
5. [Ravi Kumar](https://github.com/RaviKumar7870)
6. [Shubham Saurav](https://github.com/sauravshub1)

## Features
1. Video Call Application: Multiple people can interact in a room to talk with each other.
2. RealTime WhiteBoard: Diffrent people can interact to explain their thoughts on a whiteboard. 
3. RealTime Code Editor: Editor where different people write code in a room.
4. Code Compilation and Download: Allow compilation of code, also download it.
5. Chat Application: Allow differnt user to chat with each other in a room.

## Implimentaion
### Frontent
1. We have used [SvelteJS](https://svelte.dev/) for frontend.
2. To implement the Collaborating Text Editor we have used CodeMirror of [Firepad](https://firepad.io/examples/#-rrTN85TPay).
3. Chat, Video, and White board uses WebSocjet to connect with server.

### Backend
1. We have used four different server in [NodeJS](https://nodejs.org/en/) each of them hosted on [Heroku](https://www.heroku.com/) 
2. [White Board Server](https://github.com/salon280920/wb_server) for implementing white board.
3. [Video Server](https://github.com/salon280920/video_server) for implementing Video application.
4. [Chat Server](https://github.com/salon280920/chat_server) for implementing chat application.
5. [Peer Js](https://peerjs.com/#:~:text=PeerJS%20simplifies%20WebRTC%20peer%2Dto,connection%20to%20a%20remote%20peer.) PeerJS simplifies WebRTC peer-to-peer data, video, and audio calls

### ScreenShot
![Screenshot](https://user-images.githubusercontent.com/60234231/171387625-ba13f716-5501-4325-bea4-d756f9c5434b.png)

## Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**. Go ahead and fork the project.

## Setting Up the Environment

To setup the environment first you have to run the four different servers loaclly. Lets get started
### 1. Start Chat Server
1. Clone the repo - `https://github.com/salon280920/chat_server`
2. Install the dependencies...
```bash
cd chat_server
npm install
```
3. Run - `npm start`. Server will run locally on port 3000.

### 2. Start White Board Server
1. Clone the repo - `https://github.com/salon280920/wb_server`
2. Install the dependencies...
```bash
cd wb_server
npm install
```
3. Run - `npm start`. Server will run locally on port 2000.

### 3. Start Video Server and PeerJS
1. Clone the repo - `https://github.com/salon280920/video_server`
2. Install the dependencies...
```bash
cd video_server
npm install
```
3. Run - `npm start`. Server will run locally on port 4000.
4. Now to start the Peerjs Server. Open new terminal in the same video_server directory.
5. Install Perrjs globally
```bash
npm install -g peerjs
```
6. Start the peerjs server on port 3001 only. **Note** - Also make sure that you are conected to internet. Otherwise streaming on different tabs is not visible.
```bash
peerjs --port 3001
```
7. If you face error like this then open **Powershell as Administrator** and run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted` or follow this [link](https://stackoverflow.com/questions/41117421/ps1-cannot-be-loaded-because-running-scripts-is-disabled-on-this-system) to resolve the error 
![2023-01-26](https://user-images.githubusercontent.com/60234231/215140271-f7cd84cf-8e0e-4707-a539-005fe5fd2008.png)


### 4. Now SetUp the Frontent 
1. Fork the repo 
2. Clone the repo - `git clone https://github.com/prashant280920/CodeWing.git`
3. Install the dependencies...
```bash
cd CodeWing
npm install
```
4. Start [Rollup](https://rollupjs.org):

```bash
npm run dev
```
5. Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.
6. **Note** - Make sure that you are connected to internet. Otherwise realtime changes are not visible.
7. Now copy the room link from browser tab and paste in new tab to see the real time changes in both tabs. Result will look linke image shown below. Also make sure
![2023-01-27 (7)](https://user-images.githubusercontent.com/60234231/215146250-9159dbc7-e079-44d0-8434-4159e3f56e56.png)
![Screenshot (10)](https://user-images.githubusercontent.com/60234231/215143818-de7a051f-6a60-4f09-9854-8a6ea6f44a9e.png)
