import ISendMailDto from '../dtos/ISendMailDTO';

export default interface IMailProvider {
  sendMail(message: ISendMailDto): Promise<void>;
}
