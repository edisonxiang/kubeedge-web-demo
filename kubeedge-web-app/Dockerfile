# Based on centos
FROM centos:7.6.1810
LABEL maintainers="KubeEdge Authors"
LABEL description="KubeEdge Web App"

# Copy from build directory
COPY kubeedge-web-app /kubeedge-web-app

# Update
RUN yum -y update

# Define default command
ENTRYPOINT ["/kubeedge-web-app"]

# Run the executable
CMD ["kubeedge-web-app"]
