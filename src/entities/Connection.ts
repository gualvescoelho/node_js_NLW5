import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid} from "uuid"; //v4 gera numeros aleatorios, e para sabermos que esta sendo feito assim foi nomeado de uuid
import { User } from "./Users";

@Entity("connections")
class Connection{
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    socket_id: string;

    @JoinColumn({ name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }
}

export { Connection }