import { Address } from './Address';
import { Association } from './Association';

export class Member{
    cedula_member:number;
    first_name:String;
    second_name:String;
    first_last_name:String;
    second_last_name:String;
    email_member:String;
    password_member:String;
    image_profile_member:String;
    gender:String;
    is_active_user:boolean;
    phone_number:number;
    phoneNumberTwo:number;
    dateOfBirth:Date;
    address:Address;
    association:Association;
}