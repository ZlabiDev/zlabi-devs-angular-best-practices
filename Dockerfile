# Use an official Nginx image as the base image
FROM nginx

# Copy the built Angular app to the appropriate location in the container
COPY dist/zlabi-devs-angular-best-practices /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 55555

# Start the Nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
