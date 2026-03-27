import conf from "../conf/conf"
import {Databases ,Client,ID,Storage,Query } from "appwrite"

export class Service{
    client = new Client();
    database ;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwrite)
        .setProject(conf.projectId)
        this.database = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,}){
        try {
            const response = await this.database.createDocument(
                conf.databaseId,
                conf.collectionId,
                ID.unique(),
                {title, slug, content, featuredImage, status}
            );
            return response;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }

    }
}
export const service = new Service();
export default service