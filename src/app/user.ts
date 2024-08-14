export interface User{
    member_id : number;

      first_name:string,
      last_name: string,
      gender: string,
      category: null,
      language: string,
      artist_image: string,
      slang: string,

}
export interface UserInformation{
    message: User[];
}