import IParseMailTemplateDTO from '../dtos/IParseMaillTemplateDTO';

export default interface IMailProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
