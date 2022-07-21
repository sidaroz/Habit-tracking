## Habit-tracking- Libits

## Contributors 
- Anwar
- Jaxsan
- Sami
- Sidar
- Melissa

## Installation
- Clone or download the repo
- Open terminal and navigate to api folder & client folder
- Run npm install to install dependencies

## Usage
- Run `bash _scripts/startDev.sh` to get the API and DB containers running and then open the client on live server
- Run `bash _scripts/startTest.sh` to execute the tests on the backend
- Run `bash _scripts/tearDown.sh` to stop and delete the containers. 

Do not run startDev and startTest simulanteously. 


## Design
### Homepage
<img width="345" alt="Screenshot 2022-04-13 at 12 29 05" src="https://user-images.githubusercontent.com/58670404/163204210-cdc2743b-8ba2-4479-b72d-7708e34bddff.png">

### Register
<img width="345" alt="Screenshot 2022-04-13 at 12 29 20" src="https://user-images.githubusercontent.com/58670404/163204164-80369f38-0a7f-4458-8da4-1df97a3b9f0d.png">

### Login
<img width="345" alt="Screenshot 2022-04-13 at 12 29 12" src="https://user-images.githubusercontent.com/58670404/163204071-e29536c1-1116-4a41-a3b1-d270b6ec2f90.png">
 
### Habits
<img width="345" alt="Screenshot 2022-04-13 at 12 29 30" src="https://user-images.githubusercontent.com/58670404/163203977-4793ff8d-ac74-4b5c-aedc-119d90b8d8ba.png">

### Add Habits
<img width="345" alt="Screenshot 2022-04-13 at 12 29 38" src="https://user-images.githubusercontent.com/58670404/163203916-de231e8e-eac0-498f-8bb5-9eb6a8a1e161.png">

## Test
- Test coverage 88%
<img width="557" alt="Screenshot 2022-04-13 at 14 59 46" src="https://user-images.githubusercontent.com/58670404/163197566-600b60ad-dac1-4e28-ac37-87fd8aa82357.png">


## Wins
- After registering the page automatically login 
- Add habit form pops down when clicked on 
- Each habit can be deleted using the `X` button on the right 
- `+` button on the left increase the count by one for each habit
- Once the counter reached the goal, the habit will be crossed out 

## Challenges
- Streak 

