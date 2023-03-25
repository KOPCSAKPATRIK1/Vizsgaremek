import { Column } from "typeorm";

export default class CartDto {
    quantity: number;
    productId: number;
    userId: number;
    sizeId: number;
}