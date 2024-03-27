export class Universite {
  constructor(
    public universite_id: number,
    public nom: string,
    public ville: string,
    public descriptif: string,
    public email: string,
    public telephone: string,
    public site_web: string,
    public imageurl: string
  ) {}
}
