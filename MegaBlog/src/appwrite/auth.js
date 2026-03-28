// import conf from "../conf/conf.js";
// import { Client,Acount,ID} from "appwrite"


// export class AuthService{
//     client= new Client();
//     account ;

//     constructor(){
//         this.client
//         .setEndpoint(conf.appwrite)
//         .setProject(conf.projectId)
//         this.account = new Acount(this.client); 
//     }
//         async createAcount({email,password,name}){
//             try{
//                const userAccount = await this.account.create(ID.unique(),email,password,name);
//                if(userAccount) {
//                 return this.login(email,password);
//                } else {
//                 throw new Error("Account creation failed");
//                }
//             } catch (error) {
//                 throw error;
//             }
//         }

//         async login(email,password){
//             try {
//                 const response = await this.account.createEmailSession(email,password);
//                 return response;
//             } catch (error) {
//                 throw error;
//             }
//         }
//         async logout(){
//             try {
//                 await this.account.deleteSessions();
//             } catch (error) {
//                 console.error("Error logging out:", error);
//                 throw error;
//             }   

//         }

//         async getCurrentUser(){
//             try {
//                 const user = await this.account.get();
//                 return user;
//             } catch (error) {
//                 console.error("Error fetching current user:", error);
//                 throw error;
//             }
//             return null;
//         }

// }
// const authService = new AuthService();
// export default authService



import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwrite)
            .setProject(conf.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );

            if (userAccount) {
                return this.login(email, password);
            } else {
                throw new Error("Account creation failed");
            }
        } catch (error) {
            throw error;
        }
    }

    async login(email, password) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Error logging out:", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Error fetching current user:", error);
            return null;
        }
    }
}

const authService = new AuthService();
export default authService;