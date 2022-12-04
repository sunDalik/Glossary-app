## Run with docker 
Run  
```
docker-compose up --build -d 
```
  
Stop running containers  
```
docker-compose stop
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
