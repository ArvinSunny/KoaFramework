import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export default class User {

  @PrimaryGeneratedColumn('uuid')
  user_id: string | undefined

  @Column({
    length: 20,
  })
  user_name: string | undefined

  @Column()
  password: string | undefined

  @Column()
  status: number | undefined

}