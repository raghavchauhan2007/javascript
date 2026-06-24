FROM nginx:alpine

COPY 1/index.html /usr/share/nginx/html/index.html
COPY 1/script.js /usr/share/nginx/html/script.js
COPY 1/style.css /usr/share/nginx/html/style.css

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]