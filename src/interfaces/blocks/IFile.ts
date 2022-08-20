export default interface IFile {
  type: 'file';
  external_id: string;
  source: string;
  block_id?: string;
}
