# Friend-Finder

This is a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match. 

It converts each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).

Then compares the difference between current user's scores against those from other users, question by question. Once done, it adds up the differences to calculate the totalDifference.


Example: 

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

## Languages

#### Express, Node.js, JavaScript, HTML, CSS