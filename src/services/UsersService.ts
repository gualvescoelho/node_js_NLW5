import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/Users";
import { UsersRepository }from "../repositories/UsersRepository"


class UsersService{

    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async findByEmail(email: string) {
        const user = await this.usersRepository.findOne({ email });
      
        return user;
      }

    async create(email: string){
        //verificar se o usuario existe

        const userExists = await this.usersRepository.findOne({ //constante userExists recebe o valor retornado pelo repositorio quando encontrado
            email
        })

        //se existir retornar user
        if(userExists){
            return userExists;
        }

        const user = this.usersRepository.create({
            email
        });

        await this.usersRepository.save(user);
        
        //se não existir salvar no DB, e se existir retornar user
        return user;
    }

}

export{ UsersService }