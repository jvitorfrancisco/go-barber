import IParseMailTemplateDTO from '../../MailTemplateProvider/dtos/IParseMaillTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDto {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTemplateDTO;
}
