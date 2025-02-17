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

<p align="center"><img width="290" alt="Screenshot 2022-04-13 at 17 49 08" src="https://user-images.githubusercontent.com/58670404/163230701-7736b3d2-84da-47f4-bc0c-a1161e4e2c5d.png"></p>

### Register

<p align="center"><img width="290" alt="Screenshot 2022-04-13 at 17 49 29" src="https://user-images.githubusercontent.com/58670404/163230829-b6372cb5-ffa3-4e5e-bd58-a5d87b1692f5.png"></p>

### Login

<p align="center"><img width="290" alt="Screenshot 2022-04-13 at 17 49 19" src="https://user-images.githubusercontent.com/58670404/163230791-9abdd48d-a23a-44e0-b437-d59997ded62d.png"></p>

### Habits

<p align="center"><img width="290" alt="Screenshot 2022-04-14 at 10 19 44" src="https://user-images.githubusercontent.com/58670404/163354906-388e0fc6-ebd1-4ccf-b230-ac7aa87a1e29.png"></p>

### Add Habits

<p align="center"><img width="290" alt="Screenshot 2022-04-14 at 10 19 33" src="https://user-images.githubusercontent.com/58670404/163354998-931ea8c4-abad-4ba6-b132-3d12ff533c97.png"></p>

## Test

- Test coverage 88%
<p align="center"><img width="500" alt="Screenshot 2022-04-13 at 14 59 46" src="https://user-images.githubusercontent.com/58670404/163197566-600b60ad-dac1-4e28-ac37-87fd8aa82357.png"></p>

## Wins

- After registering the page automatically login
- Add habit form pops down when clicked on
- Each habit can be deleted using the `X` button on the right
- `+` button on the left increase the count by one for each habit
- Once the counter reached the goal, the habit will be crossed out

## Challenges

- Streak
