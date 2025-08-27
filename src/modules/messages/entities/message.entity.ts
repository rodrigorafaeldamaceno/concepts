export class MessageEntity {
  readonly id: number;
  readonly content: string;
  readonly from: string;
  readonly to: string;
  readonly read: boolean;
  readonly date: Date;
}
