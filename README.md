# api

Denne app sender data til et hotel bookingsystem via json.

Dette app kan køres i docker ved at følge følgende steps:

1. git clone https://github.com/Sune1998/Backend-RESTFUL.git

2. cd Backend-RESTFUL/

byg imagede via følgende commando:

3.  sudo docker build -t your username/backend-RESTFUL . 

derefter kan du køre dit image ved hjælp af:

4. sudo docker run -p 4900:3000 -d your username/backend-RESTFUL

du burde du kunne tilgå appen på localhost:4900

eventueelt kan du se om dit image køre ved hjælp af docker ps


