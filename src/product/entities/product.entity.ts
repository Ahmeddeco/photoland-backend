import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  image: string
  @Column()
  title: string
  @Column()
  description: string
  @Column()
  price: number
  @Column()
  isNew: boolean
}
