import conf from "../conf/conf"
import {Databases ,Client,ID,Storage,Query } from "appwrite"

export class Service{
    client = new Client();
    databases ;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwrite)
        .setProject(conf.projectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            const response = await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title, content, featuredImage, status, userId}
            );
            return response;
        } catch (error) {
            console.error("Error creating post:", error);
            throw error;
        }

    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            const response = await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title, slug, content, featuredImage, status}
            );
            return response;
        }
        catch (error) {
            console.error("Error updating post:", error);
            throw error;
        }
    }
     async deletePost(postId){
        try {
            const response = await this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                postId
            );
            return response;
        }
        catch (error) {
            console.error("Error deleting post:", error);
            throw error;
           
        }
    }
        async getPosts(){
        try {
            const response = await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                [Query.equal("$createdAt")]
            );
            return response.documents;
        }
        catch (error) {
            console.error("Error fetching posts:", error);
            throw error;
        }
    }
    async uploadFile(file){
        try {
            const response = await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );
            return response;
        }
        catch (error) {
            console.error("Error uploading file:", error);
            throw error;
        }
    }
    async deleteFile(fileId){
        try {
            const response = await this.bucket.deleteFile(  
                conf.bucketId,
                fileId
            );
            return response;
        }
        catch (error) {
            console.error("Error deleting file:", error);
            throw error;
        }
    }
    async getFilePreview(fileId){

        try {
            const response = await this.bucket.getFilePreview(
                conf.bucketId,
                fileId
            );
            return response;
        }
        catch (error) {
            console.error("Error getting file preview:", error);
            throw error;
        }
    }
    
}
export const service = new Service();
export default service