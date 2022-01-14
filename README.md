# Running Exercise1
### Make sure you are in project directory
`Docker build -f Dockerfile.exercise1 -t exercise1 .`
`Docker run -i -p 8000:8080 exercise1`

Now you will have exercise1 running at http://127.0.0.1:8000

# Running Exercise2
### Make sure you are in project directory
`Docker build -f Dockerfile.exercise2 -t exercise2 .`
`Docker run -i -p 8001:8080 exercise2`

Now you will have exercise2 running at http://127.0.0.1:8001

# Runing Exercise3
### Make sure you are in project directory

`npm i`
`node exercise3 $fundName`
NOTE: $fundName is an arguments for searching NAV value
