#Install a lighter version of node10 
FROM node:10-alpine 

#Build two directories where the project will be on
WORKDIR /usr/app

#Copy these two files from the project to the root repository of the image
COPY package.json package-lock.json tsconfig.json ./

#Install the dependencies of the project on the image 
RUN npm install

#Copy all the remaining files into the image 
copy . .

#Exposes the port that the app runs 
EXPOSE 3000

#Execute the command npm start
CMD ["npm", "start"]