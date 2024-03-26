export class Faculte {
  constructor(
    public faculte_id: number,
    public nom: string,
    public descriptif: string,
    public condition_admission: string,
    public email: string,
    public telephnone: string,
    public universite_id: number,
    public imageurl: string
  ) {}
}
