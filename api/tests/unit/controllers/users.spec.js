const { password } = require("pg/lib/defaults");
const User = require("../../../models/user");
const usersController = require('../controllers/users')

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('users controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('createUser', () => {
        it('user created when body valid', async () => {
            const user = new User({
                username: "random-username",
                email: "random@email.com",
                password_set: "password"
            });
            jest.spyOn(User, 'createUser')
                 .mockResolvedValue(user);
            await usersController.createUser(user, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith({ msg: "User created!"});
        });
    });
});
