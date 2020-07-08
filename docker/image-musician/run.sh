echo "¯\_(ツ)_/¯ > Starting Musician RUN Script..."

echo "¯\_(ツ)_/¯ > Running the container..."

# Remove unwanted Docker CONTAINERs
docker rm -f flutiste pianiste batteur

# Runs the Docker CONTAINERs
docker run -d --name flutiste res/musician flute
docker run -d --name pianiste res/musician piano
docker run -d --name batteur res/musician drum

echo "¯\_(ツ)_/¯ > Finished Musician RUN Script."