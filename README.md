## Run with docker
Run  
```
docker build . -t glossary-app
docker run -d -p 8000:8000 glossary-app
```
You can then find out the id of your running container and stop it like this  
```
docker ps
docker stop containerid
```

## Run without docker

Setup dependencies  
```
npm install
cd frontend
npm install
```

Run
```  
cd frontend
npm run build
cd ..
npm run backend
```