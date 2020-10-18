/* eslint-disable no-await-in-loop */

import { User } from '../entities/user.entity';

const tableName = 'User';
const data = [
    {
        id: 'b897cdd4-7761-44bc-85ba-67bd42f70e25',
        role: 'admin',
        firstName: 'firstName',
        secondName: 'secondName',
        lastName: 'lastName',
        userPic: 'https://c7.uihere.com/files/340/946/334/avatar-user-computer-icons-software-developer-avatar.jpg',
        phoneNumber: '88005553535',
        email: '1@gmail.com',
        password: 'aaaaaa',
        secret: 'secret',
        innNumber: '111111111111',
        companyId: '1',
        friendsIds: '',
        friendsRequestsIds: '',
        isActive: true,
    },
];

export default {
    async up(queryRunner) {
        try {
            if (!data) {
                return;
            }

            const { length } = data;
            const chunks = data.length / 100 >= 1 ? 100 : 1;


            for (let i = 1; i <= chunks; i++) {
                const chunkSize = length / chunks;


                await queryRunner
                    .manager
                    .createQueryBuilder()
                    .insert()
                    .into(User)
                    .values(data.slice((i - 1) * chunkSize, (i - 1) * chunkSize + chunkSize))
                    .execute();
                console.info(`🤖Chunk ${i} ready!`);
            }
            console.info(`❗Ready❗${tableName}`);
        } catch (err) {
            console.info(`❗Error in ${tableName}❗`, err);
            throw new Error(`❗Error in❗${tableName}`);
        }
    },
};
