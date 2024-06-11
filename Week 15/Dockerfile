# # base image
# FROM node:20

# # working directory
# WORKDIR /app    

# # COPIES FILES from the directory to the app working directory
# # this not the most optimal we can do that later
# COPY . .

# # commands that was ran in the terminal
# RUN npm install
# RUN npm run build
# RUN npx prisma generate


# # exposed to this particular port
# EXPOSE 3000


# # all of the above runs when we create the image
# # whatever is written after CMD runs after we start the image

# CMD ["node", "dist/index.js"]



# --------------------------------------------------------------
#  An optimised way of caching most of the files

FROM node:20
WORKDIR /app
COPY package* .
COPY ./prisma .
RUN npm install
RUN npx prisma generate
COPY . .
RUN npm run build 
EXPOSE 3000
CMD ["node", "dist/index.js"]
