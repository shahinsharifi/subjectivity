# Subjectivity

## Run locally via Docker
For running the whole application locally inside a docker container, simply run the following command:

```
docker-compose up -d
```

Then, open the application on the browser: `http://localhost:8080/`

## Building from source (client and server applications)

### Dependencies

```
JAVA 8+
MAVEN 3.6+
PostgreSQL 10+
POSTGIS (optional)
Node 14.0+
NPM 6.0+
```


First, create a database using the sql file in the `./database/` folder.

Second, adjust the configurations in `./annotation-server/src/main/resources/application.properties`. Then run the following command in the root folder:

```
bash ./build.prod
```

* NOTE: To retreive street-level imagery data, the cyclomedia account information should be configured in the `application.properties`. In the future releases, we will add more data providers.

After the build process finished, the final war file can be found in: `./annotation-server/target/subjectivity.war`.



## Run locally (without docker)
For running the server application locally, go to  `./annotation-server/`, and run the following command:

```
mvn spring-boot:run

```

For running the client application, follow the instruction in `./subjectivity-client/`.