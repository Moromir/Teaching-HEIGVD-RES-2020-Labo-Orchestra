echo "¯\_(ツ)_/¯ > Starting Auditor RUN Script..."

echo "¯\_(ツ)_/¯ > Running the container..."

# Remove unwanted Docker CONTAINERs
docker rm -f auditeur

# Runs the Docker CONTAINERs
docker run -d -p 2205:2205 --name auditeur res/auditor

echo "¯\_(ツ)_/¯ > Finished Auditor RUN Script."