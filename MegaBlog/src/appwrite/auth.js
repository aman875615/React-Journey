
import { Client,acount} from "appwrite"

export class AuthService{
    client= new Client();
    account = new acount(this.client);

    constructor(){
        this.client
        .setEndpoint(conf.appwrite)
        .setProject(conf.projectId)
        this.account = new acount(this.client); 
    }
        async createAcount({email,password,name}){
            try{
               const userAccount = await this.account.create(ID.unique(),email,password,name);
               if(userAccount) {
                return this.login({email,password});
               } else {
                throw new Error("Account creation failed");
               }
            } catch (error) {
                throw error;
            }
        }

        async login(email,password){
            try {
                const response = await this.account.createEmailSession(email,password);
                return response;
            } catch (error) {
                throw error;
            }
        }
        async logout(){
            try {
                await this.account.deleteSessions();
            } catch (error) {
                console.error("Error logging out:", error);
                throw error;
            }   

        }

        async getCurrentUser(){
            try {
                const user = await this.account.get();
                return user;
            } catch (error) {
                console.error("Error fetching current user:", error);
                throw error;
            }
            return null;
        }
}
const authService = new AuthService();
export default authService