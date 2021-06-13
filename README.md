# storybookAR
project for alphahacks where you go through an interactive story with the hopes that you learn some english

link: https://wbne.github.io/storybookAR/
hiro marker to load the story: https://3.bp.blogspot.com/-_rXmUhrNCt8/W0YImGVS1UI/AAAAAAAAECk/5uR-aSWdyx08jxRpRili6_B8D7NiCNHiQCLcBGAs/s320/hiro.png

## Inspiration
With audiobooks and new technology becoming more and more common, we thought that the next step in story-telling would be through AR. With the visual charm of children's novels combined with the wondrous technology of AR, it would create a near-magical experience for those reading.

## What it does
storybookAR reads the files and translates it to the website while also loading in the assets onto echoAR. As the user navigates throughout the choices, incorrect options are stated while correct options progress the user through the story.

## How we built it
It was built in HTML/CSS/JS with the echoAR framework providing the model and AR.js/Aframe.js allowing for the embedded camera and AR. Illustrations were created with FireAlpaca.

## Challenges we ran into
Writing the story of the book we were going to transform into an AR media was already surprisingly tough. Once that was completed, figuring out how to store the pages on an AR platform was another issue which echoAR solves. Finally the biggest hurdle was finding a way to seamlessly integrate a webcam into the website while still allowing for the AR model to appear. This took the majority of the time and was finally accomplished using aframe.js/ar.js and echoAR.

## Accomplishments that we're proud of
Being able to integrate augmented reality into a children's novel is incredibly satisfying and super fun to play around with.

## What we learned
The ease of use with echoAR's storage solution and its easy implementation with AR.js. Also writing a children's novel was much harder than we initially anticipated.

## What's next for storybookAR
More flexibility in data formats including static images, purely text stories, and more modular components.
