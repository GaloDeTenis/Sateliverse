# Nasa Space App Challenge
<img src="https://i.imgur.com/emloLO1.png" width="280px">

### What is Sateliverse ? 

The idea of Sateliverse is to create a multiplataform application that will bring a friendly graphical interface and will also allow the user so he will be able to navigate throughout a satellites network in order to obtain their informations. The app features contextualizations about the satellites understanding as its daily influence, making the access of the area information more accessible because those are considered too techinical for a clear understading if they would have been presented to the public who is not part of a astronomic context the way they originaly are, in order to deepen the satelittes information about their orbits behaviors, so provinding a ambientation regarding the satelittes features, their aplications, possible positions in a specific timestamp.


<img src="https://i.imgur.com/oH8kTxe.png" width="160px">   <img src="https://i.imgur.com/4vBPkYC.jpg" width="160px">

<img src="https://i.imgur.com/ldVTb61.jpg" width="160px" heigth="190px"> <img src="https://i.imgur.com/1NdRC84.jpg" width="160px">

<img src="https://i.imgur.com/5aCYtM4.jpg" height="160px"> <img src="https://i.imgur.com/U1GVNoE.jpg" height="160px">

### How we use the Nasa datas ?

The API SSC RESTFUL has been used to obtain the informations regarding the satelittes's name, lines 1 and 2. From that, the API resulting data wiil be process by the TLE Satellite which will return a useful information set for the well aplication behavioring, as the approximate location given a time period, trajectory, and velocity.

### Tecnology

1. A-Frame Framework: https://aframe.io/examples/showcase/|anime-UI/
2. Nasa API(REST): https://sscweb.gsfc.nasa.gov/WebServices/REST/
3. Satellite TLE lib tools: https://github.com/davidcalhoun/tle.js/
4. VueJS: https://vuejs.org/



### How run the poject ?

Open the directory of project and execute in a terminal:
```bash
    $ npm install
    $ npm start
```
