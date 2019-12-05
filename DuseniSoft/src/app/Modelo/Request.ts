import { Product } from './Product';
import { Address } from './Address';

export class Request{
    id_request: number;
    description: String;
    creation_date_request:Date;
    limit_date_request:Date;
    required_quantity:number;
    quantity: number;
    product:Product;
    is_active:boolean;
    price_per_unit_to_pay:number;
    address_request:Address;
}
