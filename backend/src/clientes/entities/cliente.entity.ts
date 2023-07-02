import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ type: 'decimal', precision: 8, scale: 2, default: 0 })
  saldo: number;

  @Column({ default: true })
  isActive: boolean;
}
