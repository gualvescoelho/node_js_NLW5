import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn } from "typeorm";

import { v4 as uuid} from "uuid"; //v4 gera numeros aleatorios, e para sabermos que esta sendo feito assim foi nomeado de uuid

@Entity("settings")
class Setting {
    @PrimaryColumn() //poderia fazer: @PrimaryColumn({name: "id"})
    id: String;

    @Column()
    username: string;

    @Column()
    chat: boolean;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()
    created_at: Date;

    constructor(){ //vai testar se o ID ja esta preenchido
        if(!this.id){
            this.id = uuid(); //gerando valor para id vazio
        }
    }
}

export { Setting };